const express = require('express')
const handlebars = require('express-handlebars')
const bodyparser = require('body-parser')
const port = 8081

//Inicializando
const app = express()

//Conf Handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static('public'));

//Conf body-parser
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

//Rotas
app.get('/', (req, res)=>{
    res.render('telaPrincipal')
})

app.post('/', (req, res)=>{
    //Enviar dados para o BD
    
})

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})