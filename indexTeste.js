function convertImage() {
    const fileInput = document.getElementById('imageInput');
    const outputArea = document.getElementById('output');
    const imagePreview = document.getElementById('imagePreview');

    const file = fileInput.files[0];

    // Validação básica para garantir que um arquivo foi selecionado e é uma imagem JPEG
    if (!file) {
        alert('Por favor, selecione um arquivo de imagem.');
        return;
    }

    if (file.type !== 'image/jpeg' && file.type !== 'image/jpg') {
        alert('Por favor, selecione um arquivo JPEG válido.');
        return;
    }

    const reader = new FileReader();

    // A função onload é chamada quando a leitura do arquivo é concluída
    reader.onload = function(event) {
        // event.target.result contém a Data URL (string Base64 completa)
        const base64String = event.target.result;
        
        // Exibe a string Base64 na área de texto
        outputArea.value = base64String;
        
        // Exibe uma prévia da imagem usando a string Base64
        imagePreview.src = base64String;
        imagePreview.style.display = 'block';

        console.log("Conversão concluída. String Base64 gerada.");
    };

    // A função onerror é chamada se ocorrer um erro na leitura do arquivo
    reader.onerror = function(error) {
        console.error("Erro ao ler o arquivo:", error);
        alert("Ocorreu um erro ao converter o arquivo.");
    };

    // Lê o conteúdo do arquivo como uma Data URL (que é Base64 codificado)
    reader.readAsDataURL(file);


    
}
