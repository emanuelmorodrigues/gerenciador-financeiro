const user = require("../database/modelUser")

module.exports = {

    async telaLogin(request, response){
        await response.render('telaLogin')
    },

    async logar(request,response){
        const { email, senha} = request.body
        let registros;

        await user.findOne({
            email:email,
            senha:senha
        }).then(res => {
            registros = res;
        }).catch(err => {
            //response
            response.send("SEM ACESSO AMIGO")
        })

        if(registros !== null){
            response.render("telaLogin",{user_id:registros._id})
            
            //response.redirect('/dashboard')
            
        }else{
            return response.send("SEM ACESSO AMIGO")
        }
        
    }
    
}