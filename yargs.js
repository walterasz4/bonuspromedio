const nombre = {
	demand: true,
	alias: 'n'
}
const matematicas = {
	demand: true,
	alias: 'm'
}
const ingles = {
	demand: true,
	alias: 'i'
}
const programacion = {
	demand: true,
	alias: 'p'
}
const creacion = {
	nombre,
	matematicas,
	ingles,
	programacion
}
const mostrarest = {
	nombre
}
const promedioest = {
	nombre
}

const argv = require('yargs')
			 .command('crear','Crear un estudiante en BD',creacion)
			 .command('mostrar','Muestra los esrudiantes y sus notas')
			 .command('mostrarest','Muestra la información de un estudienta',mostrarest)
			 .command('promedioest','Muestra la información del promedio de un estudienta',promedioest)
			 .argv
			 
module.exports={
	argv
}