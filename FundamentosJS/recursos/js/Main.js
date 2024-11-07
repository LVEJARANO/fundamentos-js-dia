/*Metodo mas usado*/
//document.getElementById("demo").innerHTML = "Hello JavaScript";
//document.getElementById("demo").style.fontSize = "35px";

/* Salidas de Datos */
//window.alert(5+2);
console.log(6+2);

/* Declaracion */
let a,b,c;
a = 5;
b = 6;
c = a + b;
//window.alert(c);
//document.getElementById("demo").innerHTML = c;

/* Variables */
let p,q,r;
p = 5;
q = 7;
const m = 8;
r = p + q + m;
document.getElementById("demo1").innerHTML = r;

/* Tipos de Datos */
let num = 24;// Numero entero
let name = "Luis Vejarano"; // Cadena
let km = 14.5;// Numero decimal
let isColombiano = true; // Booleano
let obj = {firstname:"Ana",lastname:"Perez"};// Objeto

let y = 17 + "POO";
let unir = "17" + "POO";
window.alert(y);
window.alert(unir);

/* Definicion de funcion*/
function myFunction(){
    document.getElementById("demo2").innerHTML = "New paragraph";
}