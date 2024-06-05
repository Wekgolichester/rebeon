document.addEventListener("DOMContentLoaded", function() {
    const mobileView = document.querySelector(".mobile-view");
    let isBackgroundVisible = true;

    mobileView.addEventListener("click", function() {
        if (isBackgroundVisible) {
            mobileView.style.backgroundImage = "none"; // 배경 이미지 숨기기
        } else {
            mobileView.style.backgroundImage = "url('css/images/background1/1.png')"; // 배경 이미지 다시 표시
        }
        isBackgroundVisible = !isBackgroundVisible; // 상태 토글
    });
});
