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

mongoose.model("registros", contaSchema)

const registros = mongoose.model("registros")

module.exports = registros;