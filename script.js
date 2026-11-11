// Seleção dos elementos do DOM
const pegarBotoes = document.querySelectorAll('.btn-play');
const videoModal = document.querySelector('.video-modal-overlay');
const fecharVideo = document.querySelector('.X-fechar');
const elementoVideo = document.querySelector('.video-player');

// ADICIONADO: Adiciona evento de clique a todos os botões "ASSISTIR AGORA"
pegarBotoes.forEach(botao => {
    botao.addEventListener('click', function () {
        videoModal.classList.add('ativo'); 
        if (elementoVideo) {
            elementoVideo.play(); 
        }
    });
});

// ADICIONADO: Função para fechar a modal e pausar o vídeo
function fecharModalVideo() {
    videoModal.classList.remove('ativo');
    if (elementoVideo) {
        elementoVideo.pause(); 
        elementoVideo.currentTime = 0; 
    }
}

fecharVideo.addEventListener('click', fecharModalVideo);

// ADICIONADO: Permite fechar a modal clicando na área embaçada fora do vídeo
videoModal.addEventListener('click', function (event) {
    if (event.target === videoModal) {
        fecharModalVideo();
    }
});