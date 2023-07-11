//IMPORTING THE OBJECT FROM THE MODELS
const Author = require("../models/author.model");

//---------------------------------------------------------------------------------------------

//CREATE NEW AUTHOR - create()
const createAuthor = (req, res) => {

    Author.create(req.body)
        .then((newAuthor) => {
            res.json({ newAuthor });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });

};

//---------------------------------------------------------------------------------------------

//DISPLAY ALL AUTHORS - find()
const getAllAuthors = (req, res) => {

    Author.find()
        .then((allAuthors) => {
            res.json(allAuthors);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });

};

//---------------------------------------------------------------------------------------------

//DISPLAY ONE AUTHOR BY ID - findOne({ _id: req.params.id })
const getOneAuthor = (req, res) => {

    Author.findOne({ _id: req.params.id })
        .then((queriedAuthor) => {
            res.json(queriedAuthor);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });

};

//---------------------------------------------------------------------------------------------

//EDITING AND UPDATING AN AUTHOR BY ID - findOneAndUpdate({ _id: req.params.id }, req.body, {new: true, runValidators: true})
const updateAuthor = (req, res) => {

    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedAuthor) => {
            res.json({ updatedAuthor });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });

};

//---------------------------------------------------------------------------------------------

//DELETING AN AUTHOR BY ID - deleteOne({ _id: req.params.id })
const deleteUser = (req, res) => {

    Author.deleteOne({ _id: req.params.id })
        .then((deletedResponse) => {
            res.json({ deletedResponse });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });

};

//---------------------------------------------------------------------------------------------

module.exports = {
    createAuthor,
    getOneAuthor,
    getAllAuthors,
    updateAuthor,
    deleteUser,
};