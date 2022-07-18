const crud = require("../../crud");

async function cadastrarEditoras(editora){
    return await crud.cadastrar("editoras", undefined, editora);
}

async function buscarEditoras(){
    return await crud.buscar("editoras");
}

async function buscarEditorasPorCodigo(codigoEditora){
    return await crud.buscarPorCodigo("editoras", codigoEditora);
}

async function removerEditoras(codigoEditora){
    return await crud.remover("editoras", codigoEditora);
}

module.exports = {
    cadastrarEditoras,
    buscarEditoras,
    buscarEditorasPorCodigo,
    removerEditoras
}