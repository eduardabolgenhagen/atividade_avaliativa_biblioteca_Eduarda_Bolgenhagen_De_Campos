const crud = require("../../crud");
const { buscarLivrosPorCodigo } = require("../livros/livros.handler");

async function cadastrarLocacao(codigoCliente, locacao) {
    console.log("definindo codigo do cliente", codigoCliente);
    // if (crud.buscarPorCodigo("locacao", codigoCliente) != locacao.codigoCliente) {
    //     console.log("Cliente com locação ativa.");
    //     if (buscarLivrosPorCodigo(locacao.codigoLivro) != locacao.codigoLivro) {
    //         console.log("Livro já locado.");
    //         return false;
    //     }
    // } else {
    //     console.log("entrou pra dar boa")
    //     const cadastro = await crud.cadastrar("locacao", undefined, locacao);
    //     console.log("livre para locar");
    //     return cadastro;
    // }

    if (crud.buscarPorCodigo("locacao", codigoCliente) === locacao.codigoCliente &
        buscarLivrosPorCodigo(locacao.codigoLivro) === locacao.codigoLivro) {
        console.log("Cliente com locação ativa ou livro já locado.");
        return false;
    } else {
        console.log("entrou pra dar boa")
        const cadastro = await crud.cadastrar("locacao", undefined, locacao);
        console.log("livre para locar");
        return cadastro;
    }
}


async function buscarLocacoes() {
    return await crud.buscar("locacoes");
}

async function buscarLocacaoPorCodigo(codigoLocacao) {
    return await crud.buscarPorCodigo("locacao", codigoLocacao);
}

async function removerLocacao(codigoLocacao) {
    return await crud.remover("locacao", codigoLocacao);
}

module.exports = {
    buscarLocacaoPorCodigo,
    cadastrarLocacao,
    buscarLocacoes,
    removerLocacao
}