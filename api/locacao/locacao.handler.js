const crud = require("../../crud");
const livrosHandler = require("../livros/livros.handler");
const autoresElivrosHandler = require("../autoresElivros/autoresElivros.handler");

async function cadastrarLocacao(codigoClienteLocacao, locacao) {
    const locacoesExistentes = await buscarLocacoes();

    for (let codigoCliente of locacao) {
        if (codigoCliente === codigoClienteLocacao) {
            return console("Cliente com locação ativa");
        }
    }

    const livros = await livrosHandler.buscarLivros();
    const listaLivros = locacao.listaLivros;

    for (let livro of livros) {
        for (let codLivro of listaLivros) {
            if (livro.codigoLivro === codLivro) {
                if (livro.alugado == true) {
                    return console.log("Esse livro já está locado.");
                }

                const autores = await autoresElivrosHandler.buscarAutoresELivros();
                let autorDoLivro = [];

                for (let autor of autores) {
                    if (codigoLivro === autor.codigoLivro) {
                        autorDoLivro.push(autor.codLivro);
                    }
                }

                const livro = {
                    titulo: livro.titulo,
                    qtdPaginas: livro.qtdPaginas,
                    alugado: true,
                    autores: autorDoLivro
                }

                await editarLivro(codLivro, livro);
            }
        }

        for (let codigoLivro of listaLivros) {
            const livroAlugado = {
                codigoLivro: codigoLivro,
                codigoLocacao: codigoLocacao
            }

            await cadastrarLivrosAlugados(livroAlugado);
        }

        await crud.cadastrar("locacao", undefined, { codigoCliente: codigoCliente });
    }
}


async function buscarLocacoes() {
    return await crud.buscar("locacao");
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