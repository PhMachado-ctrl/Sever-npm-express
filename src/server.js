//Importa o Express
const express = require('express')

//Cria a aplicação
const app = express();

app.get('/produtos', (req, res)=>{
    console.log('Servidor requisitado');

    return res.send('Resposta do Servidor !');
});

//escuta a porta
app.listen(3334, ()=>console.log('Servidor ON - Rodando'))