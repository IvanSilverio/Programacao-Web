const select = document.querySelector('select');
const btn1 = document.querySelector('#jogador1');
const btn2 = document.querySelector('#jogador2');
const btnReset = document.querySelector('#reset');

const contagem1 = document.querySelector('#contagem1');
const contagem2 = document.querySelector('#contagem2');

let pontos1 = 0;
let pontos2 = 0;
let limite = Number(select.value);
let fimDeJogo = false;

const atualizarPlacar = () => {
    contagem1.innerText = pontos1;
    contagem2.innerText = pontos2;
}

const checarVitoria = () => {
    if (pontos1 >= limite || pontos2 >= limite) {
        fimDeJogo = true;

        if (pontos1 >= limite) {
            contagem1.style.color = 'green';
            contagem2.style.color = 'red';
        } else {
            contagem1.style.color = 'red';
            contagem2.style.color = 'green';
        }
    }
}

btn1.addEventListener('click', () => {
    if (!fimDeJogo) {
        pontos1++;
        atualizarPlacar();
        checarVitoria();
    }
});

btn2.addEventListener('click', () => {
    if (!fimDeJogo) {
        pontos2++;
        atualizarPlacar();
        checarVitoria();
    }
});

btnReset.addEventListener('click', () => {
    pontos1 = 0;
    pontos2 = 0;
    fimDeJogo = false;
    atualizarPlacar();
    contagem1.style.color = 'black';
    contagem2.style.color = 'black';

});

select.addEventListener('change', (e) => {
    limite = Number(e.target.value); // Agora o limite se atualiza corretamente
    console.log(limite);

    pontos1 = 0;
    pontos2 = 0;
    fimDeJogo = false;
    atualizarPlacar();
    contagem1.style.color = 'black';
    contagem2.style.color = 'black';
});

