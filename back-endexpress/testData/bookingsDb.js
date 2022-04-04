const mongoose = require("mongoose");

const { Schema } = mongoose;

// mongoose.connect("mongodb://localhost:27017/bookings", {
//   useNewUrlParser: true,
// });

const bookingSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    movieTitle: {
        type: String,
        required: true,
    },
    seats: {
        type: Number,
        required: true,
    },
    ticketType: {
        type: String,
        required: true,
    }
 
});

module.exports = mongoose.model("Bookings", bookingSchema);