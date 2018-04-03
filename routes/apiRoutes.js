var express = require("express");
var articleController = require("../controllers/articleController");
var scrapeController = require("../controllers/scrapeController");
var router = new express.Router();
var path = require ("path");

// Scrape articles from the NYTimes web site.
router.get('/scrape', scrapeController.getArticles);
// Get all articles (or optionally a specific quote with an id)
router.get('/saved', articleController.getArticles);
// Create a new article using data passed in req.body
router.post('/saved', articleController.insertArticle);
// Update an existing quote with a speicified id param, using data in req.body
router.delete('/saved/:id', articleController.deleteArticle);
//

module.exports = router;