// /* eslint-disable no-console */
const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

// Reviews
router.get('/reviews', controllers.getListReviews);
router.get('/reviews/meta', controllers.getReviewsMetadata);
// router.post('/reviews', controllers.postReview);
router.put('/reviews/:review_id/helpful', controllers.putReviewAsHelpful);
router.put('/reviews/:review_id/report', controllers.putReportReview);

module.exports = router;
