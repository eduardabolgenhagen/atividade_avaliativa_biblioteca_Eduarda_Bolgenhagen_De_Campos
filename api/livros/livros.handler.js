const crud = require("../../crud");

async function cadastrarLivros(livro) {
    // if (crud.buscarPorCodigo(autores, livro.autores)) {
        return await crud.cadastrar("livros", undefined, livro);
    // } else {
    //     console.log("Autor não cadastrado.")
    // }
}

async function buscarLivros() {
    return await crud.buscar("livros");
}

async function buscarLivrosPorCodigo(codigoLivro) {
    return await crud.buscarPorCodigo("livros", codigoLivro);
}

async function removerLivros(codigoLivro) {
    return await crud.remover("livros", codigoLivro);
}

module.exports = {
    cadastrarLivros,
    buscarLivros,
    buscarLivrosPorCodigo,
    removerLivros
}