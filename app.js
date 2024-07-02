/**
 * JUEGO ADIVINANZA NÚMERO
 */

//variables
let numeroMaximoPosible = 100;
let numeroUsuario = 0;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let intentos = 1;
let palabraVeces = 'vez';
let maximosIntentos = 2; 


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un n�mero entre uno 1 y ${numeroMaximoPosible} por favor:`));
   
    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el n�mero ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
            if (numeroUsuario > numeroSecreto) {
                alert('El numero de secreto es menor')
            }
            else {
                alert('El numero secreto es mayor')
            }
    }
        //alert (`lo siento, no acertaste el numero ${numeroUsuario}`);
     
    intentos += 1;
    palabraVeces = 'veces';
    if (intentos > maximosIntentos){
        alert(`Llegaste al numero maximo de intentos ${maximosIntentos}`)
        break; 
    }
}


        /* 
        // ejercicio DIAS DE LA SEMANA
        let diaSemana = prompt('Me indicas que dia de la semana es: ');

        console.log(diaSemana);

        if(diaActual == 'Sabado' || diaActual == 'Domingo') {
            alert('Buen fin de semana! '); 
        }else
            alert('Buena Semana!');


        // ejercicio 3 puntuacion

        let puntuacion = prompt('por favor digita tu puntuación');

        if(puntuacion >= 100) {
            alert('!Felicidades, has ganado')
        }else
            alert('Intentalo nuevamente para ganar')

        // ejercicio saldo

        let saldo = 1500;
        let mensaje = `Su saldo actual es: ${saldo}`;
        console.localStorage(mensaje);

        */