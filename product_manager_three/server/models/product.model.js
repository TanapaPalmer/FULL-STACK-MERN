//DATABASE
const mongoose = require("mongoose");

//VALIDATIONS
const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title name is required"],
            minlength: [3, "Title must be at least 3 characters long"]
        },

        price: {
            type: Number,
            required: [true, "Price can not be blank"],
            min: [1, "Price must be at least 1 dollar"],
            max: [9999999999999, "Only God can afford it"]
        },

        description: {
            type: String,
            required: [true, "Desciption is required"],
            minlength: [3, "Desciption must be at least 3 characters long"]
        },

    //CREATED AT & UPDATED AT
    },
    { timestamps: true },
);


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;