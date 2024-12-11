/* Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.
Que la función use el parametro para simular una tirada de dado y retornar el resultado.
Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random() */
function rollDice(sides) {
    if (sides < 1) {
        console.log("El número no puede ser inferior a 1.")
    } else {
        const result = Math.floor(Math.random() * sides) + 1;//Math.floor es para que no tenga decimales.
        console.log(`Resultado del dado: ${result}`);
    }
}
rollDice(8)
rollDice(1000)