// 주간/월간 탭 전환
function switchRenewTerm(term) {
  document.querySelectorAll(".renew-v2-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.textContent.includes(term === "weekly" ? "주간" : "월간"));
  });
}

// 좌우 슬라이드
function slideRenewBooks(direction) {
  const container = document.getElementById("renewV2BookList");
  const slideWidth = container.querySelector(".renew-v2-card").offsetWidth + 32; // 카드 너비 + gap
  container.scrollBy({ left: direction * slideWidth * 6, behavior: "smooth" });
}

// 카테고리 필터링 (기본 전체 보기)
document.querySelectorAll(".renew-v2-cat").forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");
    document.querySelectorAll(".renew-v2-cat").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    document.querySelectorAll(".renew-v2-card").forEach((card) => {
      if (category === "전체" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
function slideCategoryV2(dir) {
  const viewport = document.querySelector(".renew-v2-category-viewport");
  viewport.scrollBy({ left: dir * 200, behavior: "smooth" });
}

// 페이지네이션 점 생성 및 동작
function setupPagination() {
  const cardWidth = document.querySelector(".renew-v2-card").offsetWidth + 32;
  const container = document.getElementById("renewV2BookList");
  const totalCards = container.querySelectorAll(".renew-v2-card").length;
  const cardsPerPage = 6;
  const pageCount = Math.ceil(totalCards / cardsPerPage);
  const pagination = document.getElementById("renewV2Pagination");

  pagination.innerHTML = "";

  for (let i = 0; i < pageCount; i++) {
    const dot = document.createElement("div");
    dot.className = "renew-v2-dot";
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      container.scrollTo({ left: i * cardWidth * cardsPerPage, behavior: "smooth" });
      document.querySelectorAll(".renew-v2-dot").forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
    });
    pagination.appendChild(dot);
  }

  container.addEventListener("scroll", () => {
    const scrollLeft = container.scrollLeft;
    const currentPage = Math.round(scrollLeft / (cardWidth * cardsPerPage));
    document.querySelectorAll(".renew-v2-dot").forEach((d, i) => {
      d.classList.toggle("active", i === currentPage);
    });
  });
}

// 초기 실행
window.addEventListener("DOMContentLoaded", setupPagination);