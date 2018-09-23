var app = require('./config/custom-express')();
var server = require('http').createServer(app);
var porta = process.env.PORT || 3002;

server.listen(porta, function(){
    console.log("rodando na porta " + porta + "...");
});