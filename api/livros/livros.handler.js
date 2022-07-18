const crud = require("../../crud");

async function cadastrarLivros(livro){
    return await crud.cadastrar("livros", undefined, livro);
}

async function buscarLivros(){
    return await crud.buscar("livros");
}

async function buscarLivrosPorCodigo(codigoLivro){
    return await crud.buscarPorCodigo("livros", codigoLivro);
}

async function removerLivros(codigoLivro){
    return await crud.removerLivros("livros", codigoLivro);
}

module.exports = {
    cadastrarLivros,
    buscarLivros,
    buscarLivrosPorCodigo,
    removerLivros
}