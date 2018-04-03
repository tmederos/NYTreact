// require axios
var axios = require("axios");

function getArticles (req, res) {
  console.log( "top of Article scraping - " + req.query.topic );
  var topic = req.query.topic;
  var startYear = req.query.startYear;
  var endYear = req.query.endYear;
  //NYT API key
  var APIkey= "38a27ae797ff4ab4b1eff38c11ee4596";
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIkey + "&q="+ topic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "1231";
  return axios.get(queryURL)
  .then(function(response){
    console.log("Response ####################################", response );
    res.json(response);
  })
  .catch(function(err) {
    console.log ("Error - ", err );
    res.json(err);
  });
};

module.exports = { getArticles };

