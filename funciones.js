document.getElementById('titulo').innerHTML = 'Funciones';
document.getElementById('sub').innerHTML = 'Sumar';

function suma() 
{  
   var a = parseInt(document.getElementById('num1').value);
   var b = parseInt(document.getElementById('num2').value);
   var sum =  a + b;
   document.getElementById('result').value = sum;
}

