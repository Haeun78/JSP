// === 수량 조절 및 금액 반영 ===
const unitPrice = 13500; // 도서 1권 가격

function updateTotalPrice() {
  const qty = parseInt(document.getElementById('quantity').value);
  const total = qty * unitPrice;
  document.getElementById('total-price').innerText = total.toLocaleString();
}

function increaseQty() {
  const qtyInput = document.getElementById('quantity');
  qtyInput.value = parseInt(qtyInput.value) + 1;
  updateTotalPrice();
}

function decreaseQty() {
  const qtyInput = document.getElementById('quantity');
  const currentQty = parseInt(qtyInput.value);
  if (currentQty > 1) {
    qtyInput.value = currentQty - 1;
    updateTotalPrice();
  }
}

// === 탭 전환 기능 ===
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.menu-item');

  tabs.forEach(tab => {
    tab.style.display = 'none';
  });

  buttons.forEach(btn => {
    btn.classList.remove('selected');
  });

  document.getElementById(tabId).style.display = 'block';
  document.querySelector(`.menu-item[data-tab="${tabId}"]`).classList.add('selected');
}

// === 리뷰 작성 모달 기능 ===
let currentRating = 0;
let reviewCount = 0;

function openReviewModal() {
  document.getElementById('review-modal').style.display = 'flex';
  renderStars();
}

function closeReviewModal() {
  document.getElementById('review-modal').style.display = 'none';
  currentRating = 0;
  renderStars();
  document.getElementById('review-text').value = '';
}

function renderStars() {
  const container = document.getElementById('star-input');
  container.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.innerText = '★';
    star.className = i <= currentRating ? 'selected' : '';
    star.onclick = () => {
      currentRating = i;
      renderStars();
    };
    container.appendChild(star);
  }
}

function submitReview() {
  const text = document.getElementById('review-text').value.trim();
  if (currentRating === 0 || text === '') {
    alert("별점을 선택하고 내용을 입력해주세요!");
    return;
  }

  const reviewList = document.querySelector('.review-container');
  const review = document.createElement('div');
  review.className = 'review';
  review.innerHTML = `<p>⭐️ ${currentRating}점 - ${text}</p>`;
  reviewList.appendChild(review);

  // 숫자 증가
  reviewCount++;
  document.getElementById('review-count').innerText = reviewCount;

  closeReviewModal();
}

// === 초기 실행 ===
document.addEventListener("DOMContentLoaded", () => {
  showTab('book-info');
  updateTotalPrice();
});
