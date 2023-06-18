/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   var respuesta;
   
   if (x===y) {
      respuesta=true;
   } else {
      respuesta=false;
   }
   return respuesta;
}

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   var respuesta;   
   if(str1.length===str2.length){
      respuesta=true;
   }else{
      respuesta=false;
   }
   return respuesta;
}

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   var respuesta;
   if(num<90){
      respuesta=true;
   }else{
      respuesta=false;
   }
   return respuesta;
}

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   var respuesta;
   if(num>50){
      respuesta=true;
   }else{
      respuesta=false;
   }
   return respuesta;
}

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   var respuesta;
   if(num%2==0){
      respuesta=true;
   }else{
      respuesta=false;
   }
   return respuesta;
}

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   var respuesta;
   if(num%2==1){
      respuesta=true;
   }else{
      respuesta=false;
   }
   return respuesta;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
