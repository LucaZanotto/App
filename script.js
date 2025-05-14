// Frasi del giorno
const frasi = [
  "Ogni giorno con te è un regalo.",
  "Sei il mio pensiero felice.",
  "Ti amo più del caffè (e sai quanto lo amo!).",
  "Con te, ogni giorno è primavera.",
  "Mi rendi la persona più fortunata del mondo.",
  "Il tuo sorriso è la mia felicità.",
  "Ogni battito del mio cuore dice il tuo nome."
];

// Galleria foto
const immagini = [
  "foto1.jpeg",
  "foto2.jpeg",
  "foto3.jpeg",
  "foto4.jpeg",
  "foto5.jpeg",
  "foto6.jpeg",
  "foto7.jpeg",
  "foto8.jpeg",
  "foto9.jpeg",
  "foto10.jpeg",
  "foto11.jpeg",
  "foto12.jpeg",
  "foto13.jpeg",
  "foto14.jpeg",
  "foto15.jpeg",
  "foto16.jpeg",
  "foto17.jpeg",
  "foto18.jpeg",
  "foto19.jpeg",
  "foto20.jpeg",
  "foto21.jpeg",
  "foto22.jpeg",
  "foto23.jpeg",
  "foto24.jpeg",
  "foto25.jpeg",
  "foto26.jpeg",
  "foto27.jpeg",
  "foto28.jpeg",
  "foto29.jpeg",
  "foto30.jpeg",
  "foto31.jpeg",
  "foto32.jpeg",
  "foto33.jpeg",
  "foto34.jpeg",
  "foto35.jpeg"
  // aggiungi altre immagini nella cartella e qui
];

// Quiz domande
const domande = [
  {
    testo: "Dove ci siamo incontrati la prima volta?",
    risposte: { a: "Cairoli", b: "Cadorna", c: "Kuala Lumpur" },
    corretta: "a"
  },
  {
    testo: "Cosa ti dico sempre al mattino?",
    risposte: { a: "Buongiornissimo kaffè???", b: "Svegliaaaa!", c: "Buongiorno patata ❤️" },
    corretta: "c"
  }
];

let indiceDomanda = 0;

// Mostra sezione scelta
function mostraSezione(id) {
  document.querySelectorAll('.sezione').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';

  if (id === 'quiz') caricaDomanda();
  if (id === 'contatore') aggiornaContatore();
  if (id === 'frase') mostraFraseDelGiorno();
  if (id === 'foto') prossimaFoto();
}

// Quiz
function caricaDomanda() {
  const domanda = domande[indiceDomanda];
  document.getElementById('domandaQuiz').innerText = domanda.testo;
  const container = document.getElementById('bottoniRisposte');
  container.innerHTML = '';

  for (let chiave in domanda.risposte) {
    const btn = document.createElement('button');
    btn.innerText = domanda.risposte[chiave];
    btn.onclick = () => controllaRisposta(chiave);
    container.appendChild(btn);
  }

  document.getElementById('risultatoQuiz').innerText = '';
}

function controllaRisposta(risposta) {
  const corretta = domande[indiceDomanda].corretta;
  const risultato = document.getElementById('risultatoQuiz');

  if (risposta === corretta) {
    risultato.innerText = "Esatto! 🥰";
    risultato.style.color = "green";
  } else {
    risultato.innerText = "Nuuu! Riprova 💔";
    risultato.style.color = "red";
  }
}

function prossimaDomanda() {
  indiceDomanda = (indiceDomanda + 1) % domande.length;
  caricaDomanda();
}

// Contatore tempo
const dataInizio = new Date("2024-06-22");

function aggiornaContatore() {
  setInterval(() => {
    const ora = new Date();
    const diff = ora - dataInizio;

    const giorni = Math.floor(diff / (1000 * 60 * 60 * 24));
    const ore = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minuti = Math.floor((diff / (1000 * 60)) % 60);
    const secondi = Math.floor((diff / 1000) % 60);

    document.getElementById('contatoreTesto').innerText =
      `Siamo insieme da ${giorni} giorni, ${ore} ore, ${minuti} minuti e ${secondi} secondi 💖`;
  }, 1000);
}

// Frase del giorno
function mostraFraseDelGiorno() {
  const oggi = new Date();
  const giornoDellAnno = Math.floor((oggi - new Date(oggi.getFullYear(), 0, 0)) / 86400000);
  const frase = frasi[giornoDellAnno % frasi.length];
  document.getElementById('fraseDelGiorno').innerText = frase;
}

// Foto
function prossimaFoto() {
  const indice = Math.floor(Math.random() * immagini.length);
  document.getElementById('immagineCasuale').src = immagini[indice];
}

// Musica
function avviaMusica() {
  const musica = document.getElementById('musica');
  musica.play();
  document.getElementById('startMusic').style.display = 'none';
}

// Avvia musica al primo click
document.addEventListener('click', () => {
  const musica = document.getElementById('musica');
  if (musica.paused) {
    musica.play().catch(e => {
      console.log("Autoplay bloccato:", e);
    });
  }
}, { once: true }); // solo al primo click