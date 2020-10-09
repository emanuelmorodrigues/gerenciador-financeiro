const express = require('express')
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyparser = require('body-parser')
const port = 8081


const contaController = require("./controller/contaController")

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
app.get('/', contaController.buscarAll)
app.delete('/:id', contaController.delete)
app.post('/add', contaController.create)


app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})