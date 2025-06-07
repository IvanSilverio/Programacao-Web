const btn = document.querySelector('button');
const ul = document.querySelector('ul');
const nomeProRef = document.querySelector('#nome');


const lerProduto = () => {

    const nomeProduto = nomeProRef.value;

    if(!nomeProduto)
    {
        alert('Nome do produto não pode ser vazio!');
        return;
    }
    
    addProduto(nomeProduto);

}

btn.addEventListener('click',lerProduto);

const addProduto = (nomeProduto) => {

    const newLi = document.createElement('li');

    const newP = document.createElement('p');
    newP.innerHTML = `&bull; ${nomeProduto}. Quantidade: `

    const newQtdSpan = document.createElement('span');
    newQtdSpan.innerText = '1';
    newP.append(newQtdSpan);
    newLi.append(newP);

    const newAddBut = document.createElement('button');
    newAddBut.innerText = '+';
    newAddBut.addEventListener('click',incrementarProduto);
    newAddBut.style.backgroundColor = 'green';
    newLi.append(newAddBut);

    const newSubBut = document.createElement('button');
    newSubBut.innerText = '-';
    newSubBut.addEventListener('click',decrementarProduto);
    newSubBut.style.backgroundColor = 'red';
    newLi.append(newSubBut);

    ul.append(newLi);
}

const incrementarProduto = (evt) => {
    let qtdAtual = Number(evt.target.parentNode.childNodes[0].childNodes[1].innerText);
    qtdAtual++;
    evt.target.parentNode.childNodes[0].childNodes[1].innerText = qtdAtual;
}

const decrementarProduto = (evt) => {
    let qtdAtual = Number(evt.target.parentNode.childNodes[0].childNodes[1].innerText);
    qtdAtual--;
    if(qtdAtual <= 0){
        evt.target.parentNode.remove();
    }else{
        evt.target.parentNode.childNodes[0].childNodes[1].innerText = qtdAtual;
    }
}