/* eslint-disable no-console */
const models = require('./models');

exports.getListReviews = (req, res) => {
  models
    .listReviews(
      req.query.product_id,
      req.query.page,
      req.query.count,
      req.query.sort,
    )
    .then((result) => (res.status(200).send({
      product: req.query.product_id,
      page: req.query.page,
      count: req.query.count,
      results: result,
    })))
    .catch((err) => {
      console.log('CONTROLLER REVIEWS GET LIST REVIEWS', err);
      res.sendStatus(505);
    });
};

exports.getReviewsMetadata = (req, res) => {
  models
    .metadata(req.query.product_id)
    .then((result) => (res.status(200).send(result[0])))
    .catch((err) => {
      console.log('CONTROLLER REVIEWS GET REVIEWS METADATA', err);
      res.sendStatus(505);
    });
};

// exports.postReview = (req, res) => {
//   models.reviews
//     .addReview(
//       req.body.product_id,
//       req.body.rating,
//       req.body.summary,
//       req.body.body,
//       req.body.recommend,
//       req.body.name,
//       req.body.email,
//       req.body.photos,
//       req.body.characteristics,
//     )
//     .then(() => res.sendStatus(201))
//     .catch((err) => {
//       console.log('CONTROLLER REVIEWS POST REVIEW', err);
//       res.sendStatus(505);
//     });
// };

exports.putReviewAsHelpful = (req, res) => {
  models
    .markReviewAsHelpful(req.params.review_id)
    .then(() => res.sendStatus(204))
    .catch((err) => {
      console.log('CONTROLLER REVIEWS PUT REVIEW', err);
      res.sendStatus(505);
    });
};

exports.putReportReview = (req, res) => {
  models
    .reportReview(req.params.review_id)
    .then(() => res.sendStatus(204))
    .catch((err) => {
      console.log('CONTROLLER REVIEWS PUT REVIEW', err);
      res.sendStatus(505);
    });
};
