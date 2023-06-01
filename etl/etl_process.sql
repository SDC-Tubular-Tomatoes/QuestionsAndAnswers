-- after you create you tables you can run this command to ETL (Extract, transform, and load) data to your db :
-- psql -U username -d databasename -a -f /path/to/your/etl_process.sql

-- COPY CSV FILES INTO PRODUCTS TABLE
COPY products(product_id, name, slogan, description, category,default_price)
FROM 'PRODUCT = /Users/tammamtautou/rfp2303/SDC/RatingsAndReviews-T/csv_files/product.csv
'
DELIMITER ','
CSV HEADER;


-- COPY CSV FILES INTO REVIEWS TABLE
COPY reviews(review_id, product_id,rating,date, summary, body, recommend, reported,reviewer_name, reviewer_email, response, helpfulness)
FROM 'REVIEWS = /Users/tammamtautou/rfp2303/SDC/RatingsAndReviews-T/csv_files/reviews.csv
'
DELIMITER ','
CSV HEADER;


-- COPY CSV FILES INTO REVIEWS PHOTOS TABLE
COPY reviews_photos(reviews_photos_id, review_id, url)
FROM '/Users/tammamtautou/rfp2303/SDC/RatingsAndReviews-T/csv_files/reviews_photos.csv'
DELIMITER ','
CSV HEADER;


--  COPY CSV FILE INTO CHARACTERISTICS TABLE
COPY characteristics(characteristic_id, product_id, name)
FROM '/Users/tammamtautou/rfp2303/SDC/RatingsAndReviews-T/csv_files/characteristics.csv'
DELIMITER ','
CSV HEADER;


--  COPY CSV FILE INTO CHARACTERISTIC_REVIEWS TABLE
COPY characteristic_reviews(characteristic_reviews_id, characteristic_id, review_id, value)
FROM '/Users/tammamtautou/rfp2303/SDC/RatingsAndReviews-T/csv_files/characteristic_reviews.csv'
DELIMITER ','
CSV HEADER;

--INDEXES
CREATE INDEX idx_reviews_review_id ON reviews (product_id, rating, recommend);
CREATE INDEX idx_reviews_photos_review_id ON reviews_photos (review_id);
CREATE INDEX idx_characteristics_product_id ON characteristics (product_id, name);
CREATE INDEX idx_characteristic_reviews_characteristic_id ON characteristic_reviews (characteristic_id, value);
