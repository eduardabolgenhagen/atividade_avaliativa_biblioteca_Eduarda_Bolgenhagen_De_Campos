const crud = require("../../crud");

async function cadastrarAutores(autor){
    return await crud.cadastrar("autores", undefined, autor);
}

async function buscarAutores(){
    return await crud.buscar("autores");
}

async function buscarAutoresPorCodigo(codigoAutor){
    return await crud.buscarPorCodigo("autores", codigoAutor);
}

async function removerAutores(codigoAutor){
    return await crud.remover("autores", codigoAutor);
}

module.exports = {
    cadastrarAutores,
    buscarAutores,
    buscarAutoresPorCodigo,
    removerAutores
}