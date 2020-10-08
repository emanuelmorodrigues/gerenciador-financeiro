const mongoose = require("mongoose")

mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://admin:rQL7A2BUfKOoRjd0@cluster0.7xhho.gcp.mongodb.net/financeirodb").then(result =>{
    console.log("conectado com banco")
}).catch(err => {
    console.log("nao conseguiu conectar --" + err)
})

module.exports = mongoose;