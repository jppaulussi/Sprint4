const meuCanvas = document.querySelector('canvas');


const ctx = meuCanvas.getContext('2d');


const left = 37;
const up = 38;
const right = 39;
const down = 40;


let moverEsquerda = false;
let moverDireita = false;
let moverAcima = false;
let moverAbaixo = false;


const q1 = {
    x: 10,
    y: 10,
    w: 60,
    h: 60
}


function mover() {
    if (moverEsquerda) {
        q1.x -= 5;
    }
    if (moverDireita) {
        q1.x += 5;
    }
    if (moverAcima) {
        q1.y -= 5;
    }
    if (moverAbaixo) {
        q1.y += 5;
    }
}

function criarElemento() {

    ctx.clearRect(0, 0, meuCanvas.width, meuCanvas.height);

    // cor do quadrado
    ctx.fillStyle = "#900";

    //traçar o quadrado
    ctx.fillRect(q1.x, q1.y, q1.w, q1.h);
}


window.addEventListener('keydown', pressionarTecla);


window.addEventListener('keyup', soltarTecla);

function pressionarTecla(e) {

    const codigo = e.keyCode;
    if (codigo === left && codigo !== right) {
        moverEsquerda = true;
    }
    if (codigo === right && codigo !== left) {
        moverDireita = true;
    }

    if (codigo === up && codigo !== down) {
        moverAcima = true;
    }

    if (codigo === down && codigo !== up) {
        moverAbaixo = true;
    }
}

function soltarTecla(e) {

    const codigo = e.keyCode;
    if (codigo === left && codigo !== right) {
        moverEsquerda = false;
    }
    if (codigo === right && codigo !== left) {
        moverDireita = false;
    }

    if (codigo === up && codigo !== down) {
        moverAcima = false;
    }

    if (codigo === down && codigo !== up) {
        moverAbaixo = false;
    }
}


function atualizarTela() {

    requestAnimationFrame(atualizarTela, canvas);
    mover();
    criarElemento();
}

atualizarTela();