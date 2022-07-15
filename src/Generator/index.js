function* gen () {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);//al poner console, va ejecutar un yield por cada console que digito: 1
console.log(g.next().value);// 2
console.log(g.next().value);// 3

function* iterate(array) { //al poner el * hago la llamada de generator
    for (let value of array) { //con el for y of hacemos que vaya iterando en cada uno y asi funcione el yield
        yield value
    }
}

const it = iterate(['oscar', 'camilo', 'juan', 'david', 'camila']);
console.log(it.next());//me da los datos con mas informaciòn
console.log(it.next().value);//al agregarle value, me arroja solo el nombre del array sin tanto texto
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);//al poner uno extra me dara undefined