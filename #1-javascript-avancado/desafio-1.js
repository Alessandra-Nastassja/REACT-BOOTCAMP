// Desafio 1
// O código abaixo está síncrono, você deve modificálo para que callback1 seja chamado apenas 
// uma vez depois de 2 segundos e callback2 seja chamado 3 vezes com um intervalo de 1 segundo

function job(callback1, callback2) {
    setTimeout(() => {
        callback1();
    }, 2000);
    setTimeout(() => {
        callback2();
    }, 1000 );
    setTimeout(() => {
        callback2();
    }, 2000 );
    setTimeout(() => {
        callback2();
    }, 3000 );
}



module.exports = job;