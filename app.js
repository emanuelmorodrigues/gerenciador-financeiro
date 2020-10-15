const express = require('express')
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyparser = require('body-parser')
const port = 8081


const contaController = require('./controller/contaController');
//const { createCollection } = require('./database/contaController');

const userController = require('./controller/userController');
const loginController = require('./controller/loginController')


//storage
const localStorage = require("./config/storage")


//Inicializando
const app = express()

//Conf Handlebars
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}))
app.engine('handlebars', expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars')
app.use(express.static('public'));

//Conf body-parser
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

//Rotas
app.get("/", loginController.telaLogin)
app.post('/', loginController.logar)

app.get('/dashboard', contaController.buscarAll)
app.delete('/del/:id', contaController.delete)
app.post('/add/', contaController.create)

app.post('/buscar', contaController.busca)

app.post('/atualizar/:id', contaController.update)

app.get('/cadastro', userController.telaCadastro)
app.post('/cadastro', userController.create)

// rota de teste
app.get('/sair', (req, res)=>{
    if(localStorage.getItem("logon")){
        localStorage.clear()
        res.redirect("/")
    }
})

app.get('/criarConta', (req, res)=>{
    res.render('cadastroUser')
})

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})