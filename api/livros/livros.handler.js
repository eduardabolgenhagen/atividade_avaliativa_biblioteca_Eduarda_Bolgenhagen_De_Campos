const crud = require("../../crud");
const {cadastrar} = require("../autoresElivros/autoresElivros.handler");

async function cadastrarLivros(livro) {
    const dadosLivro = {
        titulo: livro.titulo,
        qtdPaginas: livro.qtdPaginas,
        alugado: false
    };
    const autoresDoLivro = livro.autores;

    for (let codigoAutores of autores) {
        const autoresElivros = {
            codigoAutor: codigoAutor,
            codigoLivro: codigoLivro
        }

        await cadastrar(autoresElivros);
    }
    return await crud.cadastrar("livros", undefined, dadosLivro);
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