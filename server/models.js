/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { db } = require('./db');

console.log('>', db);
exports.listReviews = (
  page = 1,
  count = 10,
  sort = 'newest',
  product_id = 2,
) => {
  const query = `
  SELECT reviews.*, array_agg(reviews_photos.url) as review_photos
  FROM reviews
  LEFT JOIN reviews_photos ON reviews.review_id = reviews_photos.review_id
  WHERE reviews.product_id = $1
  GROUP BY reviews.review_id
  ORDER BY reviews.date DESC
  LIMIT $2
`;
  const values = [product_id, count];
  return db.query(query, values);
};

exports.metadata = async (product_id = 2) => {
  const query_1 = 'SELECT rating, COUNT(*) FROM reviews WHERE product_id = $1 GROUP BY rating';
  // const query_2 = 'SELECT recommend, COUNT(*) FROM reviews WHERE product_id = $1 GROUP BY recommend';
  // const query_3 = 'SELECT characteristic_id, name FROM characteristics WHERE product_id = $1';
  // const query_4 = 'SELECT AVG(value) FROM characteristic_reviews WHERE characteristic_id = $1';
  const value = [product_id];
  const result1 = await db.query(query_1, value);
  // const result2 = await db.query(query_2, value);
  // const result3 = await db.query(query_3, value);
  // const result4 = await db.query(query_4, [result3.rows[0].characteristic_id]);
  // console.log ('>>>>>>>>>>', result3.rows[0].characteristic_id)
  return result1;
};

// exports.addReview = (
//   product_id,
//   rating,
//   summary,
//   body,
//   recommend,
//   name,
//   email,
//   photos,
//   characteristics,
// ) => {
//
// };

// exports.markReviewAsHelpful = (review_id) => {
//
//
// };

// exports.reportReview = (review_id) => {
//
// };
