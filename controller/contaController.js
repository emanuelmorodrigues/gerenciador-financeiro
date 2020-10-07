const contas = require("../database/model")

module.exports = {
    async create(request, response ) {
        const {descricao, valor, data, tipoDispeca} = request.body
        
        await new contas({
            descricao,
            valor,
            data,
            tipoDispeca,
        }).save().then( res => {
            console.log("add com SUCESSO --" + res)
        }).catch( err =>{
            console.log("ERRO ao add --" + err)
        })
    },

    async bucar(request, response) {
        const dados = await contas.find()

        return response(dados)
    },

     
}