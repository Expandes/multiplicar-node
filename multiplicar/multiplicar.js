const fs = require('fs');
const color = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('====================='.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('====================='.green);

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} por ${i} es igual a ${base * i}\n`;


        }

        resolve(data);

    })

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} por ${i} es igual a ${base * i}\n`;

        }


        fs.writeFile(`tablas/archivo${base}-al-${limite}.txt`, data, (err) => {

            if (err)

                reject(err)

            else

                resolve(`tabla-${ base }-al-${limite}.txt`)

        });

    });

}


module.exports = { crearArchivo, listarTabla }