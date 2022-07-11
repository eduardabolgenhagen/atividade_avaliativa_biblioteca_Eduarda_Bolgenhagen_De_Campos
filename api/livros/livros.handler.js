const crud = require("../../crud");

function buscarLivros(){
    return await crud.buscar("livros");
}

function buscarLivrosPorId(isbnLivros){
    
}

module.exports = {
    buscarLivros
}