// require axios
import axios from "axios";

export default {
  // Gets saved articles from the database.
  getSaved: function() {
    return axios.get("/api/saved");
  },

  // Scrape articles from the NYTimes site.
  getArticles:  (topic, startYear, endYear) => {
    var APIkey= "38a27ae797ff4ab4b1eff38c11ee4596";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIkey + "&q="+ topic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "1231";
    return axios.get(queryURL)
  },

  // Saves a Article to the database
  saveArticle: function(article) {
    console.log("Article Saved - ", article);
    return axios.post("/api/saved", article);
  },
  // Deletes an Article from the database
  deleteArticle: function(id) {
    return axios.delete("/api/saved/" + id);
  }

};