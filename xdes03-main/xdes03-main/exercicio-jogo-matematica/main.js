const inputRes = document.querySelector('input');
const btnGerarQ = document.querySelector('#btnGerarQ');
const btnValidarResp = document.querySelector('#btnValidarRes');
const divAreaEq = document.querySelector('#idAreaEquacao');
const pAreaRes = document.querySelector('#idAreaResp');

const operacoes = ['+', '-', '*'];
let op1;
let op2;
let operacaoEscolhida;

btnGerarQ.addEventListener('click', () => {
    let eq = '';
    op1 = Math.trunc(Math.random()*10);
    op2 = Math.trunc(Math.random()*10);
    operacaoEscolhida = operacoes[Math.trunc(Math.random()*operacoes.length)];
    eq = `${op1} ${operacaoEscolhida} ${op2}`;
    divAreaEq.innerText = eq;
    divAreaEq.classList.remove('hidden');
    
});

btnValidarResp.addEventListener('click', () => {

    let resPlayer = Number(inputRes.value); 
    let res = executaOperacao(operacaoEscolhida);
    
    if(resPlayer===res){
        pAreaRes.innerText = 'Parabéns!';
        pAreaRes.style.color = 'blue';
    }
    else{  
        pAreaRes.innerText = `Deu Ruim! A resposta correta é ${res}`;
        pAreaRes.style.color = 'red';
    }
    pAreaRes.classList.remove('hidden');
});

const executaOperacao = (operacao) =>{
    let res = '';
    if(operacao === '*')
        res = op1*op2;
    else if(operacao === '+')
        res = op1+op2;
    else    
        res = op1-op2;
    return res;
}