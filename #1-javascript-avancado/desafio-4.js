// Desafio 4
// O código a seguir usa promises para manipular um resultado assíncrono. 
// O resultado é uma promise que gera um ID quando resolvido. Esse ID deve ser
//  usado para recuperar informações do banco de dados. No final, sua função deve
//   retornar a propriedade name da informação. Em caso de erro, você deve retornar 
//   uma promise rejeitada com o erro fornecido. Mas primeiro você deve notificar o errorManager com o erro.

function job(result, database, errorManager) {
    return new Promise(function (resolve, reject) {
        resolve(result)
    })

    .then(function(id) {
        return database.get(id);
    })

    .then(function(info) {
        return info.name;
    })

    .catch(function(error) {
        errorManager.notify(error);
        throw error;
    });
}

job()
.then(content => )
.catch(error => )