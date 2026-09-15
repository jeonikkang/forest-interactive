const video = document.getElementById('motion');

window.addEventListener('click', function () {

    video.currentTime = 0;
    video.play();

});