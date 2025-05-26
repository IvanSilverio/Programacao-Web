const inpInicio = document.querySelector('#inicio');
const inpFim = document.querySelector('#fim');
const btnPensar = document.querySelector('#pensar');
const btnAdivinhar = document.querySelector('#adivinhar');
const resp = document.querySelector('#resp');
const adivinhado = document.querySelector('#adivinhado');


let numero = null;
let quant = 0;

const Reiniciar = () =>{
    inpInicio.value = '';
    inpFim.value = '';
    adivinhado.value = '';

}

const PensarAleatorio =(e) =>{

    if (!inpInicio.value || !inpFim.value){
        resp.innerText = ('Digite um número inteiro nos campos "início" e "fim"!');
        return
    }

    if (inpInicio.value >= inpFim.value){
        resp.innerText = ('Digite um valor inicial menor que o final!');
        return
    }

    numero = Math.floor(Math.random() * 10);
    console.log (numero);

    resp.innerText = (`Pronto! Pensei em um número entre ${inpInicio.value} e ${inpFim.value}. Tente adivinhar.`);
}

const Adivinhar = (e) =>{
    if (numero === null){
        resp.innerText = ('Calma, jovem! Nem pensei em um número. Lembrou de clicar no "Pensar"?');
        return
    }

    if (!adivinhado.value){
        resp.innerText = ('Digite um numero inteiro para adivinhar o que pensei.');
        return
    }

    else if (adivinhado.value < numero){
        resp.innerText = ('O numero que pensei é maior');
        quant ++;
    }

    else if (adivinhado.value > numero){
        resp.innerText = ('O numero que pensei é menor');
        quant++;
    }

    else {
        quant++;
        resp.innerText = (`Parabéns!!! Eu pensei no número ${numero}. Você conseguiu após ${quant} tentativa(s).`);
        Reiniciar();
    }
}




btnPensar.addEventListener('click', PensarAleatorio);
btnAdivinhar.addEventListener('click', Adivinhar);