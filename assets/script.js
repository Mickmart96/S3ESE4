const tabellone = document.getElementById('tabellone');
const tabelline = document.getElementById('tabelline');
const numeroTabellineInput = document.getElementById('numeroTabelline');
const numeriEstratti = new Set();

function estraiNumero() {
  if (numeriEstratti.size === 90) {
    alert('Hai estratto tutti i numeri!');
    return;
  }

  let numeroCasuale;
  do {
    numeroCasuale = Math.floor(Math.random() * 90) + 1;
  } while (numeriEstratti.has(numeroCasuale));

  numeriEstratti.add(numeroCasuale);

  const cellaTabellone = document.querySelector(`#tabellone div[data-numero="${numeroCasuale}"]`);
  cellaTabellone.classList.add('highlighted');

  for (let i = 0; i < numeroTabellineInput.value; i++) {
    const cellaTabellina = document.querySelector(`#tabelline${i} div[data-numero="${numeroCasuale}"]`);
    cellaTabellina.classList.add('highlighted');
  }
}

function generaTabelline() {
  const numeroTabelline = parseInt(numeroTabellineInput.value);

  // Resetta le tabelline
  tabelline.innerHTML = '';
  
  for (let i = 0; i < numeroTabelline; i++) {
    const nuovaTabellina = document.createElement('div');
    nuovaTabellina.id = `tabellina${i}`;
    nuovaTabellina.classList.add('board');

    for (let j = 1; j <= 24; j++) {
      const numeroCasuale = Math.floor(Math.random() * 90) + 1;
      const cella = document.createElement('div');
      cella.textContent = numeroCasuale;
      cella.setAttribute('data-numero', numeroCasuale);
      nuovaTabellina.appendChild(cella);
    }

    tabelline.appendChild(nuovaTabellina);
  }
}

// Inizializza il tabellone principale
function inizializzaTabellone() {
  for (let i = 1; i <= 90; i++) {
    const cella = document.createElement('div');
    cella.textContent = i;
    cella.setAttribute('data-numero', i);
    tabellone.appendChild(cella);
  }
}

inizializzaTabellone();
