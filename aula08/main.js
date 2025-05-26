const ul = document.querySelector('ul');
const btn = document.querySelector('button');
const qtdRef = document.querySelector('#qtd');
const nomeRef = document.querySelector('#nome');
const pMsg = document.querySelector('#p-msg');

const msg = 'Seu carrinho está vazio. Adicione produtos';

const addProdutos = () => {

    if (qtdRef.value === '' || nomeRef.value === ''){
        alert('Campos não podem ser vazios!');
        return;
    }

    const qtdValue = Number (qtdRef.value);
    const nomeValue = nomeRef.value;
    
    const newLi = document.createElement('li');
    newLi.innerText = `${qtdValue}: ${nomeValue}`;

    const newBtn = document.createElement ('button');

    newBtn.innerText = 'X';
    newBtn.addEventListener('click', removeProduto);

    newLi.append(newBtn);

    ul.append(newLi);

    pMsg.innerText = '';
}

const removeProduto = (evt) => {
    evt.target.parentNode.remove();

    if (ul.childNodes.length === 0){
        pMsg.innerText = msg
    }
}

btn.addEventListener('click', addProdutos);
