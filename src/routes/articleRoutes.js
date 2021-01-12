const {
  getArticles,
  addNewArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
} = require("../controllers/articleControllers");

const routes = (app) => {
  app
    .route("/articles")
    .get((req, res, next) => {
      //middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getArticles)
    // Post endpoint
    .post(addNewArticle);

  app
    .route("/articles/:articleId")
    .get(getArticleById)
    .put(updateArticle)
    .delete(deleteArticle);
};

module.exports = routes;
