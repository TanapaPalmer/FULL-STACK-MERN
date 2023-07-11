//IMPORTING THE OBJECT FROM THE CONTROLLERS
const authorController = require("../controllers/author.controller");

//---------------------------------------------------------------------------------------------

//EXPORTING THE FUNCTION THAT TAKES IN A PARAMETER OF APP
module.exports = (app) => {

    //WE CAN CREATE NEW AUTHOR ON THIS ROUTE - BY USING POST
    app.post("/api/author", authorController.createAuthor);

    //THIS ROUTE WILL SHOW ALL AUTHORS THAT WE HAVE CREATED - BY USING GET
    app.get("/api/author", authorController.getAllAuthors);

    //WE CAN DISPLAY EACH AUTHOR BY ID ON THIS ROUTE - BY USING GET
    app.get("/api/author/:id", authorController.getOneAuthor);

    //WE CAN EDIT AND UPDATE AN AUTHOR BY ID - BY USING PUT
    app.put("/api/author/:id", authorController.updateAuthor);

    //WE CAN DELETE AN AUTHOR BY ID - BY USING DELETE
    app.delete("/api/author/:id", authorController.deleteUser);
};