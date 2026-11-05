const pegarBotoes = document.querySelectorAll('.btn-play');
const videoExibido = document.querySelector('.video-jornal');
const fecharVideo = document.querySelector('.X-fechar')

pegarBotoes[0].addEventListener('click', function () {
    videoExibido.style.display = 'block';
});

pegarBotoes[1].addEventListener('click', function () {
    videoExibido.style.display = 'block';
});

fecharVideo.addEventListener('click', function () {
    videoExibido.style.display = 'none';
});