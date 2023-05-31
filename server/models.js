/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

const { db } = require('../db/db');

exports.listReviews = (product_id = 2, page = 1, count = 5, sort = 'date') => {
  let sortBy = 'date';
  switch (sort) {
    case 'helpful':
      sortBy = 'helpfulness';
      break;
    case 'newest':
      sortBy = 'date';
      break;
    default:
      sortBy = 'date';
  }
  const offset = (page - 1) * count;
  const query = `SELECT
  r.review_id,
  r.rating,
  r.summary,
  r.recommend,
  r.response,
  r.body,
  r.date,
  r.reviewer_name,
  r.helpfulness,
  json_agg(json_build_object('url', rp.url)) AS photos
FROM reviews r
LEFT JOIN reviews_photos rp ON r.review_id = rp.review_id
WHERE r.product_id = $1
GROUP BY r.review_id
ORDER BY r.${sortBy} DESC
LIMIT $2 OFFSET $3;
  `;
  const values = [product_id, count, offset];
  return db.query(query, values);
};

exports.metadata = (product_id = 2) => {
  const query = `WITH ratings AS (
    SELECT rating, COUNT(*) as count
    FROM reviews
    WHERE product_id = $1
    GROUP BY rating
  ),
  recommendations AS (
    SELECT recommend, COUNT(*) as count
    FROM reviews
    WHERE product_id = $1
    GROUP BY recommend
  ),
  chars AS (
    SELECT
      c.name,
      c.characteristic_id,
      AVG(cr.value) as value
    FROM characteristics c
    JOIN characteristic_reviews cr ON c.characteristic_id = cr.characteristic_id
    WHERE c.product_id = $1
    GROUP BY c.name, c.characteristic_id
  )
  SELECT
    p.product_id,
    (SELECT jsonb_object_agg(rating, count) FROM ratings) AS ratings,
    (SELECT jsonb_object_agg(recommend::text, count) FROM recommendations) AS recommended,
    (SELECT jsonb_object_agg(name, jsonb_build_object('id', characteristic_id, 'value', value::text)) FROM chars) AS characteristics
  FROM products p
  WHERE p.product_id = $1;
  `;

  const value = [product_id];
  return db.query(query, value);
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

exports.markReviewAsHelpful = (review_id) => {
  const value = [review_id];
  const query = `UPDATE reviews
  SET helpfulness = helpfulness + 1
  WHERE review_id = $1`;
  return db.query(query, value);
};

exports.reportReview = (review_id) => {
  const value = [review_id];
  const query = `UPDATE reviews
  SET reported = true
  WHERE review_id = $1`;
  return db.query(query, value);
};
