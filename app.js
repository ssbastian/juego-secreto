//acceder a elementos de html
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [ ];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
   // let numeroDeUsuario = document.querySelector('input');
   let numeroDeUsuario = parseInt( document.getElementById('valorUsuario').value);
   //console.log(typeof(numeroDeUsuario));
   console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}` );
        document.getElementById('reiniciar').removeAttribute('disabled'); // quitar el desabilitar del boton
    }else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto  ){ 
            asignarTextoElemento('p', 'El número secreto es mayor');
        } else {
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
   return;
}

function limpiarCaja() {
     document.querySelector('#valorUsuario').value = '';
} 

function generarNumeroSecreto() { //RECURSIVIDAD
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los números
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        // si número generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else { 
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
       }
    }

}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}!`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //Generar el número aleatorio
    //Inicializar el número de intentos
    //Desabilita el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); 
}


condicionesIniciales();