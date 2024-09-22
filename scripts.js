document.addEventListener('DOMContentLoaded', function () {
    const reserveBtn = document.querySelector('.reserve-btn');

    // 予約ボタンのクリックアクション
    reserveBtn.addEventListener('click', function () {
        alert('予約ページに移動します');
    });

    // スクロール時のフェードインエフェクト
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
