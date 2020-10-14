const user = require("../database/modelUser")

module.exports = {
    async create(request, response ) {
        let {nome, sobrenome} = request.body
        const {email, senha} = request.body

        //nome completo
        nome += " "+sobrenome;
        
        await new user({
            nome,
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