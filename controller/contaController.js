const registros = require("../database/model")

module.exports = {
    async create(request, response ) {
        const {descricao, valor, data, tipoDispeca} = request.body
        
        await new registros({
            descricao,
            valor,
            data,
            tipoDispeca,
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

    async delete(request, response){
        const { id } = request.params

        contas.deleteOne({
            _id: id
        }).then(res => {
            console.log("removido COm sucesso")
        }).catch( err => {
            console.log("Falha ao remover")
        })

        response.redirect("/")
    },

     
}