/* Dado el siguiente código usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.
Es decir, la media de volumen de todos los volumenes juntos. */
const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Santiago",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Laura",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];
//para  hacer una media necesitamos dos variables, el total de la suma de volúmenes y la cantidad de datos
  let totalVolume = 0
  let count = 0
//usamos el for of para iterar entre los users, y el for in para acceder a los volumenes de cada user
  for (const user of users) {
    for (const sound in user.favoritesSounds) {
        totalVolume += user.favoritesSounds[sound].volume //este [sound] es porque dentro de cada user hay varios sounds
        count ++
    }     
  }
  const averageVolume = totalVolume/count
  console.log(`La media del volumen es ${averageVolume}`)