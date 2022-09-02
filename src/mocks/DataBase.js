const productos = [
  {
    id: "01",
    titulo: "LA CANCION DE AQUILES",
    autor: "Miller Madeline",
    detalle:
      "Grecia en la era de los héroes. Patroclo, un príncipe joven y torpe, ha sido exiliado al reino de Ftía, donde vive a la sombra del rey Peleo y su hijo divino, Aquiles. Aquiles, el mejor de los griegos, es todo lo que no es Patroclo: fuerte, apuesto, hijo de una diosa. ",
    precio: 3894,
    img: "https://i.ibb.co/0VMk3v1/aquiles-img.jpg",
    imgAlt: "https://i.ibb.co/XJ4z2FY/aquiles-img.jpg",
    genero: "Narrativa",
  },
  {
    id: "02",
    titulo: "PADRE RICO , PADRE POBRE",
    autor: "Kiyosaki Robert T.",
    detalle:
      "El estudio del libro es parte de la filosofía de Rich Dad: leer, discutir, estudiar... y discutir de nuevo. Esta edición aniversario incluye nueve sesiones de estudio para usar como guías conforme lees, relees, discutres y estudias este libro con tus amigos y familiares.",
    precio: 2699,
    img: "https://i.ibb.co/JnMdgqp/padre-img.jpg",
    imgAlt: "https://i.ibb.co/s3wfXyX/padre-img.jpg",
    genero: "Economia",
  },
  {
    id: "03",
    titulo: "ANIQUILACION",
    autor: "Houellebecq Michel",
    detalle:
      "Una novela total: thriller con ?ecos esotéricos, obra de crítica política, descarnado retrato familiar y narración existencial sobre el dolor y el amor. Año 2027. Francia se prepara para unas elecciones presidenciales que es muy posible que gane una estrella de la televisión.",
    precio: 3950,
    img: "https://i.ibb.co/XZXKj2v/aniquilacion-img.jpg",
    imgAlt: "https://i.ibb.co/L1khxQx/aniquilacion-img.jpg",
    genero: "Narrativa",
  },
  {
    id: "04",
    titulo: "FUEGO Y SANGRE",
    autor: " Martin George R.R.",
    detalle:
      "Siglos antes de que tuvieran lugar los acontecimientos que se relatan en «Canción de hielo y fuego», la casa Targaryen, la única dinastía de señores dragón que sobrevivió a la Maldición de Valyria, se asentó en la isla de Rocadragón.",
    precio: 7349,
    img: "https://i.ibb.co/FBZKsCM/fuegosangre-img.jpg",
    imgAlt: "https://i.ibb.co/QQm17wS/fuegosangre-img.jpg",
    genero: "Fantasia",
  },
  {
    id: "05",
    titulo: "EL PSICOANALISTA",
    autor: "Katzenbach John",
    detalle:
      "Felíz aniversario, doctor. Bienvenido al primer día de su muerte.- Así comienza el anónimo que recibe el psicoanalista Frederick Starks, y que le obliga a emplear toda su astucia y rapidez para, en quince días, averiguar quién es el autor de esa amenazadora misiva que promete hacerle la vida imposible.",
    precio: 5149,
    img: "https://i.ibb.co/4F3DJMR/psico-img.jpg",
    imgAlt: "https://i.ibb.co/b3CFnvd/psico-img.jpg",
    genero: "narrativa/policial",
  },
  {
    id: "06",
    titulo: "STRANGER THINGS",
    autor: "Gilbert Matthew J",
    detalle:
      "Prepárate para visitar los rincones más aterradores y oscuros de Hawkins. Una noche, Dustin, Lucas, Max y sus amigos quieren alquilar una película. Pero cuando un apagón cambia sus planes, comienzan a compartir entre ellos los rumores y las historias aterradoras que acechan Hawkins.",
    precio: 2390,
    img: "https://i.ibb.co/HxcJLDv/strangerth-img.jpg",
    imgAlt: "https://i.ibb.co/zJPjW5m/strangerth-img.jpg",
    genero: "Narrativa",
  },
];

export const data = new Promise((resolve, reject) => {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      resolve(productos);
    } else {
      reject("salio mal");
    }
  }, 2000);
});

// img tamaño normal
// https://i.ibb.co/L1khxQx/aniquilacion-img.jpg
// https://i.ibb.co/XJ4z2FY/aquiles-img.jpg
// https://i.ibb.co/QQm17wS/fuegosangre-img.jpg
// https://i.ibb.co/s3wfXyX/padre-img.jpg
// https://i.ibb.co/b3CFnvd/psico-img.jpg
// https://i.ibb.co/zJPjW5m/strangerth-img.jpg

// img tamaño small
// https://i.ibb.co/XZXKj2v/aniquilacion-img.jpg
// https://i.ibb.co/0VMk3v1/aquiles-img.jpg
// https://i.ibb.co/FBZKsCM/fuegosangre-img.jpg
// https://i.ibb.co/JnMdgqp/padre-img.jpg
// https://i.ibb.co/4F3DJMR/psico-img.jpg
// https://i.ibb.co/HxcJLDv/strangerth-img.jpg
