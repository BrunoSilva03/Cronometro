let buttonIniciar = window.document.getElementById('iniciar');
let buttonFinalizar = window.document.getElementById('finalizar');

timer = window.document.getElementById('timer').innerHTML;
buttonIniciar.addEventListener('click', iniciarContagem);
buttonFinalizar.addEventListener('click', finalizarContagem);



function iniciarContagem() {
    setInterval(function () {

        var soma = parseInt(timer) + 1;
        var minutos = false;

        if (soma < 10 && minutos == false) {
            window.document.getElementById('timer').innerHTML = '00:0';
            window.document.getElementById('timer').innerHTML += soma;
            timer = soma

        }

        if(soma >= 10 && minutos == false) {
            window.document.getElementById('timer').innerHTML = '00:';
            window.document.getElementById('timer').innerHTML += soma;
            timer = soma;
        }

        if(soma >= 60 && minutos == false) {
            window.document.getElementById('timer').innerHTML = '01:00';
            soma = 0;
            timer = soma;
            acrescentaMinutos();

        }
    }, 1000)
}


