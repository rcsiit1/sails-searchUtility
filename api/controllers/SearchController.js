
let searchUtility = async (req, res) => {
  res.view('pages/search', { layout: false });
};

let search = async (req, res) => {
  let q = req.body.search_query;
  let category = req.body.category;
  let query = {};
  let subquery = {};
  subquery['contains'] = q;
  query[category] = subquery;
  let results = await Csvtodatabase.find(query);
  res.view('pages/searchResult',{ results: results });
};
module.exports = {
  searchUtility: searchUtility,
  search: search

};

