const mongoose = require("./connection")

const userSchema = mongoose.Schema({
    nome: {
        type: String
    },

    email: {
        type: String,
        require: true
    },

    senha: {
        type: String
    },

})

mongoose.model("user", userSchema)

const user = mongoose.model("user")

module.exports = user;