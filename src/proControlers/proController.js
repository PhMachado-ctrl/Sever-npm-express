
module.exports = {
    async raiz(req, res){
        const result = await console.log('Servidor requisitado');
     
         return res.send('Resposta do Servidor !!!');
     },
     
     async produtos(req, res){
         const result = await console.log('Servidor requisitado');
     
         return res.send('Resposta do Servidor - produto');
     }  
}

