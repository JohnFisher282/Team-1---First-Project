const mongoose = require("mongoose");

const { Schema } = mongoose;

// mongoose.connect("mongodb://localhost:27017/listings", {
//   useNewUrlParser: true,
// });

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
  },
  year: {
    type: Number,
    required: true,
  },
  rated: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  actors: {
    type: [String],
    required: true,
  },
  plot: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  showingTimes: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Listings", listingSchema);
