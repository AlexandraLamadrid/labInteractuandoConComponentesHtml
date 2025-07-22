let votos = {
  diseno: 0,
  js: 0,
  bd: 0,
};

let totalVotos = 0;

function votar(opcion) {
  votos[opcion]++;
  totalVotos++;

  document.getElementById("votos-diseno").textContent = votos.diseno;
  document.getElementById("votos-js").textContent = votos.js;
  document.getElementById("votos-bd").textContent = votos.bd;


  alert("¡Gracias por tu voto!");


  if (totalVotos % 5 === 0) {
    console.log(`Total de votos hasta ahora: ${totalVotos}`);
  }
}
