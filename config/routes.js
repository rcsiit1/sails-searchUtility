

module.exports.routes = {

  '/': {
    view: 'pages/homepage'
  },
  '/dataChange/': {

    controller: 'CsvtodatabaseController',
    action: 'insertData'
  },
  '/searchUtility/': {

    controller: 'SearchController',
    action: 'searchUtility'
  },
  '/search': {

    controller: 'SearchController',
    action: 'search'
  },

};
