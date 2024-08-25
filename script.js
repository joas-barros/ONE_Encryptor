const textArea = document.querySelector('.text-area');
const mensagem = document.querySelector('.mensagem');

function criptografar(){
    document.getElementById('semMensagem').style.display = 'none';

    let chaveCripto = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];

    let stringEncriptada = document.getElementById('textoOriginal').value.toLowerCase();

    for (let i = 0; i < chaveCripto.length; i++) {
        if (stringEncriptada.includes(chaveCripto[i][0])) {
            stringEncriptada = stringEncriptada.replace(chaveCripto[i][0], chaveCripto[i][1]);
        }
    }

    document.getElementById('textoTradutor').style.display = "flex";

    mensagem.textContent = stringEncriptada;
    textArea.value = '';
}

function descriptografar(){
    document.getElementById('semMensagem').style.display = 'none';

    let chaveCripto = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];

    let stringDescriptada = document.getElementById('textoOriginal').value.toLowerCase();

    for (let i = 0; i < chaveCripto.length; i++) {
        if (stringDescriptada.includes(chaveCripto[i][1])) {
            stringDescriptada = stringDescriptada.replace(chaveCripto[i][1], chaveCripto[i][0]);
        }
    }

    document.getElementById('textoTradutor').style.display = "flex";

    mensagem.textContent = stringDescriptada;
    textArea.value = '';
}

function copiar(){
    let copiar = document.querySelector('.mensagem');
    const range = document.createRange();
    range.selectNodeContents(copiar);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Falha ao copiar: ', err);
    }
}