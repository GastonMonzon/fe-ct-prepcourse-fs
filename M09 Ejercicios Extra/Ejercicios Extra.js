/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arrayPadre = Object.entries(objeto);
   return arrayPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h: 1, j: 4, s: 5 }
   // Tu código:
   string = string.toLowerCase();
   let objeto = {};
   for (char of string) {
      /*Recorre cada carácter de la cadena con un for sumando 1 para cada uno. 
      El operador ?? evalúa si la propiedad está definida. Si lo está devuelve su valor. 
      Sino devuelve 0 y al sumar 1 se define como 1. */
      objeto[char] = (objeto[char] ?? 0) + 1
   }
   let array = Object.entries(objeto);
   array.sort();
   return Object.fromEntries(array);
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let nuevoString = '';
   let minusculas = '', mayusculas = '';
   for (let i in string) {
      if (string.charAt(i).toLowerCase() === string.charAt(i)) {
         minusculas += string.charAt(i);
      } else {
         mayusculas += string.charAt(i);
      }
   }
   return mayusculas + minusculas;
}
function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let nuevoString = '';
   let arrayString = frase.split(" ");
   for (let i in arrayString) {
      nuevoString += ' ' + arrayString[i].split("").reverse().join("");
   }
   return nuevoString.substring(1);
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let n = numero.toString();
   if(n.split("").reverse().join("") === n){
      return 'Es capicua';
   } else {
      return 'No es capicua';
   }
}
function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let nuevoString = string.replace('a', '');
   nuevoString = nuevoString.replace('b', '');
   nuevoString = nuevoString.replace('c', '');
   return nuevoString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a, b) => a.length - b.length);

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let array3 = [];
   for (let i in array1) {
      for (let j in array2) {
         if (array1[i] === array2[j] && !array3.includes(array1[i])) {
            array3.push(array1[i]);
         }
      }
   }
   return array3;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
