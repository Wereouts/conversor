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
}
