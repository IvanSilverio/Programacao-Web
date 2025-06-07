let numGerado = null;
let numTentativas = 0;

const btnPensar = document.querySelector('#btn-pensar');
const btnAdivinhar = document.querySelector('#btn-adivinhar');

const inputIni = document.querySelector('#inicio');
const inputFim = document.querySelector('#fim');
const inputNumJogador = document.querySelector('#entrada');

const areaSaida = document.querySelector('#area-saida-span');

btnAdivinhar.addEventListener('click', () => {
    
    if(numGerado === null)
    {
        areaSaida.innerHTML = "Calma Jovem! Nem pensei em nenhum número. Lembrou de clicar no 'Pensar'?";
        return;
    }

    let numJ = Number(inputNumJogador.value);

    if(!Number.isInteger(numJ) || numJ < 0)
    {
        areaSaida.innerHTML = 'Digite um número inteiro para tentar adivinhar o que pensei';
    
    }else
    {
        numTentativas++;
        if(numJ === numGerado)
        {
            areaSaida.innerHTML = `Parabens! Você acertou depois de ${numTentativas} tentativa(s).`;

            numTentativas = 0;
            inputIni.value = '';
            inputFim.value = '';
            numGerado = null;
            inputNumJogador.value = '';
        }
        else if(numJ > numGerado)
        {
            areaSaida.innerHTML = 'O número que pensei é menor';
        }
        else
        {
            areaSaida.innerHTML = 'O número que pensei é maior';
        }
    }

});

btnPensar.addEventListener('click', () => {

    let numInicio = Number(inputIni.value);
    let numFinal = Number(inputFim.value);

    if(!Number.isInteger(numInicio) || numInicio < 0 || !Number.isInteger(numFinal) || numFinal < 0)
    {
        areaSaida.innerHTML = `Digite um número inteiro positivo nos campos "início" e "fim"!`;
    }
    else if(numInicio >= numFinal)
    {
        areaSaida.innerHTML = 'Número Inicial precisa ser menor que Número Final';
    }
    else
    {
        numGerado = Math.trunc(Math.random()*(numFinal - numInicio + 1)) + numInicio;
        areaSaida.innerHTML = `Pronto! Pensei em número entre ${numInicio} e ${numFinal}. Tente Adivinhar!`;
        console.log(numGerado);
    }
})