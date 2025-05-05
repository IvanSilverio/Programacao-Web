const btn = document.querySelector('button');
const nomePRef = document.querySelector('#nome');
const ul = document.querySelector('ul');

const addProduto = (nomeProduto) => {
    const newLi = document.createElement('li');
    const newP = document.createElement('p');
    newP.innerText = `${nomeProduto} - Quantidade:`;

    const newSpan = document.createElement('span');
    newSpan.innerText = '1';
    
    newP.append(newSpan);

    const btnAdd = document.createElement('button');
    btnAdd.innerText = '+';
    btnAdd.style.backgroundColor = 'green';
    btnAdd.addEventListener('click', incProduto);

    const btnSub = document.createElement('button');
    btnSub.innerText = '-';
    btnSub.style.backgroundColor = 'red';
    btnSub.addEventListener('click', decProduto);

    newLi.append(newP);
    newLi.append(btnAdd);
    newLi.append(btnSub);

    ul.append(newLi);

}

const incProduto = (evt) => {
    let qtdAtual = Number(evt.target.parentNode.childNodes[0].childNodes[1].innerText);
    qtdAtual++;

    evt.target.parentNode.childNodes[0].childNodes[1].innerText = qtdAtual;
}

const decProduto = (evt) => {
    let qtdAtual = Number(evt.target.parentNode.childNodes[0].childNodes[1].innerText);
    qtdAtual--;

    if(qtdAtual <= 0){
        evt.target.parentNode.remove();
    }

    evt.target.parentNode.childNodes[0].childNodes[1].innerText = qtdAtual;
}
const leitura = () => {

    let nomeValue = nomePRef.value;
    if(!nomeValue){
        alert('Nome não pode ser vazio!');
        return;
    }

    addProduto(nomeValue);
}

btn.addEventListener('click', leitura);