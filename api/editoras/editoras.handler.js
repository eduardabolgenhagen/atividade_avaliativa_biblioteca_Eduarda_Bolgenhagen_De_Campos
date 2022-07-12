const crud = require("../../crud");

function cadastrarEditoras(){
    return await crud.cadastrar("editoras");
}

function buscarEditoras(){
    return await crud.buscar("editoras");
}

function buscarEditorasPorCodigo(codigoEditora){
    return await crud.buscarPorCodigo("editoras");
}

function removerEditoras(codigoEditora){
    return await crud.removerEditoras("editoras");
}

module.exports = {
    cadastrarEditoras,
    buscarEditoras,
    buscarEditorasPorCodigo,
    removerEditoras
}