<<<<<<< HEAD
function converteHexa() {
  const textoAreaPrompt = document.getElementById("areadoTextoPrompt");
  const textoAreaResposta = document.getElementById("areaDoTextoResposta");

  const hex = textoAreaPrompt.value.trim();

  if (hex === "") {
    alert("Por favor, digite algo");
    return;
  }

  // Validação básica do hexadecimal
  if (!/^[0-9a-fA-F]+$/.test(hex) || hex.length % 2 !== 0) {
    alert("Hexadecimal inválido");
    return;
  }

  // Converte HEX para string binária
  let binaryString = "";
  for (let i = 0; i < hex.length; i += 2) {
    binaryString += String.fromCharCode(
      parseInt(hex.substr(i, 2), 16)
    );
  }

  // Converte para Base64
  textoAreaResposta.value = btoa(binaryString);

  textoAreaPrompt.value = "";
=======
/**
 * Verifica se o caractere com o código 65 ('A') está presente no textarea.
 * @param {string} elementId O ID do elemento textarea.
 * @returns {number|null} Retorna 65 se 'A' for encontrado, senão null.
 */
function verificarTextareaParaCode65(elementId) {
  // Obtém o elemento textarea pelo ID
  const textarea = document.getElementById(elementId);

  // Verifica se o elemento existe
  if (!textarea) {
    console.error("Elemento textarea não encontrado com o ID fornecido:", elementId);
    return null; // Retorna null se o elemento não for encontrado
  }

  // Obtém o valor (conteúdo) do textarea
  const valor = textarea.value;

  // O código 65 representa a letra maiúscula 'A' em ASCII/Unicode.
  const code65 = 65;
  const caractereA = String.fromCharCode(code65); // 'A'

  // Verifica se o caractere 'A' está presente no valor
  if (valor.includes(caractereA)) {
    console.log(`Caractere '${caractereA}' (código 65) encontrado!`);
    return code65; // Retorna 65 se encontrado
  } else {
    console.log(`Caractere '${caractereA}' (código 65) não encontrado.`);
    return null; // Retorna null se não encontrado
  }
}

// --- Exemplo de Uso ---

// Suponha que você tenha um textarea no seu HTML com id="meuTextarea"
// <textarea id="meuTextarea"></textarea>
// <button onclick="executarVerificacao()">Verificar</button>

function executarVerificacao() {
  const resultado = verificarTextareaParaCode65('meuTextarea');
  alert("O resultado da verificação é: " + resultado);
>>>>>>> fc11c2d64dd53dcbf1708abf1e4e2b0f85d97bbc
}
