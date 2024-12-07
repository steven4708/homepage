const videoItems = document.querySelectorAll('.video-list.item');
const videoElement = document.getElementById('cityuVideo');

videoItems.forEach(item => {
    item.addEventListener('click', function () {
        const lang = this.dataset.lang;
        
        switch (lang) {
            case 'yueyu':
                alert('即将播放粤语版视频');
                break;
            case 'guoyu':
                alert('即将播放国语版视频');
                break;
            case 'yingyu':
                alert('即将播放英语版视频');
                break;
            default:
                break;
        }
    });
});