//Importa o Express
const express = require('express')

//Cria a aplicação
const app = express();

//escuta a porta
app.listen(3334, ()=>console.log('Servidor ON - Rodando'))