const {argv} = require('./yargs');
const funciones = require('./funciones');

/*console.log(argv);
console.log('Posicion 0 ' + argv._[0]);*/

let comando = argv._[0];

switch (comando){
	case 'crear':
		funciones.crear(argv);
	break
	
	case 'mostrar':
		funciones.mostrar();
	break
	
	case 'mostrarest':
		funciones.mostrarest(argv.nombre);
	break
	
	case 'mostrarmat':
		funciones.mostrarmat();
	break
	
	case 'promedioest':
		funciones.promedioest(argv.nombre);
	break
	
	case 'promedioganados':
		funciones.promedioganados();
	break
	
	default:
		console.log('No ingreso función existente');
}

