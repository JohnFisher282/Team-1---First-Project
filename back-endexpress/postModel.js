const mongoose = require("mongoose");
const bookings = new mongoose.Schema(
    {
        personName: "String",
        movieTitle: "String",
        seats: "Number",
        ticketType: "String",
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", bookings);
module.exports = Post;