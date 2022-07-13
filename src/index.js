function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback (num1, num2);
}

console.log(calc(2, 2, sum))

setTimeout(function() {    /* funcion sin argumentos - para luego hacer el llamado  */
    console.log('hola Javascript')
}, 5000) 

function grettins(name){
    console.log(`hola ${name}`);
}

setTimeout(grettins, 2000, 'oscar'); /* la funcion - el tiempo que quiero - argumentos o string de la funcion */

