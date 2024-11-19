const { registrar, leer} = require('./operaciones');
const [operaciones, ...args] = process.argv.slice(2);

if (operaciones === 'registrar') {
    registrar (...args);
    
}else if (operaciones === 'leer') {
    leer ();
} else {
    console.log(' Operacion erronea, use "Registrar" o "Leer". ');

}