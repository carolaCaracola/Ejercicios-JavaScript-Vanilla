/*1. Declara 2 variables numéricas (con el valor que desees), indica cual es mayor de
los dos. Si son iguales indicalo también. Puedes ir cambiando los valores
para comprobar que funciona.*/

var num1= 7;
var num2= 3;
var comparacion;

//mayor que
comparacion = num1 > num2;
console.log(num1+" " + "Es mayor que " + num2 +":"  + comparacion);  /* devuelve true */

//menor que
comparacion = num1 < num2;
console.log(num1+" " + "Es menor que " + num2 +":"  + comparacion);  /* devuelve false */

//iguales
comparacion = num1 == num2;
console.log(num1+" " + "Es igual que " + num2 +":"  + comparacion ); /* devuelve false */

/*2. Declara un String que contenga tu nombre, después muestra un mensaje de
bienvenida por consola. Por ejemplo: si introduzco “Fernando”, me aparezca
“Bienvenido Fernando”. */

var miNombre= "Carola";
console.log("Bienvenida"+" " + miNombre)

/*3. Modifica la aplicación anterior, para que nos pida el nombre que queremos
introducir (recuerda usar prompt). */

var nombre = prompt("¿Cómo te llamas?");
alert("Bienvenidx" + " " + nombre); /* devuelve un alerta con el mensaje de Bienvenida*/

/*4. Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá
por teclado (recuerda pasar de String a double con parseDouble). Usa la constante pi.*/

var radio = prompt("¿Cúal es el radio de tu circúlo?");
const pi = "3.14";
var num = parseFloat(pi)
var area = num * (radio*radio);
alert("El area de tu circúlo es:" + " " + area + "cm") /*devuelve el calculo del area*/

/* 5.Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es,
también debemos indicarlo.*/

var miNum = prompt("Introduce un numero");
if ( miNum % 2 === 0){
    alert("¡Es divisible entre 2!");
}else{
    alert("No es divisible entre 2 :(");
}

/* 6. Lee un número por teclado que pida el precio de un producto (puede tener
decimales) y calcule el precio final con IVA. El IVA sera una constante que sera
del 21%*/

var precio = prompt("Introduce el precio del producto:");
var precioIntroducido = parseFloat(precio);
const impuesto = " 1.21";
var iva = parseFloat(impuesto);
var precioFinal = (precioIntroducido * iva);
alert("Precio con iva incluido es:" +" " + precioFinal + "€");

/* 7. Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while.*/

let numeros = 100;
var index = 0

while(numeros > 0){
    ++index;
console.log(index)
    numeros -=1;
}


/* 8. el mismo ejercicio anterior con un bucle for.*/
function usandoFor(){
    for(let i= 1; i  <= 100; i++){
    console.log(i);
    }
}

usandoFor();

/* 9. Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza
el bucle que desees.*/

function numDiv(){
for(let i= 1; i<=100; i++){
    if (i % 2 === 0){
    console.log( i + ":"+ " "+"Es divisible entre 2 \n" )
    }else if (i % 3 === 0 ){
   console.log(i + ":"+ " "+ "Es divisible entre 3 \n" )
    }else{
        console.log(i + ":"+ " " + " No Es divisible entre 2 ni 3 \n" )
    }
}
}
 
numDiv(); 

/* 10. Realiza una aplicación que nos pida un número de ventas a introducir, después
nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo
que no.*/

var newVenta;
var ventasIntroducidas = prompt("introduce un numero de ventas");
numVenta= parseInt(ventasIntroducidas);

var suma=0;

function sumaVentas(){
   
for (i=1 ;i <= numVenta; i++){
    var importe = prompt("introduce el importe de la venta");
    var numImporte = parseFloat(importe);
    suma += numImporte;
    
    if (i == numVenta){
        
 alert("la suma de las ventas es" +" "+ suma)
       
    }

   
}
}
sumaVentas();

/* 11 Crea una aplicación que nos pida un día de la semana y que nos diga si es un día
laboral o no. Usa un switch para ello.*/

var diasDeLaSemana = prompt("Introduce un dia de la semana");

switch(diasDeLaSemana.toLowerCase()){
    case "sabado":
    console.log ("No es laborable");
    break;

    case "domingo":
        console.log ("No es laborable");
        break;
    
    default:
        console.log ("Es laborable")
        break;
} 
/* 12. Escribe una aplicación con un String que contenga una contraseña cualquiera.
Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando
aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo
“Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale,
aunque le queden intentos).*/ 

var contraseña = "frigorifico";
var i = 0;
var acierto; 

for ( i=0 ;i<3 && !acierto; i++){
var password = prompt("Introduce una contraseña");
if (password == contraseña){
    alert ("Enhorabuena, acertaste");
    acierto=true;
}
}

/* 13.Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y
un signo aritmético (String), según este último se realizará la operación
correspondiente. Al final mostrara el resultado en un cuadro de dialogo.
Los signos aritméticos disponibles son:
+: suma los dos operandos.
-: resta los operandos.
*: multiplica los operandos.
/: divide los operandos, este debe dar un resultado con decimales (double)
^: 1o operando como base y 2o como exponente.
%: módulo, resto de la división entre operando1 y operando2..*/ 



function CalculadoraInversa(){
    var digito1 = prompt("introduce un numero entero");
    var digitoIntroducido = parseInt(digito1);

    var digito2 = prompt("introduce otro numero entero");
    var digitoIntroducido = parseInt(digito2);

    var signoAritmetico = prompt("introduce una operacion aritmetica");
    switch(signoAritmetico.toLowerCase()){
        case "suma":
        alert(digito1 + digito2);
        break;
    
        case "resta":
            alert(digito1 - digito2);
        break;

        case "multiplicacion":
                alert(digito1 * digito2);
        break;
    
        case "division":
            alert(digito1 / digito2);
        break;

        case "elevado":
                alert(digito1 ^ digito2);
        break;
    
        case "modulo":
            alert(digito1 % digito2 === 0);
         break;
        
        default:
            console.log ("No es una operacion")
            break;
    } 
}
        CalculadoraInversa()














    





   






