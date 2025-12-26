function converteImagem() {
  const arquivoEscolhido = document.querySelector(".archive-to-encode");
  const textoArea = document.getElementById("areaDoTexto");

  if (!arquivoEscolhido.files || !arquivoEscolhido.files[0]) {
    alert("Por favor, selecione um arquivo de imagem.");
    return;
  }

  const file = arquivoEscolhido.files[0];

  if (
    file.type !== "image/jpeg" &&
    file.type !== "image/jpg" &&
    file.type !== "image/png"
  ) {
    alert("Por favor, selecione um arquivo de imagem válido.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function (event) {
    const base64String = event.target.result;
    textoArea.value = base64String;
  };

  reader.readAsDataURL(file);
}

function converteVideo() {
  const arquivoEscolhido = document.querySelector(".archive-to-encode");
  const textoArea = document.getElementById("areaDoTexto");

  if (!arquivoEscolhido.files || !arquivoEscolhido.files[0]) {
    alert("Selecione um arquivo válido");
    return;
  }

  const file = arquivoEscolhido.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    // O result aqui já vem no formato: "data:video/mp4;base64,AAAA..."
    const base64Completo = reader.result;
    
    // Se você quiser APENAS o código Base64 (sem o prefixo de tipo)
    const base64Limpo = base64Completo.split(",")[1];
    
    textoArea.value = base64Limpo;
    console.log("Conversão concluída!");
  };

  reader.onerror = () => alert("Erro ao ler o arquivo");

  // Este método é a chave: ele faz o trabalho pesado de forma nativa
  reader.readAsDataURL(file);


  
}

function converteTexto() {
  const textoAreaPrompt = document.getElementById("areadoTextoPrompt");
  const textoAreaResposta = document.getElementById("areaDoTextoResposta");

  if (textoAreaPrompt.value.trim() === "") {
    alert("Por favor, digite algo");
    return;
  }

  textoAreaResposta.value = window.btoa(textoAreaPrompt.value)
  textoAreaPrompt.value = ""
}


