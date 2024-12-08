/* Dado el siguiente código usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías.
Ten en cuenta que las categorías no tienen que repetirse.
Es decir, const categorias = ["comedia", "aventura", "acción", "thriller", "animación"]
Para filtrar las categorías puedes ayudarte de la función .includes(). */
const movies = [
    {
      title: "Bracula: Condemor II",
      duration: 192,
      categories: ["comedia", "aventura"],
    },
    {
      title: "Spider-Man: No Way Home",
      duration: 122,
      categories: ["aventura", "acción"],
    },
    {
      title: "The Voices",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "Shrek",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
  ];
  const filmcategory = []
  //en este ejercicio hacemos dos for of, uno para recorrer el array de peliculas y otro para recorrer el array de categorías que hay dentro de cada película.
  for (const movie of movies) {
    for (const category of movie.categories) //al estar dentro de otro array tengo que poner movie.categories
        if (!filmcategory.includes(category)) { //si la categoria NO está incluida en el nuevo array la añadimos.
            filmcategory.push(category)
        }

  }
  console.log(filmcategory)