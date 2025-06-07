const qtdRef = document.querySelector('#qtd');
const nomeProdutoRef = document.querySelector('#produto');
const btn = document.querySelector('#btnAdd');
const listaComprasRef = document.querySelector('#lista-pedidos');
const pMsgCarrinho = document.querySelector('.lista-pedidos p');

const msgCarrinhoVazio = 'Seu pedido está vazio. Adicione produtos no carrinho!';

btn.addEventListener('click', () => {

    const qtdValue = qtdRef.value;
    const nomeValue = nomeProdutoRef.value;


    if(qtdValue === '' || nomeValue === '')
    {
        alert('Campo Vazio');
        return -1;
    }

    const newLi = document.createElement('li');
    newLi.innerText = `${qtdValue}: ${nomeValue}`;
    
    const newDeleteBtn = document.createElement('button');
    newDeleteBtn.innerText = 'X';
    newDeleteBtn.addEventListener('click', funcDelete);

    newLi.insertAdjacentElement('beforeend', newDeleteBtn);

    listaComprasRef.append(newLi);

    pMsgCarrinho.innerText = '';

});


const funcDelete = (e) => {

    e.target.parentNode.remove();
    const liProdutos = document.querySelectorAll('#lista-pedidos li');
    if(liProdutos.length === 0)
        pMsgCarrinho.innerText = msgCarrinhoVazio;

}