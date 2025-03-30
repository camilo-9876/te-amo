// Obtener el elemento de audio y el contenedor de las letras
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Por cómo me miras Y me dices tanto cuando dices nada", time: 10 },
  { text: "Por cómo me tocas Con esa mirada que acaricia el alma", time: 15 },
  { text: "Y por cómo me abrazas Por eso te amo", time: 17 },
  
  { text: "Porque cuando le pedí al cielo", time: 20 },
  { text: "Que mandara un ángel, me llevó hasta ti", time: 26 },
  { text: "Y antes de pensar en alguien", time: 32 },
  { text: "Pienso en ti primero, incluso antes de mí", time: 35 },
  { text: "Porque atrapas mi atención", time: 37},
  { text: "Eres mi aventura, mi emoción y mi inspiración", time: 39 },
  
  { text: "Por eso yo te amo", time: 46 },
  { text: "Porque eres más de lo que había soñado", time: 49 },
  { text: "Porque amo tu ternura y me vuelve loco tu pasión", time: 55 },
  { text: "Porque nadie me hace sentir como tú en el amor", time: 60 },
  
  { text: "Por eso yo te amo", time: 66 },
  { text: "Soy tu dueño, pero también soy tu esclavo", time: 70 },
  { text: "Y si acaso alguna vez te has cuestionado la razón", time: 75 },
  { text: "Y por lo que sea nunca me lo has preguntado", time: 80 },
  { text: "Aquí te lo cantó amor", time: 86 },
  
  { text: "Por cómo me inspiras", time: 103 },
  { text: "Y me vuelves loco cuando nos amamos", time: 106 },
  { text: "Porque haces cada día extraordinario", time: 108 },
  { text: "Y cada noche es perfecta en tus labios", time: 110 },
  { text: "Tu piel es mi espacio", time: 113 },
  
  { text: "Porque cuando le pedí al cielo", time: 119},
  { text: "Que mandara un ángel, me llevó hasta ti", time: 122 },
  { text: "Y antes de pensar en alguien", time: 124 },
  { text: "Pienso en ti primero, incluso antes de mí", time: 127 },
  { text: "Porque atrapas mi atención", time: 130 },
  { text: "Eres mi aventura, mi emoción y mi inspiración", time: 132 },
  
  { text: "Por eso yo te amo", time: 138 },
  { text: "Porque eres más de lo que había soñado", time: 142 },
  { text: "Porque amo tu ternura y me vuelve loco tu pasión", time: 147 },
  { text: "Porque nadie me hace sentir como tú en el amor", time:  152},
  
  { text: "Por eso yo te amo", time: 158 },
  { text: "Soy tu dueño, pero también soy tu esclavo", time: 163 },
  { text: "Y si acaso alguna vez te has cuestionado la razón", time: 173 },
  { text: "Y por lo que sea nunca me lo has preguntado", time: 175 },
  { text: "Aquí te lo cantó amor", time: 178 },
  
  { text: "Porque son tus brazos el lugar perfecto a donde pertenezco", time: 183 },
  { text: "Porque si te tengo, tengo todo", time: 193 },
  { text: "En ti tengo todo, por eso te amo", time: 195 }
];

// Función para actualizar las letras a medida que avanza la canción
function updateLyrics() {
  var time = audio.currentTime; // Obtiene el tiempo actual del audio
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 2 // Busca la línea cuya duración es de 6 segundos
  );

  if (currentLine) {
    // Si encuentra una línea correspondiente, muestra el texto con opacidad creciente
    var fadeInDuration = 1; // Duración en segundos del efecto de aparición
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica la opacidad y actualiza el texto de las letras
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Si no hay ninguna línea activa, oculta las letras
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Actualiza las letras cada 100ms para mantener la sincronización
setInterval(updateLyrics, 100);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards"; // Animación de desaparición
  setTimeout(function () {
    titulo.style.display = "none"; // Oculta el título después de la animación
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función de ocultar el título después de 216 segundos
setTimeout(ocultarTitulo, 216000);