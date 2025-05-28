
//경현 - 자바 스크립트
// 현재 보여주고 있는 슬라이드의 인덱스 (0부터 시작)
const slider = document.getElementById('bookSlider');
const container = document.querySelector('.slider-container');

let currentIndex = 0;
const cardWidth = window.innerWidth / 3; // 카드 width + gap

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
    const scrollX = Math.min(cardWidth * currentIndex, maxScroll); // 너무 넘지 않도록
    slider.style.transform = `translateX(-${scrollX}px)`;
  }
}

    //나눔 - 자바스크립트
    function showTab(tab) {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.getElementById('btn-' + tab).classList.add('active');
      document.getElementById('bestseller-tabs').style.display = (tab === 'best') ? 'flex' : 'none';
      document.getElementById('category-tabs').style.display = (tab === 'new') ? 'block' : 'none';
      document.querySelectorAll('.book-grid').forEach(grid => grid.classList.remove('active'));

      if (tab === 'new') {
        document.querySelectorAll('#category-tabs .sub-tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('#category-tabs .sub-tab-btn:nth-child(1)').classList.add('active');
        document.getElementById('cat-cat0').classList.add('active');
      } else {
        document.querySelectorAll('#bestseller-tabs .sub-tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('#bestseller-tabs .sub-tab-btn:nth-child(1)').classList.add('active');
        document.getElementById('cat-best-week').classList.add('active');
      }
    }

    function showCategory(event, categoryId) {
      document.querySelectorAll('.sub-tab-btn').forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
      document.querySelectorAll('.book-grid').forEach(grid => grid.classList.remove('active'));
      document.getElementById('cat-' + categoryId).classList.add('active');
    }

    function scrollCategory(direction) {
      const container = document.querySelector('.scroll-container');
      container.scrollLeft += direction * 200;
    }

    window.onload = function () {
      showTab('new');
    }