document.getElementById('titulo').innerHTML = 'Strings y sus Metodos'
let fruta = 'Manzana';
//---------Length--------------------------//
document.write('<strong>length</strong> es un metodo que nos permite contar cuantos carateres tiene una palabra ej: manzana tiene ', fruta.length, ' letras <br>' );
//---------toUpperCase--------------------//
document.write('<strong>toUpperCase</strong> nos sirve para convertir una palabra en mayusculas ej: ', fruta.toUpperCase(),'<br>');
//---------toLowerCase-------------------//
document.write('<strong>toLowerCase</strong> nos sirve para convertir una palabra en minusculas ej: ', fruta.toLowerCase(), '<br>');
//---------indexOf----------------------//
document.write('<strong>indexOf </strong> indica la posicion de la letra (inicia en cero) que esta en los parametros del metodo, ej z esta en la posicion: ',fruta.indexOf('z'), '<br>');
//---------slice------------------------//
document.write('<strong>slice</strong> indica un recorido inicial y uno final dentro de la palabra comenzando en cero ej: ',fruta.slice(3,7), '<br>');
//---------replace----------------------//
document.write('<strong>replace</strong> remplaza la palabra inicial por la final ej: la palabra Manzana se reemplaza por : ',fruta.replace('Manzana', 'banano'), '.<br> ');
//---------split-----------------------//
var cadena = 'Esto-es-una-cadena-de-texto'
document.write('<strong>split</strong> hace separaciones en una palabra ej: ',cadena.split(''), '<br>');
//---------chartAt----------------------//
document.write('<strong>charAt</strong> indica la letra que esta con el indice de los parametros ej: 3 es la posicion que tiene ',fruta.charAt(3));