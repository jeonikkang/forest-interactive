const video = document.getElementById('motion');

video.addEventListener('pointerdown', async function () {

    try {
        video.currentTime = 0;
        await video.play();

        console.log('영상 재생 성공');

    } catch (error) {

        console.error('영상 재생 실패:', error);

    }

});
