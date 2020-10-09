const { update } = require("../database/model")
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

    async delete(request, response){
        const { id } = request.params
        
        await registros.deleteOne({
            _id: id
        }).then(res => {
            console.log("removido COm sucesso")
        }).catch( err => {
            console.log("Falha ao remover")
        })

        response.redirect("/")
    },

    async update(request, response){
        const { id } = request.params

        const {descricao, valor, data} = request.body

        await registros.findOne({
            _id: id 
        }).then(registros => {
            
            if(registros.descricao != descricao){
                registros.descricao = descricao
            }

            if(registros.valor != valor){
                registros.valor = valor
            }

            if(registros.data != data){
                registros.data != data
            }

            registros.save().then(res => {
                console.log("ATUALIZADO COM SUCESSO")
            }).catch(err => {
                console.log("erro ao atualizar" + err)
            })
        })

        response.redirect("/")
    },

    async busca(request, response){
        //const {id} = request.params

        const idTest = "5f7fcad9319f6a01dad5e469";
        const dados = await registros.find({
            _id: idTest
        })

        response.render('telaAtualizar',{ idTest:idTest, dados:dados})
    },

}