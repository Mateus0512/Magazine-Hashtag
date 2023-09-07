const cartaoProdutos =  document.getElementById('container-produto');

function esconderMasculinos(){
    exibirTodos();
    const produtosMasculinos = Array.from(cartaoProdutos.getElementsByClassName('masculino'));
    for(const produto of produtosMasculinos){
        produto.classList.add('hidden');
    }
    
}

function esconderFemininos(){
    exibirTodos();
    const produtosFemininos = Array.from(cartaoProdutos.getElementsByClassName('feminino'));
    for(const produto of produtosFemininos){
        produto.classList.add('hidden');
    }
}

function exibirTodos(){
    const produtosEscondidos = Array.from(cartaoProdutos.getElementsByClassName('hidden'));
    for(const produto of produtosEscondidos){
        produto.classList.remove('hidden');
    }
}

export function inicializarFiltros(){
    document.getElementById('exibir-femininos').addEventListener('click',esconderMasculinos);
    document.getElementById('exibir-masculinos').addEventListener('click',esconderFemininos);
    document.getElementById('exibir-todos').addEventListener('click',exibirTodos);
}