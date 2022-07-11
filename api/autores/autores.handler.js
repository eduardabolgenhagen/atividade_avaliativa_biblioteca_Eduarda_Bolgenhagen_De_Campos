const crud = require("../../crud");

function buscarAutores(){
    return await crud.buscar("autores");
}

function buscarAutoresPorId(idCliente){
    
}

module.exports = {
    buscarAutores
}