const frasi = [
  "Ogni giorno con te è un regalo.",
  "Sei il mio pensiero felice.",
  "Ti amo più del caffè (e sai quanto lo amo!).",
  "Con te, ogni giorno è primavera.",
  "Mi rendi la persona più fortunata del mondo.",
  "Il tuo sorriso è la mia felicità.",
  "Ogni battito del mio cuore dice il tuo nome."
];

const oggi = new Date();
const giornoDellAnno = Math.floor((oggi - new Date(oggi.getFullYear(), 0, 0)) / 86400000);
const fraseDelGiorno = frasi[giornoDellAnno % frasi.length];

document.getElementById('frase').innerText = fraseDelGiorno;

// Calcolo giorni insieme (modifica la data!)
const dataInizio = new Date("2024-06-22");  // <-- cambia con la vostra data!
const oggiData = new Date();
const diffTime = oggiData - dataInizio;
const diffGiorni = Math.floor(diffTime / (1000 * 60 * 60 * 24));

document.getElementById('contatore').innerText = `Siamo insieme da ${diffGiorni} giorni 💖`;

function controllaRisposta(risposta) {
  const corretto = 'a'; // <-- risposta corretta
  const risultato = document.getElementById('risultatoQuiz');

  if (risposta === corretto) {
    risultato.innerText = "Esatto! 🥰";
    risultato.style.color = "green";
  } else {
    risultato.innerText = "Nuuu! Riprova 💔";
    risultato.style.color = "red";
  }
}

function avviaMusica() {
  const musica = document.getElementById('musica');
  musica.play();
  
  // Nascondi il pulsante una volta che la musica è partita
  document.getElementById('startMusic').style.display = 'none';
}
