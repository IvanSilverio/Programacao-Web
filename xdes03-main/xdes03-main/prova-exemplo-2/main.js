const nomeProdutoInput = document.querySelector('#nomeProduto');
const btnAdd = document.querySelector('#btnAdicionar');
const listaProdutos = document.querySelector('#listaProdutos');

btnAdd.addEventListener('click', () => {
    let nomeProduto = nomeProdutoInput.value;
    if(nomeProduto === ''){
        alert('Nome do produto não pode ser vazio');
        return;
    }
    let qtdProduto = 1;
    const li = document.createElement('li');
    const spanQtd = document.createElement('span');
    spanQtd.innerHTML = ` Quantidade: <span>${qtdProduto}</span>`;
    li.innerHTML = `&bull; ${nomeProduto}.`;
    li.append(spanQtd);
    const btnAddQtd = document.createElement('button');
    const btnRemoveQtd = document.createElement('button');

    btnAddQtd.innerHTML = '+';
    btnAddQtd.addEventListener('click', addProduto);
    btnAddQtd.style.background = 'green';
    li.append(btnAddQtd);
    
    btnRemoveQtd.innerHTML = `-`;
    btnRemoveQtd.addEventListener('click', removerProduto);
    btnRemoveQtd.style.background = 'red';
    li.append(btnRemoveQtd);
    
    listaProdutos.append(li);
});

const addProduto = (e) => {
    let qtdAtual = Number(e.target.parentNode.children[0].children[0].innerText);
    qtdAtual++;
    e.target.parentNode.children[0].children[0].innerText = qtdAtual;
}

const removerProduto = (e) =>{
    let qtdAtual = Number(e.target.parentNode.children[0].children[0].innerText);
    qtdAtual--;
    console.log(qtdAtual);
    if(qtdAtual <= 0)
        e.target.parentNode.remove();
    else
        e.target.parentNode.children[0].children[0].innerText = qtdAtual; 
}