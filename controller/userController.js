const user = require("../database/modelUser")

module.exports = {
    async create(request, response ) {
        const {nome, sobroneme, email, senha} = request.body
        const nomeCompleto = nome+sobroneme;
        
        await new user({
            nomeCompleto,
            email,
            senha,
        }).save().then( res => {
            console.log("user criado com SUCESSO --" + res)
        }).catch( err =>{
            console.log("ERRO ao criar usar --" + err)
        })

        
        //so para redicionar para aqui, so um teste, isso nao vai ficar no fim
        return response.redirect("/")

    },

    async telaCadastro(request, response){
        await response.render('cadastroUser')
    },
    
}