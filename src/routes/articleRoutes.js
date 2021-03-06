const {
  getArticles,
  addNewArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
} = require("../controllers/articleControllers");
const {
  getReviews,
  getReviewById,
  addNewReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewControllers");

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
    .delete(deleteArticle)
    .post(addNewReview);

  // GET /articles/:id/reviews => returns all the reviews for the specified article
  app.route("/articles/:articleId/reviews").get(getReviews);

  // //   POST /articles/:id => adds a new review for the specified article
  // app.route("/articles/:articleId").post(addNewReview);

  //   GET /articles/:id/reviews/:reviewId => returns a single review for the specified article
  //   PUT /articles/:id/reviews/:reviewId => edit the review belonging to the specified article
  //   DELETE /articles/:id/reviews/:reviewId => delete the review belonging to the specified article
  app
    .route("/articles/:articleId/reviews/:reviewId")
    .get(getReviewById)
    .put(updateReview)
    .delete(deleteReview);
};

module.exports = routes;
