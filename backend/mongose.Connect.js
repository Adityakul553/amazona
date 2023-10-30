const mongoose = require("mongoose");

// Connect to your MongoDB database
mongoose 
 .connect("mongodb+srv://aditya:aditya@firstcode.qjcubsn.mongodb.net/?retryWrites=true&w=majority" ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));



