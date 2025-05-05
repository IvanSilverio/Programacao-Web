const btn = document.querySelector('button');
const main = document.querySelector('main');
const h1 = document.querySelector('h1');

const geraCor = () => {
        
    const novaCor = {
        r: Math.trunc(Math.random() * 256),
        g: Math.trunc(Math.random() * 256),
        b: Math.trunc(Math.random() * 256)
    }

    return novaCor;
}

const mudaCor = () => {
    
    const novaCor = geraCor();

    //acessar a main
    main.style.backgroundColor = `
        rgb (${novaCor.r}, ${novaCor.g}, ${novaCor.b})
        `;
        //aplicar a cor

        h1.innerText = `Cor de fundo: rgb (${novaCor.r}, ${novaCor.g}, ${novaCor.b})`;
}



btn.addEventListener('click', mudaCor);

// Criar uma função

