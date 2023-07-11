//IMPORTING THE OBJECT FROM THE CONTROLLERS
const ProductController = require("../controllers/product.controller");

//EXPORTING THE FUNCTION THAT TAKES IN A PARAMETER OF APP
module.exports = (app) => {
    
    //WE CAN CREATE A NEW PRODUCT ON THIS ROUTE - BY USING POST
    app.post("/api/products", ProductController.createProduct);


    //THIS ROUTE WILL SHOW ALL PRODUCTS THAT WE HAVE CREATED - BY USING GET
    app.get("/api/products", ProductController.getAllProducts);


    //WE CAN DISPLAY EACH PRODUCT BY ID ON THIS ROUTE - BY USING GET
    app.get("/api/products/:id", ProductController.getEachProduct);


    //WE CAN EDIT AND UPDATE OUR PRODUCT BY ID - BY USING PUT
    app.put("/api/products/:id", ProductController.updateProduct);


    //WE CAN DELETE THE PRODUCT BY ID - BY USING DELETE
    app.delete("/api/products/:id", ProductController.deleteProduct);
};