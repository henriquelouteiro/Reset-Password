const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const admin = require("./routes/admin")
const path = require("path")

//CONFIGURAÇÕES
    //Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    //handlebars    
        app.engine('handlebars', handlebars({defaultLayout:'main'}))
        app.set('view engine', 'handlebars')
    //Public
        app.use(express.static(path.join(__dirname,"public")))
//Rotas
    app.use('/admin', admin)
//Outros
const PORT = 80
app.listen(PORT, ()=>{
    console.log("Servidor Rodando! Porta: 80")
})