const crud = require("../../crud");
const autoresElivrosHandler = require("../autoresElivros/autoresElivros.handler");

async function cadastrarLivros(livro) {
    const dadosLivro = {
        titulo: livro.titulo,
        qtdPaginas: livro.qtdPaginas,
        alugado: false
    };

    const autoresDoLivro = livro.autores;

    for (let codigoAutores of autoresDoLivro) {
        const autoresElivros = {
            codigoAutor: codigoAutor,
            codigoLivro: codigoLivro
        }

        await autoresElivrosHandler.cadastrar(autoresElivros);
    }
    return await crud.cadastrar("livros", undefined, dadosLivro);
}

async function editarLivro() {
    //verificar
    return await crud.editar();
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
    editarLivro,
    buscarLivros,
    buscarLivrosPorCodigo,
    removerLivros
}