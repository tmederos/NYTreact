// require axios
import axios from "axios";

export default {
  // Gets saved articles from the database.
  getSaved: function() {
    return axios.get("/api/saved");
  },

  // Scrape articles from the NYTimes site.
  getArticles:  (topic, startYear, endYear) => {
    var authKey = "38a27ae797ff4ab4b1eff38c11ee4596";
		var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";
		var queryURL = queryURLBase + topic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "1231";
    return axios.get(queryURL)
  },
  // function getArticles (req, res) {
  //   console.log( "top of Article scraping - " + req.query.topic );
  //   var topic = req.query.topic;
  //   var startYear = req.query.startYear;
  //   var endYear = req.query.endYear;
  //   //NYT API key
  //   var APIkey= "38a27ae797ff4ab4b1eff38c11ee4596";
  //   var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIkey + "&q="+ topic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "1231";
  //   return axios.get(queryURL)
  //   .then(function(response){
  //     console.log("Response ####################################", response );
  //     res.json(response);
  //   })
  //   .catch(function(err) {
  //     console.log ("Error - ", err );
  //     res.json(err);
  //   });
  // },

  // Saves a Article to the database
  saveArticle: function(article) {
    console.log("Article Saved - ", article);
    return axios.post("/api/articles", article);
  },
  // Deletes an Article from the database
  deleteArticle: function(id) {
    return axios.delete("/api/saved/" + id);
  }

};