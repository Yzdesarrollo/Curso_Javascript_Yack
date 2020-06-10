document.getElementById('titulo').innerHTML = 'Arrays';
var frutas = [' manzana ', ' pera ', ' banano ', ' uva ', ' piña '];
document.write('Array original ', frutas, '<br>');
//-------------Length------------------------------//
document.write('length indica la cantidad de elementos que hay en el array este array tiene: ',frutas.length, ' elementos <br>');
//-------------Reverse-----------------------------//
document.write('reverse invierte los elementos del array ej: ',frutas.reverse(), '<br>');
//------------sort--------------------------------//
document.write('sort ordena los elementos de forma alfabetica ej: ',frutas.sort(), '<br>');
//------------push-----------------------------//
document.write('push agrega elementos a la array ej: ', frutas ,' el array ya tiene ', frutas.push('durazno'), ' elementos <br>');
//------------shift-------------------------//
document.write('shift elimina el primer elemento del array y lo retorna ej: elimina ',frutas.shift(), '<br>');
document.write(frutas, '<br>');
//------------pop--------------------------//
document.write('pop elimina el ultimo elemento del array y lo retorna ej: elimina ',frutas.pop(), '<br>');
document.write('En este momento quedan ',frutas.length, ' elementos <br>');
//-----------indexOf----------------------//
document.write('indexOf indica la posicion en esta elemento ej: ',frutas.indexOf('uva'), '<br>');
//-----------unshift----------------------//
document.write('unshift agrega el elemento al inicio ',frutas , ' agregamos ',frutas.unshift('naranja'), '<br>');
//-----------concat------------------------//
var legumbres = [' cebolla', ' tomate', ' lechuga', ' pimenton', ' cilantro'];
document.write(legumbres,'<br>');
document.write('concat une un array con otro y crea uno solo ej: ',frutas.concat(legumbres));