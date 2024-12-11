// Función findArrayIndex
function findArrayIndex(array, text) {
  return array.indexOf(text); // Devuelve el índice del elemento
}

// Función removeItem
function removeItem(array, text) {
  const index = findArrayIndex(array, text); // Obtiene el índice del elemento
  if (index !== -1) { // Verifica si el índice es válido
    array.splice(index, 1); // Elimina el elemento
  } else {
    console.log(`El elemento "${text}" no se encuentra en el array.`);
  }
  return array; // Retorna el array modificado o sin cambios
}

// Ejemplos de uso
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

const bicicletasMiticas = [
  "Bianchi Celeste (Specialissima)",
  "Trek Madone",
  "Specialized Stumpjumper",
  "Cannondale SuperSix EVO",
  "Colnago C64",
  "Pinarello Dogma",
  "Scott Addict",
  "Giant TCR Advanced SL",
  "Merlin Titanium",
  "GT Zaskar",
  "Klein Attitude",
  "Santa Cruz V10",
  "Orbea Orca",
  "Yeti ARC",
  "Rocky Mountain Element",
  "De Rosa King",
  "Cervélo R5",
  "Mongoose BMX (California Series)",
  "Raleigh Chopper",
  "Peugeot PX-10"
];

console.log(removeItem(mainCharacters, "Han Solo")); // ["Luke", "Leia", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]
console.log(removeItem(bicicletasMiticas, "Santa Cruz V10")); // ["Bianchi Celeste (Specialissima)", ..., "Peugeot PX-10"]
console.log(removeItem(mainCharacters, "Yoda")); // "El elemento "Yoda" no se encuentra en el array."
console.log(removeItem(bicicletasMiticas, "Mondraker Dune")); // "El elemento "Mondraker Dune" no se encuentra en el array."