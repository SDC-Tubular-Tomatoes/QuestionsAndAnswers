-- Check if PostgreSQL is installed on your computer by typing postgres --version into the command line or terminal.
-- to istall PostgreSQL visit: https://www.postgresql.org/docs/
-- navigate to the db directory in your terminal then run this command:
-- psql -U username -d postgres -c 'DROP DATABASE IF EXISTS databasename;'
-- psql -U username -d postgres -c 'CREATE DATABASE databasename;'
-- psql -U username -d databasename -a -f /path/to/your/schema.sql

-- DROP THEN CREATE DB
-- DROP DATABASE IF EXISTS atelier;
-- CREATE DATABASE atelier;

-- DROP TABLES
DROP TABLE IF EXISTS characteristic_reviews;
DROP TABLE IF EXISTS characteristics;
DROP TABLE IF EXISTS reviews_photos;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS products;

-- CREATE PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS products (
  product_id SERIAL PRIMARY KEY,
  name TEXT,
  slogan TEXT,
  description TEXT,
  category TEXT,
  default_price INT
);

-- CTRATE A REVIEWS TABLE
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

-- CREATE REVIEWS PHOTOS TABLE ==>
CREATE TABLE IF NOT EXISTS reviews_photos (
  reviews_photos_id SERIAL PRIMARY KEY,
  url TEXT,
  review_id INTEGER REFERENCES reviews(review_id)
);

-- CREATE A CHARACTERISITCS TABLE
CREATE TABLE IF NOT EXISTS characteristics (
  characteristic_id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  product_id INTEGER REFERENCES products(product_id)
);

-- CREATE A CHARACTIRESTIC_REVIEW TABLE
CREATE TABLE IF NOT EXISTS characteristic_reviews (
  characteristic_reviews_id SERIAL PRIMARY KEY,
  value INTEGER,
  characteristic_id INTEGER REFERENCES characteristics(characteristic_id),
  review_id INTEGER REFERENCES reviews(review_id)
);