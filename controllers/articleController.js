var Article = require("../models/Article");

// Get Article
function getArticles(req, res) {
  var query;
  if (req.query) {
    query = req.query;
  }
  else {
    query = req.params.id ? { _id: req.params.id } : {};
  }
  Article.find(query)
    .then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
}

// Update Article
function updateArticle(req, res) {
  Article.update({id: req.params.id },{ $set: {saved: true }})
  .then(function(doc) {
    res.json(doc);
  }).catch(function(err) {
    res.json(err);
  });
}

// Delete Article
function deleteArticle(req, res) {
  console.log("ID in controller: ", req.params);
  console.log("ID in controller: ", req.body);
  Article.remove({"_id": req.params.id})   
  .then(function(doc) {
    res.json(doc);
  }).catch(function(err) {
    res.json(err);
  });
}

// Insert New Article
function insertArticle(req, res) {
  Article.create({ title: req.body.title, date: req.body.date, url: req.body.url, saved: true })
  .then(function(doc) {
    res.json(doc);
  }).catch(function(err) {
    res.json(err);
  });
}

module.exports = {
    getArticles: getArticles,
    updateArticles: updateArticle,
    deleteArticle: deleteArticle,
    insertArticle: insertArticle
}