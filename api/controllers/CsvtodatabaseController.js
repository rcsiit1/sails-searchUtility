const csv = require('fast-csv');
const NodeGeocoder = require('node-geocoder');
const async = require('async');

var insertData = async (req, res) => {
  let readCsv = (callback) => {
    var addresses = [];
    var names = [];
    let csvStream = csv.fromPath('./assets/mycsv.csv', { headers: true })
      .on('data', (record) => {
       csvStream.pause();
        if (record) {
          addresses.push(record.Address);
          names.push(record.Name);
        }
        csvStream.resume();
      }).on('end', () => {
        console.log("Job done!");
        callback(null, addresses);
      }).on('error', () => {
        console.log('error');
      });
  };

  let googleGeocoding = (addresses, callback) => {
    const options = {
      provider: 'google',
      httpAdapter: 'https',
      apiKey: 'AIzaSyBJn9YoTvEO_7o8JcfO33ZT8kWMy9P_IVs',
      formatter: null
    };
    var geocoder = NodeGeocoder(options);
    geocoder.batchGeocode(addresses, (err, results) => {

      if (err) {
        return callback(err);
      }
      else {
        return callback(null, results);
      }
    });
  };

  let updateDatabase = (results, callback) => {
    for (let i = 1; i < results.length; i++) {
      Csvtodatabase.create({ address: results[i].value[0].formattedAddress, lat: results[i].value[0].latitude, long: results[i].value[0].longitude }).exec((err, allData) => {
        if (err) {
          res.send(500, { error: err });
        }
        else {
          return callback(null, allData);
        }

      });
    }
    return callback(null, 'success');
  };

  async.waterfall([
    readCsv,
    googleGeocoding,
    updateDatabase,
  ], (err, result) => {

    if (err) {
      res.json({ error: err });
    }
    else {
      res.json({ result: result });
      //console.log(JSON.stringify(result));
    }

  });
};

module.exports = {
  insertData: insertData,

};

