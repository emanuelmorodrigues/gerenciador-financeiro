const { update } = require("../database/modelRegistro")
const registros = require("../database/modelRegistro")

const localStorage = require("../config/storage")

module.exports = {
    async create(request, response ) {
        const {descricao, valor, data, despesa} = request.body

        const user_id = localStorage.getItem("user_id")
       
        
        console.log(user_id)
        
        await new registros({
            descricao,
            valor,
            data,
            despesa,
            user_id,
        }).save().then( res => {
            console.log("add com SUCESSO --" + res)
        }).catch( err =>{
            console.log("ERRO ao add --" + err)
        })

       return response.redirect("/dashboard")
       

    },

    async buscarAll(request, response) {

        const user_id = localStorage.getItem("user_id")

        await registros.find({
            user_id: user_id
        }).then(function(dados){
            
            if(localStorage.getItem("logon")){
                return response.render('telaPrincipal', {dados})
            }else{
                response.redirect("/")
            }
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

        response.status(200).send()
       
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
                registros.data = data
            }
            

            registros.save().then(res => {
                console.log("ATUALIZADO COM SUCESSO")
            }).catch(err => {
                console.log("erro ao atualizar" + err)
            })
        })

        response.status(200).send()
        
    },

    async busca(request, response){
        

        const user_id = localStorage.getItem("user_id")
        const {tipoBusca, valorBusca} = request.body
    
        let dadosBuscar;
       
       if(tipoBusca == "descricao"){
            dadosBuscar = await registros.find({
                user_id:user_id,
                descricao: valorBusca, 
            })
       }

       if(tipoBusca == "valor"){
            dadosBuscar = await registros.find({
                valor: valorBusca,
                user_id:user_id, 
            })
        }

        if(tipoBusca == "data"){
            dadosBuscar = await registros.find({
                data: valorBusca,
                user_id:user_id, 
            })
        }
        
        response.render('telaResultadoBusca',{dadosBuscar:dadosBuscar})
    },

}