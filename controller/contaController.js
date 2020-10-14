const { update } = require("../database/modelRegistro")
const registros = require("../database/modelRegistro")

module.exports = {
    async create(request, response ) {
        const {descricao, valor, data, despesa, user_id} = request.body
        //AQUI QUERIA PEGAR ESSE PARAMETRO, VER SE TU CONSEGUE MANDAR PELO FETCH LA PARA MIM
        
        console.log(user_id)
        
        await new registros({
            descricao,
            valor,
            data,
            despesa,
            user_id: user_id
        }).save().then( res => {
            console.log("add com SUCESSO --" + res)
        }).catch( err =>{
            console.log("ERRO ao add --" + err)
        })

       return response.redirect("/dashboard")
       

    },

    async buscarAll(request, response) {
        const {user_id} = request.body;
        const id_teste = "5f872af82da4911f2c6869a0"
        await registros.find({
            user_id: id_teste
        }).then(function(dados){
            //console.log(dados)

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

        response.status(200).send()
        //return response.redirect("/") 
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
        //response.redirect("/")
    },

    async busca(request, response){
        //const {id} = request.params
        const {tipoBusca, valorBusca} = request.body
    
        let dadosBuscar;
       // const idTest = "5f7fcad9319f6a01dad5e469";
       if(tipoBusca == "descricao"){
            dadosBuscar = await registros.find({
                descricao: valorBusca, 
            })
       }

       if(tipoBusca == "valor"){
            dadosBuscar = await registros.find({
                valor: valorBusca, 
            })
        }

        if(tipoBusca == "data"){
            dadosBuscar = await registros.find({
                data: valorBusca, 
            })
        }
        
        response.render('telaResultadoBusca',{dadosBuscar:dadosBuscar})
    },

}