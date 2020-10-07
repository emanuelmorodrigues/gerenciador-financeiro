const mongoose = require("./connection")

const contaSchema = mongoose.Schema({
    descricao: {
        type: String
    },

    valor: {
        type: Number,
        require: true
    },

    data: {
        type: String
    },

    tipoDispeca: {
        type: String,
        require: true
    }

})

mongoose.model("conta", contaSchema)

const conta = mongoose.model("conta")

module.exports = conta;