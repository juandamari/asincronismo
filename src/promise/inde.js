const promise = new Promise(function(resolve, reject) {
    resolve('hey!')
});

const cow = 15; //esta es la base de la promesa donde trabajara si es verdad o no

const countCow = new Promise(function(resolve, reject){
    if (cow > 10) {
        resolve(`we have ${cow} cows on the farm`); //muestra el valor si es correcto
    }
    else {
        reject("there is no cows on the farm"); //si no sucede lo q necesito
    }
})

countCow.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error); //captura el error
}).finally(() => console.log('Finally'));//genero un mensaje al finalizar la promesa sin importar sea error o no