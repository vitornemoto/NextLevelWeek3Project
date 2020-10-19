const { response } = require('express');
// importando dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando o express
const server = express();
server
//utilizar body do req
.use(express.urlencoded({extended : true}))

// utilizando os arquivos estáticos
.use(express.static('public'))

// configurar template engine
.set('views' , path.join(__dirname,"views"))
.set('view engine', 'hbs')

// criar uma rotas
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)


// ligando o servidor
server.listen(5500);