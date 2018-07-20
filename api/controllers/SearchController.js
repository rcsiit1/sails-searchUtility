
let searchUtility = async (req, res) => {
  res.view('pages/search', { layout: false });
};

let search = async (req, res) => {
  let q = req.param('search_query');
  let category = req.param('category');
  console.log(category);
  let query = {};
  let subquery = {};
  subquery['contains'] = q;
  query[category] = subquery;
  let results = await Csvtodatabase.find(query);
  console.log(results);
  res.json({ results: results});
};

module.exports = {
  searchUtility: searchUtility,
  search: search,


};

