const crud = require("../../crud");

function cadastrarClientes(cliente){
    return await crud.cadastrar("clientes");
}

function buscarClientes(){
    return await crud.buscar("clientes");
}

function buscarClientesPorCodigo(codigoCliente){
    return await crud.buscarPorCodigo("clientes");
}

function removerClientes(codigoCliente){
    return await crud.remover("clientes");
    //splice(index, 1);
}

module.exports = {
    cadastrarClientes,
    buscarClientes,
    buscarClientesPorCodigo,
    removerClientes
}