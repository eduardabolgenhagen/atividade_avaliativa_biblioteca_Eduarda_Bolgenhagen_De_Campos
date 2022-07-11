const crud = require("../../crud");

function cadastrarAutores(){
    return await crud.cadastrar("autores");
}

function buscarAutores(){
    return await crud.buscar("autores");
}

function buscarAutoresPorCodigo(){
    return await crud.buscarPorCodigo("autores");
}

function removerAutores(){
    return await crud.remover("autores");
}

module.exports = {
    cadastrarAutores,
    buscarAutores,
    buscarAutoresPorCodigo,
    removerAutores
}