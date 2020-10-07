const mongoose = require("mongoose")

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/banco").then(result =>{
    console.log("conectado com banco")
}).catch(err => {
    console.log("nao conseguiu conectar --" + err)
})