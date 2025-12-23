
function converteImagem () {

const arquivoEscolhido = document.querySelector('.text-to-encode');
const textoArea = document.getElementById('areaDoTexto');

    if (!arquivoEscolhido.files || !arquivoEscolhido.files[0]) {
        alert('Por favor, selecione um arquivo de imagem.');
        return;
    }

    const file = arquivoEscolhido.files[0];

    if (file.type !== 'image/jpeg' && file.type !== 'image/jpg') {
        alert('Por favor, selecione um arquivo JPEG válido.');
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
        const base64String = event.target.result;
        textoArea.value = base64String;
    };

    reader.readAsDataURL(file);

}


