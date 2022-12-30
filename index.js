var express = require('express')

var app = express()

var load = require('express-load')

var md5 = require('md5')

var sequelize = require("sequelize")

load('banco')
.into(app)

var bodyparser = require('body-parser')

var session = require('express-session')
var flash = require('connect-flash')

const multer = require('multer')

const crypto = require('crypto')

const { fileLoader } = require('ejs')
const { resolve, extname } = require('path')

app.set('view engine','ejs')
app.use(express.static('public'))

app.use(bodyparser.urlencoded({
    extended:true
}))

app.use(session({
    secret: 'exemplo1',
    resave: false,
    saveUninitialized: true,
    cookie:{
        maxAge:6000000
    }
    })
)

app.use(flash())

app.use((req,res,next) => {
    res.locals.erro = req.flash('erro')
    res.locals.erro = req.flash('sucesso')
    next()
})

app.get('/',function(req,res){
    res.render('index.ejs')
})

app.get('/cadastrado',function(req,res){
    res.render('cadastrado.ejs')
})

app.post('/form',function(req,res){
    var dados = req.body
    var conexao = app.banco.conexao()
    var usuarioBanco = new app.banco.usuarioBanco(conexao)
    var cripto = md5(dados.senha)
    dados.senha = cripto
    usuarioBanco.salvar(dados,function(erro,sucesso){
    if(erro){
       console.log(erro)
    }
    else{
        res.redirect('/cadastrado')
    }
        
    })
})

app.get('/dados',function(req,res){
    
})


var porta = 3000;
app.listen(porta,function(){
  console.log('Servidor rodando com sucesso');
})

