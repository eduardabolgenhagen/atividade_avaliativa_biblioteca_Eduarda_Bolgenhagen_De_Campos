const crud = require("../../crud");

async function cadastrarLocacao(locacao, codigoCliente) {
    console.log("definindo codigo do cliente", codigoCliente);
    if (buscarLocacaoPorCodigo("locaocao", codigoCliente) = codigoCliente) {
        console.log("Cliente com locação ativa.");
        return false;
    } else {
        const cadastro = await crud.cadastrar("locacao", undefined, locacao);
        console.log("livre para locar");
        return cadastro;
    }
}

async function buscarLocacoes(){
    return await crud.buscar("locacoes");
}

async function buscarLocacaoPorCodigo(codigoLocacao) {
    return await crud.buscarPorCodigo("locacao", codigoLocacao);
}

async function removerLocacao(codigoLocacao){
    return await crud.remover("locacao", codigoLocacao);
}

module.exports = {
    buscarLocacaoPorCodigo,
    cadastrarLocacao,
    buscarLocacoes,
    removerLocacao
}