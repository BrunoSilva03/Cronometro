let buttonIniciar = window.document.getElementById('iniciar');
let buttonFinalizar = window.document.getElementById('finalizar');

buttonIniciar.addEventListener('click', iniciarContagem);
buttonFinalizar.addEventListener('click', finalizarContagem);



function iniciarContagem() {

    tempoSegundos = setInterval(function () {
        var segundos = window.document.getElementById('segundos').innerHTML;
        var soma = parseInt(segundos) + 1;



        if (soma >= 60) {
            soma = 0;
            maisUmMinuto();
        }


        if (soma < 10) {
            seg = window.document.getElementById('segundos').innerHTML;
            seg = "0";
            seg += soma;
            window.document.getElementById('segundos').innerHTML = seg;
    
        } else {
            window.document.getElementById('segundos').innerHTML = soma;
        }

    }, 1);

}

function maisUmMinuto() {

    var minutos = window.document.getElementById('minutos').innerHTML;
    var somaMinutos = parseInt(minutos) + 1;

    if (somaMinutos >= 60) {
        somaMinutos = 0;
        maisUmaHora();
    }


    if (somaMinutos < 10) {
        min = window.document.getElementById('minutos').innerHTML;
        min = "0";
        min += somaMinutos;
        window.document.getElementById('minutos').innerHTML = min;
    } else {
        window.document.getElementById('minutos').innerHTML = somaMinutos;
    }
}


function maisUmaHora() {
    var horas = window.document.getElementById('horas').innerHTML;
    var doisPontos = window.document.getElementById('spandoispontos');

    

    doisPontos.hidden = false;
    window.document.getElementById('horas').hidden = false;

    var somaHoras = parseInt(horas) + 1;

    if(somaHoras >= 24) {
        somaHoras = 0;
        maisUmDia();
    }

    if(somaHoras < 10) {
        hor = window.document.getElementById('horas').innerHTML;
        hor = "0";
        hor += somaHoras;
        window.document.getElementById('horas').innerHTML = hor;
    } else {
        window.document.getElementById('horas').innerHTML = somaHoras;
    }
}


function finalizarContagem() {
    clearInterval(tempoSegundos);
}