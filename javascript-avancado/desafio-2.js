// Desafio 2
// Dado o código abaixo, a função job deve retornar um objeto de promise, a 
// promise deve ser resolvida 2 segundos apóes invocar a função job e exibir um hello world

function job() {
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve('hello world')
        }, 2000);
    })
    
}

module.exports = job;



