const play = document.querySelector('.info__play');
const video = document.querySelector('.info__video video');

play.addEventListener('click', () => {
    video.play();
    video.setAttribute('controls', 'controls');
    play.setAttribute('hidden', true);
})