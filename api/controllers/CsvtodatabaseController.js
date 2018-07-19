const csv = require('fast-csv');
const NodeGeocoder = require('node-geocoder');


var insertData = async (req, res) => {
  function ran() {
    console.log("open functions");
    var results = [];
    csv.fromPath('./assets/mycsv.csv', { headers: true })
      .on('data', (record) => {
        results.push(record);
      }).on('end', () => {
        console.log("Process Completed!");
        googleGeocoding(results);
      }).on('error', () => {
        console.log('error');
      });
  };


  function googleGeocoding(results) {
    console.log("world");
    const options = {
      provider: 'google',
      httpAdapter: 'https',
      apiKey: 'AIzaSyBJn9YoTvEO_7o8JcfO33ZT8kWMy9P_IVs ',
      formatter: null
    };
    var geocoder = NodeGeocoder(options);

    for (let i = 0; i < results.length; i++) {
      //console.log(results.Locations);
      if (results[i].Locations !== undefined) {
        geocoder.geocode(results[i].Locations, async (err, res) => {
          try {
            //console.log(res);
            if (res && res.length > 0 && res[0] !== undefined) {
              console.log(res);
              await Csvtodatabase.create({ title: results[i].Title, actor1: results[i].Actor1, actor2: results[i].Actor2, actor3: results[i].Actor3, production: results[i].ProductionCompany, release: results[i].ReleaseYear, locations: results[i].Locations, lat: res[0].latitude, long: res[0].longitude });

            }
          }
          catch (err) {
            console.log(err);
          }
        });
      }
    }
  };
  ran();
};






module.exports = {
  insertData: insertData,

};

