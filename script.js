function adicionarAoCarrinho(produto, preco) {
    alert(`Você adicionou ${produto} ao carrinho por R$ ${preco.toFixed(2)}!`);
}

document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
});
