let buttonIniciar = window.document.getElementById('iniciar');
let buttonFinalizar = window.document.getElementById('finalizar');

buttonIniciar.addEventListener('click', iniciarContagem);
buttonFinalizar.addEventListener('click', finalizarContagem);

var minutos = window.document.getElementById('minutos');
function iniciarContagem() {

    tempo = setInterval(function() {
        var segundos = window.document.getElementById('segundos').innerHTML;
        var soma = parseInt(segundos) + 1;

        

        if(soma >= 60) {
            soma = 0;
            maisUmMinuto();
        }

        if(soma <= 10) {
            window.document.getElementById9('segundos').innerHTML = "0" + soma;
        } else {
            window.document.getElementById('segundos').innerHTML = soma;
        }

        
    },1000);
    
    /*
    setInterval(function() {
        var minutos = window.document.getElementById('minutos').innerHTML;
        var soma = parseInt(cronometro) + 1;

        
        window.document.getElementById('minutos').innerHTML = soma;
    }, 1000)
    */
    
}

function maisUmMinuto() {
    
}


function finalizarContagem() {
    clearInterval(tempo);
}