// Lista de palabras para elegir aleatoriamente
const palabras = ['Perro', 'Gato', 'Casa', 'Sol', 'Árbol', 'Montaña'];

// Función para cambiar el contenido de los divs
function cambiarContenido() {
  const numberDiv = document.querySelector('.number');
  const wordDiv = document.querySelector('.word');

  // Generar un número aleatorio entre 1 y 100 para el div con la clase 'number'
  const randomNumber = Math.floor(Math.random() * 9) + 1;

  // Elegir una palabra aleatoria de la lista para el div con la clase 'word'
  const randomWord = palabras[Math.floor(Math.random() * palabras.length)];

  // Asignar el número y la palabra aleatoria a los divs correspondientes
  numberDiv.textContent = randomNumber;
  wordDiv.textContent = randomWord;
}

// Evento click para el botón que llama a la función para cambiar el contenido
const changeContentButton = document.getElementById('changeContentButton');
changeContentButton.addEventListener('click', cambiarContenido);
