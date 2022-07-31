/*este es un cambio que debo ver en github*/

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .catch(e => console.log(e))
        break;

    case 'ambas':
        crearArchivo(argv.base, argv.limite)
            .catch(e => console.log(e))
        listarTabla(argv.base, argv.limite)
        break;

    default:
        console.log('Comando no reconocido');
}
