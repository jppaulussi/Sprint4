const meuCanvas = document.querySelector('#canvas');
const ctx = meuCanvas.getContext('2d');


const left = 37;
const up = 38;
const right = 39;
const down = 40;


let moverEsquerda = false;
let moverDireita = false;
let moverAcima = false;
let moverAbaixo = false;


const todosQuadrados = [];


const quadrado1 = new Elemento(20, 40, 50, 50, '#333');
quadrado1.velocidade = 10;
todosQuadrados.push(quadrado1);


window.addEventListener('keydown', function(e) {
    const tecla = e.keyCode;
    switch (tecla) {
        case left:
            moverEsquerda = true;
            break;
        case right:
            moverDireita = true;
            break;
        case up:
            moverAcima = true;
            break;
        case down:
            moverAbaixo = true;
            break;
    }
}, false);


window.addEventListener('keyup', function(e) {
    const tecla = e.keyCode;
    switch (tecla) {
        case left:
            moverEsquerda = false;
            break;
        case right:
            moverDireita = false;
            break;
        case up:
            moverAcima = false;
            break;
        case down:
            moverAbaixo = false;
            break;
    }
}, false);



function mover() {
    if (moverEsquerda && !moverDireita) {
        quadrado1.posX -= quadrado1.velocidade;
    }
    if (moverDireita && !moverEsquerda) {
        quadrado1.posX += quadrado1.velocidade;
    }
    if (moverAcima && !moverAbaixo) {
        quadrado1.posY -= quadrado1.velocidade;
    }
    if (moverAbaixo && !moverAcima) {
        quadrado1.posY += quadrado1.velocidade;
    }


    quadrado1.posX = Math.max(0, Math.min(meuCanvas.width - quadrado1.width, quadrado1.posX));
    quadrado1.posY = Math.max(0, Math.min(meuCanvas.height - quadrado1.height, quadrado1.posY));
}


function exibirQuadrados() {
    ctx.clearRect(0, 0, meuCanvas.width, meuCanvas.height);

    for (const i in todosQuadrados) {
        const quad = todosQuadrados[i];
        if (quad.visible) {
            ctx.fillStyle = quad.color;
            ctx.fillRect(quad.posX, quad.posY, quad.width, quad.height);
        }
    }
}


function atualizarTela() {
    window.requestAnimationFrame(atualizarTela, meuCanvas);
    mover();
    exibirQuadrados();
}
atualizarTela();