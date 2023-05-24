const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('WE ARE CONNECTED...');
});

const reviewsSchema = new mongoose.Schema({
  review_id: { type: Number, unique: true },
  product_id: Number,
  rating: Number,
  summary: String,
  recommend: Boolean,
  response: String,
  body: String,
  date: Date,
  reviewer_name: String,
  reviewer_email: String,
  helpfulness: Number,
  reported: Boolean,
});

const reviewsPhotosSchema = new mongoose.Schema({
  reviews_photos_id: { type: Number, unique: true },
  url: String,
  review_id: Number,
  product_id: Number,
});

const characteristicSchema = new mongoose.Schema({
  characteristic_id: { type: Number, unique: true },
  product_id: Number,
  review_id: Number,
  characteristic_name: String,
  characteristic_value: String,
});

const Review = mongoose.model('Review', reviewsSchema);
const ReviewsPhotos = mongoose.model('ReviewsPhotos', reviewsPhotosSchema);
const Characteristic = mongoose.model('Characteristic', characteristicSchema);
