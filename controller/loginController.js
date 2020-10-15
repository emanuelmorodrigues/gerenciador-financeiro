const user = require("../database/modelUser")

module.exports = {

    async telaLogin(request, response){
        await response.render('telaLogin')
    },

    async logar(request,response){
        const { email, senha} = request.body
        let users

        await user.findOne({
            email:email,
            senha:senha,
        }).then(res => {
            users = res
        }).catch(err => {
            //response
            response.render("loginIncorreto")
        })

        if(users !== null){
            
            response.render("telaBoasVindas",{user_id:users._id})
            
            //response.redirect('/dashboard')
            
        }else{
            return response.send("SEM ACESSO AMIGO")
        }
        
    }
    
}