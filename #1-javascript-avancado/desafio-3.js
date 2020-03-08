function job(data) {
    return new Promise(function(resolve, reject){
        if(typeof data !== 'number'){
            reject('error')
        }
        else if(data %2 == 0){
            setTimeout(() => {reject('par')}, 2000)    
        }else{
            setTimeout(() => {resolve('ímpar')}, 1000)  
        }
    })
}

job('oi')
.then(console.log)
.catch(console.log)