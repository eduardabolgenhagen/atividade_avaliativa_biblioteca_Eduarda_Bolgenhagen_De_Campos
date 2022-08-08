const crud = require("../../crud/index");

async function buscarLivrosAlugados() {
    return await crud.buscarbuscar("livrosLocados");
}

async function buscarLivroAlugadosPorCodigo(codigoLivro) {
    return await crud.buscarPorCodigo("livrosAlugados", codigoLivro);
}

async function cadastrarLivrosAlugados(livroAlugado) {
    return await crud.cadastrar("livrosAlugados", livroAlugado);
}

async function removerLivrosAlugados(codigoLivro) {
    return await crud.remover("livrosAlugados", codigoLivro);
}

module.exports = {
    buscarLivrosAlugados,
    buscarLivroAlugadosPorCodigo,
    cadastrarLivrosAlugados,
    removerLivrosAlugados
}