//IMPORTING THE OBJECT FROM THE MODELS
const Product = require("../models/product.model.js");



module.exports = {

    //DISPLAY ALL PRODUCTS - find({})
    getAllProducts: (req, res) => {
        Product.find({})
            .then((allProducts) => res.json(allProducts))
            .catch((err) => console.log(err));
    },


    //DISPLAY EACH PRODUCT BY ID - findOne({ _id: req.params.id })
    getEachProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then((oneProduct) => res.json(oneProduct))
            .catch((err) => console.log(err));
    },


    //CREATE A NEW PRODUCT - create()
    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => res.json(newProduct))
            .catch((err) => console.log(err));
    },


    //EDITING AND UPDATING A PRODUCT BY ID - findByIdAndUpdate({ _id: req.params.id }, req.body, {new: true, runValidators: true})
    updateProduct: (req, res) => {
        Product.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedProduct) => res.json(updatedProduct))
            .catch((err) => console.log(err));
    },


    //DELETING A PRODUCT BY ID - deleteOne({ _id: req.params.id })
    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then((deletedId) => res.json(deletedId))
            .catch((err) => console.log(err));  
    },
};