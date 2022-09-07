const productos = [
  {
    id: "01",
    titulo: "LA CANCION DE AQUILES",
    categoria: "nuevos",
    autor: "Miller Madeline",
    detalle:
      "Grecia en la era de los héroes. Patroclo, un príncipe joven y torpe, ha sido exiliado al reino de Ftía, donde vive a la sombra del rey Peleo y su hijo divino, Aquiles. Aquiles, el mejor de los griegos, es todo lo que no es Patroclo: fuerte, apuesto, hijo de una diosa. ",
    precio: 3894,
    img: "https://i.ibb.co/0VMk3v1/aquiles-img.jpg",
    genero: "Narrativa",
    stock: 12,
  },
  {
    id: "02",
    titulo: "PADRE RICO , PADRE POBRE",
    categoria: "oferta",
    autor: "Kiyosaki Robert T.",
    detalle:
      "El estudio del libro es parte de la filosofía de Rich Dad: leer, discutir, estudiar... y discutir de nuevo. Esta edición aniversario incluye nueve sesiones de estudio para usar como guías conforme lees, relees, discutres y estudias este libro con tus amigos y familiares.",
    precio: 2699,
    img: "https://i.ibb.co/JnMdgqp/padre-img.jpg",
    genero: "Economia",
    stock: 8,
  },
  {
    id: "03",
    titulo: "ANIQUILACION",
    categoria: "oferta",
    autor: "Houellebecq Michel",
    detalle:
      "Una novela total: thriller con ?ecos esotéricos, obra de crítica política, descarnado retrato familiar y narración existencial sobre el dolor y el amor. Año 2027. Francia se prepara para unas elecciones presidenciales que es muy posible que gane una estrella de la televisión.",
    precio: 3950,
    img: "https://i.ibb.co/XZXKj2v/aniquilacion-img.jpg",
    genero: "Narrativa",
    stock: 15,
  },
  {
    id: "04",
    titulo: "FUEGO Y SANGRE",
    categoria: "vendidos",
    autor: " Martin George R.R.",
    detalle:
      "Siglos antes de que tuvieran lugar los acontecimientos que se relatan en «Canción de hielo y fuego», la casa Targaryen, la única dinastía de señores dragón que sobrevivió a la Maldición de Valyria, se asentó en la isla de Rocadragón.",
    precio: 7349,
    img: "https://i.ibb.co/FBZKsCM/fuegosangre-img.jpg",
    genero: "Fantasia",
    stock: 11,
  },
  {
    id: "05",
    titulo: "EL PSICOANALISTA",
    categoria: "vendidos",
    autor: "Katzenbach John",
    detalle:
      "Felíz aniversario, doctor. Bienvenido al primer día de su muerte.- Así comienza el anónimo que recibe el psicoanalista Frederick Starks, y que le obliga a emplear toda su astucia y rapidez para, en quince días, averiguar quién es el autor de esa amenazadora misiva que promete hacerle la vida imposible.",
    precio: 5149,
    img: "https://i.ibb.co/4F3DJMR/psico-img.jpg",
    genero: "narrativa/policial",
    stock: 14,
  },
  {
    id: "06",
    titulo: "STRANGER THINGS",
    categoria: "oferta",
    autor: "Gilbert Matthew J",
    detalle:
      "Prepárate para visitar los rincones más aterradores y oscuros de Hawkins. Una noche, Dustin, Lucas, Max y sus amigos quieren alquilar una película. Pero cuando un apagón cambia sus planes, comienzan a compartir entre ellos los rumores y las historias aterradoras que acechan Hawkins.",
    precio: 2390,
    img: "https://i.ibb.co/HxcJLDv/strangerth-img.jpg",
    genero: "Narrativa",
    stock: 16,
  },
  {
    id: "07",
    titulo: "EL PADRINO",
    categoria: "vendidos",
    autor: "Puzo Mario",
    detalle:
      "La publicación en 1969 de El Padrino convulsionó el mundo literario. Por primera vez, la Mafia protagonizaba una novela y era retratada desde adentro. Mario Puzo la presentaba no como una mera asociación de facinerosos, sino como una compleja sociedad con una cultura propia y una jerarquía aceptada incluso más allá de los círculos del crimen organizado.",
    precio: 4349,
    img: "https://i.ibb.co/cQCqH1b/elpadrino-img.jpg",
    genero: "policial",
    stock: 9,
  },
  {
    id: "08",
    titulo: "EL VIAJE DE LAIKA",
    categoria: "nuevos",
    autor: "Balderas Tania",
    detalle:
      "El viaje de Laika es un homenaje a la famosa perrita que fue lanzada al espacio como parte del programa espacial de la Unión Soviética en los años cincuenta. Se trata de un poemario diverso que refresca la leyenda de Laika a través de versos amigables, divertidos, emocionantes y nostálgicos dedicados a esa cosmonauta perruna, al científico Oleg Gazenco, al Sol, a la Luna y a los planetas de nuestro Sistema Solar.",
    precio: 1847,
    img: "https://i.ibb.co/X5vkWb8/viajede-Laika-img.jpg",
    genero: "policial",
    stock: 9,
  },
  {
    id: "09",
    titulo: "CREA TU SITIO WEB CON JOOMLA!",
    categoria: "nuevos",
    autor: "Cardador Cabello Antonio Luis",
    detalle:
      "Identificar los componentes de los cuales se compone Joomla!, así como su uso para la creación y mantenimiento de sitios web. Analizar los fundamentos tecnológicos de un determinado sitio web ya creado. Enumerar y definir las funciones que realizan cada uno de los componentes en Joomla! clasificando sus funciones y relacionándolo con el resto de componentes para lograr contenidos adecuados.",
    precio: 7020,
    img: "https://i.ibb.co/HzM3KQ9/creaweb-JOOMLA-img.jpg",
    genero: "informatica",
    stock: 16,
  },
  {
    id: "10",
    titulo: "ROMA SOY YO",
    categoria: "vendidos",
    autor: "Posteguillo Santiago",
    detalle:
      "Roma, año 77 a.C. El cruel senador Dolabela va a ser juzgado por corrupción, pero ha contratado a los mejores abogados, ha comprado al jurado y es conocido por usar la violencia contra todos los que se enfrentan a él. Nadie se atreve a ser el fiscal, hasta que de pronto, contra todo pronóstico, un joven patricio de tan solo veintitrés años acepta llevar la acusación, defender al pueblo de Roma y desafiar el poder de las élites. El nombre del desconocido abogado es Cayo Julio César. ",
    precio: 5549,
    img: "https://i.ibb.co/1sw51z1/romasoy-YO-img.jpg",
    genero: "historico",
    stock: 21,
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


