const crud = require("../../crud");

function buscarEditoras(){
    return await crud.buscar("editoras");
}

function buscarEditorasPorId(idCliente){
    
}

module.exports = {
    buscarEditoras
}