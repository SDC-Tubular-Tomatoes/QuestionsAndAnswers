-- Verify PostgreSQL installation by executing this command in your terminal: postgres --version
-- to istall PostgreSQL visit: https://www.postgresql.org/docs/
-- Start by entering the following on the command line:
-- psql postgres
-- CREATE DATABASE databasename;

-- To run a SQL file (schema) in PostgreSQL from the shell navegate into the dr that has the schema and  run the following command in your terminal.
-- psql -U atelier -d atelier -a -f /path/to/your/schema.sql

DROP TABLE IF EXISTS characteristic_reviews;
DROP TABLE IF EXISTS characteristics;
DROP TABLE IF EXISTS reviews_photos;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS products;


CREATE TABLE IF NOT EXISTS products (
  product_id SERIAL PRIMARY KEY,
  name TEXT,
  slogan TEXT,
  description TEXT,
  category TEXT,
  default_price INT
);

CREATE TABLE IF NOT EXISTS reviews (
  review_id SERIAL PRIMARY KEY,
  rating INT DEFAULT 0,
  date TEXT,
  summary VARCHAR(255),
  body TEXT,
  recommend BOOL NOT NULL,
  reported BOOL NOT NULL,
  reviewer_name VARCHAR(50),
  reviewer_email VARCHAR(100),
  response TEXT DEFAULT NULL,
  helpfulness INT DEFAULT 0,
  product_id INTEGER REFERENCES products(product_id)
);

CREATE TABLE IF NOT EXISTS reviews_photos (
  reviews_photos_id SERIAL PRIMARY KEY,
  url TEXT,
  review_id INTEGER REFERENCES reviews(review_id)
);

CREATE TABLE IF NOT EXISTS characteristics (
  characteristic_id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  product_id INTEGER REFERENCES products(product_id)
);

CREATE TABLE IF NOT EXISTS characteristic_reviews (
  characteristic_reviews_id SERIAL PRIMARY KEY,
  value INTEGER,
  characteristic_id INTEGER REFERENCES characteristics(characteristic_id),
  review_id INTEGER REFERENCES reviews(review_id)
);


-- COPY reviews(review_id, product_id,rating,date, summary, body, recommend, reported,reviewer_name, reviewer_email, response, helpfulness)
-- FROM '/Users/tammamtautou/Downloads/reviews/reviews.csv'
-- DELIMITER ','
-- CSV HEADER;


-- COPY products(product_id, name, slogan, description, category,default_price)
-- FROM '/Users/tammamtautou/Downloads/characteristics/product.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY reviews_photos(reviews_photos_id, review_id, url)
-- FROM '/Users/tammamtautou/Downloads/reviews_photos/reviews_photos.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY characteristics(characteristic_id, product_id, name)
-- FROM '/Users/tammamtautou/Downloads/characteristics/characteristics.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY characteristic_reviews(characteristic_reviews_id, characteristic_id, review_id, value)
-- FROM '/Users/tammamtautou/Downloads/characteristic_reviews/characteristic_reviews.csv'
-- DELIMITER ','
-- CSV HEADER;