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

    despesa: {
        type: Boolean,
        require: true
    },

    user_id: {
        type: String
    }
})

mongoose.model("registros", contaSchema)

const registros = mongoose.model("registros")

module.exports = registros;