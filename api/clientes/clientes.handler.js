const crud = require("../../crud");

function buscarClientes(){
    return await crud.buscar("clientes");
}

function buscarClientesPorId(idCliente){
    
}

module.exports = {
    buscarClientes
}