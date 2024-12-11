/* Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.
Retorna el array resultante. */
const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

  function swap(array, index1, index2 ) {
    if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
        console.log ("Los índices están fuera de los límites del array")
        return array
    }
    const newArray =[...array]

    let variabletemporal = newArray[index1]
    newArray[index1] = newArray[index2]
    newArray[index2] = variabletemporal

    return newArray


    }

console.log(swap(fantasticFour, 1, 2))

const tekkenCharacters = [
    "Jin Kazama",
    "Kazuya Mishima",
    "Heihachi Mishima",
    "Paul Phoenix",
    "Yoshimitsu",
    "Hwoarang",
    "Ling Xiaoyu",
    "Nina Williams",
    "King",
    "Bryan Fury",
    "Eddy Gordo",
    "Lei Wulong",
    "Steve Fox",
    "Asuka Kazama",
    "Marshall Law",
    "Anna Williams",
    "Kuma",
    "Panda",
    "Craig Marduk",
    "Armor King",
  ];

  console.log(swap(tekkenCharacters,4,10))

  