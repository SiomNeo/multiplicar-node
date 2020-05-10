//requireds
const fs = require('fs');
const colors = require('colors');

let crearTabla = async(base, limite = 10) => {
    if (!Number(base)) {
        throw new Error(`El valor base introducido ${base} no se un numero`);
    }

    if (!Number(limite)) {
        throw new Error(`El valor limite introducido ${limite} no se un numero`);

    }

    let data = '';

    for (i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }
    return data;

}

let crearArchivo = async(base, limite = 10) => {
    let data = '';
    await crearTabla(base, limite)
        .then(tabla => data = tabla)
        .catch(e => console.log(e));

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) {
            throw new Error(`Ha ocurrido un error ${err}`)
        } else {
            console.log(`Archivo creado:`, `tabla-${base}.txt`.green);
        }
    });
};

let listarTabla = async(base, limite) => {

    console.log(`===========================`.green);
    console.log(`========tabla de ${base}========`.green);
    console.log(`===========================`.green);
    let data = '';
    await crearTabla(base, limite)
        .then(tabla => data = tabla)
        .catch(e => console.log(e));
    console.log(data);
};

module.exports = {
    crearArchivo,
    listarTabla
}