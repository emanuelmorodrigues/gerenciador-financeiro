const user = require("../database/modelUser")

const localStorage = require("../config/storage")

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
            response.render("loginIncorreto")
        })

        if(users !== null){

            localStorage.setItem("logon", true)
            localStorage.setItem("user_id", users._id )
            
            response.redirect('/dashboard')
            
        }else{
            localStorage.clear()
            return response.send("SEM ACESSO AMIGO")
        }
        
    }
    
}