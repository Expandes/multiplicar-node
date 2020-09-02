const argv = require('./config/yargs').argv;
const color = require('colors');

//Se requiere el módulo respectivo
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];


switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(listado => console.log(listado))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)

        .then(archivo => console.log(`Archivo Creado: ${ archivo.green }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}


// console.log(argv.base);



// let parametro = argv[2];
// let base = parametro.split("=")[1];

// let base = "asdfasdf";