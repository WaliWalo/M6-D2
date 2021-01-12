const mongoose = require("mongoose");
const ArticleSchema = require("../models/articleModel");

const Article = mongoose.model("Article", ArticleSchema);

const getArticles = (req, res) => {
  Article.find({}, (err, article) => {
    if (err) {
      res.send(err);
    }
    res.json(article);
  });
};

const addNewArticle = (req, res) => {
  let newArticle = new Article(req.body);
  newArticle.save((err, article) => {
    if (err) {
      res.send(err);
    }
    res.json(article);
  });
};

const getArticleById = (req, res) => {
  Article.findById(req.params.articleId, (err, article) => {
    if (err) {
      res.send(err);
    }
    res.json(article);
  });
};

const updateArticle = (req, res) => {
  Article.findOneAndUpdate(
    { _id: req.params.articleId },
    req.body,
    { new: true, useFindAndModify: false },
    (err, article) => {
      if (err) {
        res.send(err);
      }
      res.json(article);
    }
  );
};

const deleteArticle = (req, res) => {
  Article.findOneAndDelete({ _id: req.params.articleId }, (err, article) => {
    if (err) {
      res.send(err);
    }
    res.json(article);
  });
};
module.exports = {
  getArticles,
  addNewArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
};
