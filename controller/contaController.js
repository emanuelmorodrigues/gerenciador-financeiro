const registros = require("../database/model")

module.exports = {
    async create(request, response ) {
        const {descricao, valor, data, despesa} = request.body
        
        await new registros({
            descricao,
            valor,
            data,
            despesa,
        }).save().then( res => {
            console.log("add com SUCESSO --" + res)
        }).catch( err =>{
            console.log("ERRO ao add --" + err)
        })

        response.redirect("/")
    },

    async buscarAll(request, response) {
        await registros.find().then(function(dados){
            console.log(dados)
            return response.render('telaPrincipal', {dados})
        })
    },

     
}