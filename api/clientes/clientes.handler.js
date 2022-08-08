const crud = require("../../crud");

async function cadastrarClientes(cliente) {
    return await crud.cadastrar("clientes", undefined, cliente);
}

async function buscarClientes() {
    return await crud.buscar("clientes");
}

async function buscarClientesPorCodigo(codigoCliente) {
    return await crud.buscarPorCodigo("clientes", codigoCliente);
}

async function removerClientes(codigoCliente) {
    return await crud.remover("clientes", codigoCliente);
}

module.exports = {
    cadastrarClientes,
    buscarClientes,
    buscarClientesPorCodigo,
    removerClientes
}