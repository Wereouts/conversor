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
