async function copiarTexto() {
  // Pega o elemento
  const content = document.getElementById('areaDaResposta');

  try {
    // Usa a API moderna de área de transferência
    await navigator.clipboard.writeText(content.value);
  } catch (err) {
    console.error('Falha ao copiar: ', err);
  }
}



function decodificaImagem() {
    const code = document.getElementById('areaDoCodigo').value.trim();
    if (!code) return;

    const img = document.getElementById('imagePng');

    // Se já for um base64 completo
    if (code.startsWith('data:image')) {
        img.src = code;
        return;
    }

    // Caso seja só o base64 "puro"
    const isJpeg = code.startsWith('/9j/');
    const mime = isJpeg ? 'image/jpeg' : 'image/png';

    img.src = `data:${mime};base64,${code}`;
}


function baixarImagem() {
    const img = document.getElementById('imagePng');

    const link = document.createElement('a');
    link.href = img.src;
    link.download = img.src.includes('image/jpeg')
        ? 'imagem.jpeg'
        : 'imagem.png'

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}


function converteTexto() {
    const txt = document.getElementById('areaDoCodigo');
    const resposta = document.getElementById('areaDaResposta');

    let decodeString = atob(txt.value.trim());

    resposta.value = decodeString

}


function converteHex() {
    const textoAreaPrompt = document.getElementById("areaDoCodigo");
    const textoAreaResposta = document.getElementById("areaDaResposta");
    // pega o valor em Code64
    const txt = textoAreaPrompt.value.trim();


    let decodeString = atob(txt);

    var hex = '';
    for (var i = 0; i < decodeString.length; i++) {
        // Obter o valor Unicode do caractere atual
        var charCode = decodeString.charCodeAt(i);

        // Converter o valor numérico para hexadecimal e garantir 2 dígitos com padStart
        var hexValue = charCode.toString(16).padStart(2, '0');

        hex += hexValue;
    }

    textoAreaResposta.value = hex;
}

function mudarformatoHex() {
    const textoAreaResposta = document.getElementById("areaDaResposta");

    const format = textoAreaResposta.value
        .replace(/(..)/g, '$1 ')
        .trim();

    textoAreaResposta.value = format;

}