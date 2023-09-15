/****
 * 1. Modifique la función userIdGenerator. Declare un nombre de función userIdGenera-
tedByUser. No toma ningún parámetro pero toma dos entradas usando prompt().
Una de las entradas es la cantidad de caracteres y la segunda entrada es la canti-
dad de ID que se supone que se generarán.
 */


// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// funcion que genra un identificador para un usuario de una cantidad de caracteres dada (pasada por parametro)
function userIdGenerator(cantCharacters) {
  const characters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789";
  let userId = "";
  for(let nroChar = 1; nroChar <= cantCharacters; nroChar++){
    // Queremos generar valores aleatorios entre 0 y 63
    // Math.random() genera valores aleatorios entre 0 y 1 (excluido)
    // Pero si a esos valores los multiplicamos por la cantidad de caracteres (63)
    // Math.floor redondea al entero inferior
    const indexRandom = Math.floor(Math.random() * characters.length) // getRandomInt(characters.length)
    // console.log("indice ", indexRandom);
    // console.log("Caracter encontrado ", characters[indexRandom]);
    userId = userId + characters[indexRandom];
  }
  // console.log("identificador generado ", userId);
  return userId;
}

// document.write(userIdGenerator(10));

// Genera tantos id como los solicitan con en idAmount con la longitud de idLength
function userIdGeneratedByUser() {

  let idLength = Number(prompt("Ingrese cuantos caracteres desea que posean los id's."));
  let idAmount = Number(prompt("Ingrese cuantos id's desea generar."));

  const contenedor = document.getElementById("caja");
  for(let iter = 1; iter <= idAmount; iter++){
    contenedor.innerHTML += `<p> ${userIdGenerator(idLength)} </p>`;
  }
}

userIdGeneratedByUser();