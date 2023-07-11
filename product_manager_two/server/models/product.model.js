const mongoose = require("mongoose"); 

const ProductTwoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },

        price: {
            type: Number,
        },

        description: {
            type: String,
        },


    },
    { timestamps: true },
);

const Product = mongoose.model("ProductTwo", ProductTwoSchema);

module.exports = Product;