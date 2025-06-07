const btn = document.querySelector('button');
const main = document.querySelector('main');
const h1 = document.querySelector('h1');

//Função tradicional
function componenteCor(){
    return Math.trunc(Math.random()*256);
}

//Função como uma Arrow Function
const newColor = () => {

    const newRGB = {
        r : componenteCor(),
        g : componenteCor(),
        b : componenteCor()
    }
    return newRGB;
}

btn.addEventListener('click', () => {
    const newRGB = newColor();
    main.style.backgroundColor = `rgb(${newRGB.r},${newRGB.g},${newRGB.b})`;
    h1.innerText = `Cor de Fundo: rgb(${newRGB.r},${newRGB.g},${newRGB.b})`;

});