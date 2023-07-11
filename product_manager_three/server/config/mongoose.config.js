const mongoose = require("mongoose");
const dbName = "product_manager_three";

//---------------------------------------------------------------------------------------------
//CONNECT TO DATABASE - MONGODB
mongoose.connect('mongodb://127.0.0.1:27017/product_manager_three', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("Established a connection to the database"))

.catch((err)=>console.log("Something went wrong when connecting to the database ", err)
);