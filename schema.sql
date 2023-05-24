-- Verify PostgreSQL installation by executing this command in your terminal: postgres --version
-- to istall PostgreSQL visit: https://www.postgresql.org/docs/
-- Start by entering the following on the command line:
-- psql postgres
-- CREATE ROLE addname WITH LOGIN PASSWORD 'quoted password'
-- ALTER ROLE addname CREATEDB;
-- CREATE DATABASE databasename;

-- To run a SQL file (schema) in PostgreSQL from the shell run the following command in your terminal.
-- psql -U atelier -d atelier -a -f /path/to/your/schema.sql

DROP TABLE IF EXISTS characteristic_reviews;
DROP TABLE IF EXISTS characteristics;
DROP TABLE IF EXISTS reviews_photos;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS products;


CREATE TABLE IF NOT EXISTS products (
  product_id SERIAL PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS reviews (
  review_id SERIAL PRIMARY KEY,
  rating INT DEFAULT 0,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  summary VARCHAR(255),
  body TEXT,
  recommend BOOLEAN,
  reported BOOLEAN,
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
  characteristics_id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  product_id INTEGER REFERENCES products(product_id)
);

CREATE TABLE IF NOT EXISTS characteristic_reviews (
  characteristic_reviews_id SERIAL PRIMARY KEY,
  value INTEGER,
  characteristics_id INTEGER REFERENCES characteristics(characteristics_id),
  review_id INTEGER REFERENCES reviews(review_id)
);


