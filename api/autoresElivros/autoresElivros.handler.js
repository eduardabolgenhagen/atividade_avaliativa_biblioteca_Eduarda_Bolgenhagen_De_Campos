const crud = require("../../crud/index");

async function cadastrar(autoreslivros) {
    return await crud.cadastrar("autoresElivros", undefined, autoreslivros);
}

async function buscarPorCodigo(codigo) {
    return await crud.buscarPorCodigo("autoresElivros", codigo);
}

async function remover(codigo) {
    return await crud.remover("autoresElivros", codigo);
}

async function buscarAutoresELivros() {
    return await crud.buscar("autoresElivros");
}

module.exports = {
    cadastrar,
    buscarPorCodigo,
    remover,
    buscarAutoresELivros
}