let buttonIniciar = window.document.getElementById('iniciar');
let buttonFinalizar = window.document.getElementById('finalizar');

timer = window.document.getElementById('timer').innerHTML;
buttonIniciar.addEventListener('click', iniciarContagem(timer));
buttonFinalizar.addEventListener('click', finalizarContagem);



function iniciarContagem(timer) {
    setInterval(function() {

        var soma = parseInt(timer) + 1;

        if(soma < 10) {
            window.document.getElementById('timer').innerHTML = '00:0';
            var zeroAntes = window.document.getElementById('timer').innerHTML;
            //zeroAntes = '0';
            zeroAntes += soma;
            /*
            window.document.getElementById('timer').innerHTML += zeroAntes;
            */
            timer = window.document.getElementById('timer').innerHTML

            window.document.getElementById('timer').innerHTML += soma;
        }
    }, 1000)
}