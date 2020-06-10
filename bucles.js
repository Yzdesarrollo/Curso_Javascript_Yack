document.getElementById('titulo').innerHTML = 'Bucles';

// Ciclo for
document.write('<strong>for</strong>'.toUpperCase(), '<br>');
for(let i = 0; i < 10; i++)
{
    document.write(`El ciclo o bucle for itera sobre la ${i} hasta que sea menor a 10 <br>`);
}
document.write('<br>');

// Ciclo While
document.write('<strong>while</strong>'.toUpperCase(), '<br>');
let x = 0;
while (x < 10) {
    document.write(`El ciclo o bucle while itera mientas que ${x} sea menor a 10 <br> `);
    x++;
}
document.write('<br>');

// Ciclo do while
document.write('<strong>do while</strong>'.toUpperCase(), '<br>');
let y = 0;
do {
    document.write(`El ciclo o bucle do while hace que itere mientras ${y} sea menor a 10 <br>`);
    y++;
} while (y < 10);
