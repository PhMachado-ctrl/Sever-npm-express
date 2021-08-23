//Importa o Express
const express = require('express');
const routes = require('./routes')

//Cria a aplicação
const app = express();
app.use(routes);


//escuta a porta
app.listen(3334, ()=>console.log('Servidor ON - Rodando na porta 3334'))