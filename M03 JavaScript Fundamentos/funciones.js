//Función: sumaTres
var sumaTres = (x) => {
    return x + 3;
  }

  //PRIMERO
  function sumaTres(x){
    return x + 3;
  }

//SEGUNDO
var sumaTres = function (x) {
    return x + 3;
}

//TERCERO
var sumaTres = (x) => {
    return x + 3;
}

//Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
  console.log(nombre);
  return nombre;
}
//Precedencia de valores
var a = 1;
var b = 2;
var c = a = b;
console.log (c); 