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

// 새로 나온 책 카테고리 슬라이더
document.addEventListener("DOMContentLoaded", () => {
  initRenewBookSlider();
});

function switchTerm(term) {
  document.querySelectorAll(".renew-term-tabs button").forEach(btn => {
    btn.classList.toggle("active", btn.textContent.includes(term === 'weekly' ? '주간' : '월간'));
  });
}

function filterCategoryRenew(category) {
  document.querySelectorAll("#categorySlider button").forEach(btn => {
    btn.classList.toggle("active", btn.textContent === category);
  });
}

function slideCategory(dir) {
  const viewport = document.querySelector(".category-slider-viewport");
  const amount = 200 * dir;
  viewport.scrollBy({ left: amount, behavior: "smooth" });
}

let renewCurrentPage = 0;
const renewPerPage = 5;

function slideBooksRenew(direction) {
  const bookList = document.getElementById('renewBookList');
  const cards = bookList.querySelectorAll('.book-card');
  const cardWidth = cards[0].offsetWidth + 16; // margin 포함
  const visibleWidth = cardWidth * renewPerPage;
  const maxPage = Math.ceil(cards.length / renewPerPage) - 1;

  renewCurrentPage += direction;
  if (renewCurrentPage < 0) renewCurrentPage = 0;
  if (renewCurrentPage > maxPage) renewCurrentPage = maxPage;

  const moveX = renewCurrentPage * visibleWidth;
  bookList.style.transform = `translateX(-${moveX}px)`;

  document.querySelectorAll('#renewPagination .dot').forEach((dot, idx) => {
    dot.classList.toggle('active', idx === renewCurrentPage);
  });
}

function initRenewBookSlider() {
  const bookList = document.getElementById('renewBookList');
  const cards = bookList.querySelectorAll('.book-card');
  const pagination = document.getElementById('renewPagination');

  const totalPages = Math.ceil(cards.length / renewPerPage);
  pagination.innerHTML = '';
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    pagination.appendChild(dot);
  }
}
