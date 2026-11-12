// ==========================================
// CONTROLE DO VÍDEO
// ==========================================
const pegarBotoes = document.querySelectorAll('.btn-play');
const videoModal = document.querySelector('.video-modal-overlay');
const fecharVideo = document.querySelector('.X-fechar');
const elementoVideo = document.querySelector('.video-player');

pegarBotoes.forEach(botao => {
    botao.addEventListener('click', function () {
        videoModal.classList.add('ativo'); 
        if (elementoVideo) {
            elementoVideo.play(); 
        }
    });
});

function fecharModalVideo() {
    videoModal.classList.remove('ativo');
    if (elementoVideo) {
        elementoVideo.pause(); 
        elementoVideo.currentTime = 0; 
    }
}

if (fecharVideo) {
    fecharVideo.addEventListener('click', fecharModalVideo);
}

if (videoModal) {
    videoModal.addEventListener('click', function (event) {
        if (event.target === videoModal) {
            fecharModalVideo();
        }
    });
}


// ==========================================
// ADICIONADO: CONTROLE DAS MODAIS
// ==========================================
const modalLogin = document.querySelector('.modal-login');
const modalCadastro = document.querySelector('.modal-cadastro');

const btnHeaderLogin = document.querySelector('.btn-login');
const btnHeaderCadastro = document.querySelector('.btn-cadastro');

const btnFecharLogin = document.querySelector('.fechar-login');
const btnFecharCadastro = document.querySelector('.fechar-cadastro');

// Abrir Modais
if (btnHeaderLogin) {
    btnHeaderLogin.addEventListener('click', function () {
        modalLogin.classList.add('ativo');
    });
}

if (btnHeaderCadastro) {
    btnHeaderCadastro.addEventListener('click', function () {
        modalCadastro.classList.add('ativo');
    });
}

// Fechar Modais
if (btnFecharLogin) {
    btnFecharLogin.addEventListener('click', function () {
        modalLogin.classList.remove('ativo');
    });
}

if (btnFecharCadastro) {
    btnFecharCadastro.addEventListener('click', function () {
        modalCadastro.classList.remove('ativo');
    });
}

// Fechar ao clicar no fundo escuro
window.addEventListener('click', function (e) {
    if (e.target === modalLogin) {
        modalLogin.classList.remove('ativo');
    }
    if (e.target === modalCadastro) {
        modalCadastro.classList.remove('ativo');
    }
});


// ==========================================
// CORRIGIDO: VALIDAÇÃO DO LOGIN E CADASTRO
// ==========================================

// 1. FORMULÁRIO DE LOGIN
const formLogin = document.getElementById('form-login');
if (formLogin) {
    formLogin.addEventListener('submit', function (e) {
        e.preventDefault(); 

        // Exibe mensagem no console
        console.log("Login concluido com sucesso!");

        modalLogin.classList.remove('ativo');
        formLogin.reset();
    });
}

// 2. FORMULÁRIO DE CADASTRO (Leitura direta e comparação)
const formCadastro = document.getElementById('form-cadastro');

if (formCadastro) {
    formCadastro.addEventListener('submit', function (e) {
        e.preventDefault(); // Impede recarregar a página

        // Capta os inputs diretamente dentro da função no momento do envio
        const campoSenha = document.getElementById('cad-senha');
        const campoConfirma = document.getElementById('cad-confirma-senha');

        const valSenha = campoSenha ? campoSenha.value : "";
        const valConfirma = campoConfirma ? campoConfirma.value : "";

        // ADICIONADO: Comparação direta dos valores dos campos
        if (valSenha !== valConfirma) {
            console.log("as senhas estao diferentes!");
        } else {
            console.log("Login concluido com sucesso!");
            modalCadastro.classList.remove('ativo');
            formCadastro.reset();
        }
    });
}