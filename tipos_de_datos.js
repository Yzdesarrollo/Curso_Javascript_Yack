document.getElementById('titulo').innerHTML = 'Tipos de datos';

var cadena = 'Colombia';
document.write('Esto es un  ', typeof cadena);

var numero = 123;
document.write('<br> Esto es un ', typeof numero);

var boleano = false;
document.write(' <br> Esto es un ', typeof boleano);

var vector = [nombre='santiago', apellido='Salgado'];
document.write('<br> Esto es un array ', typeof vector);

var objeto = {name:'Medellin', pais:'Colombia'};
document.write('<br> Esto es un objeto ', typeof objeto, '<br>');
document.write(objeto.name);