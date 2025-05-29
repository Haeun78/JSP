// ✅ 최종 통합 JS

// 주요 슬라이더 (메인 책 슬라이더)
const slider = document.getElementById('bookSlider');
const container = document.querySelector('.slider-container');
let currentIndex = 0;
const cardWidth = window.innerWidth / 3; // 한 카드 폭

function slideLeft() {
  if (currentIndex > 0) {
    currentIndex--;
    slider.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
  }
}

function slideRight() {
  const maxScroll = slider.scrollWidth - container.offsetWidth;
  const maxIndex = Math.ceil(maxScroll / cardWidth);
  if (currentIndex < maxIndex) {
    currentIndex++;
    const scrollX = Math.min(cardWidth * currentIndex, maxScroll);
    slider.style.transform = `translateX(-${scrollX}px)`;
  }
}




