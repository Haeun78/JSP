// 로그인 여부를 확인하는 함수 (임시, 실제 구현 시 쿠키/세션 체크)
function isLoggedIn() {
  return localStorage.getItem("userLoggedIn") === "true";
}

// 1. 분야 아이콘 클릭 시 해당 카테고리 페이지로 이동
function setupCategoryNavigation() {
  document.querySelectorAll(".btn-icon-div").forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.querySelector(".btn-name").innerText;
      const encoded = encodeURIComponent(category);
      location.href = `book_field_detail_page.jsp?category=${encoded}`;
    });
  });
}

// 2~4. 장바구니 / 바로구매 버튼 클릭 시 처리
function setupCartAndBuyButtons() {
  document.querySelectorAll(".cart-button").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      if (!isLoggedIn()) {
        if (confirm("로그인이 필요합니다. 로그인하시겠습니까?")) {
          location.href = "login_form.html";
        }
        return;
      }

      alert("장바구니에 담겼습니다.");
      // 페이지 유지, 폼 제출은 하지 않음 (실제 로직은 서버 세션에서 처리 예상)
    });
  });

  document.querySelectorAll(".buy-button").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      if (!isLoggedIn()) {
        if (confirm("로그인이 필요합니다. 로그인하시겠습니까?")) {
          location.href = "login_form.html";
        }
        return;
      }

      // 폼 전송으로 바로 구매
      const form = btn.closest("form");
      form.submit();
    });
  });
}

// 5. second-etc-body 클릭 시 상품 상세 페이지 이동
function setupSecondBookCards() {
  document.querySelectorAll(".second-etc-body").forEach(card => {
    card.addEventListener("click", () => {
      location.href = "product_detail_view.html";
    });
  });
}

// 6. 베스트셀러 이미지 클릭 시 상품 상세 페이지 이동
function setupBestBookImages() {
  document.querySelectorAll(".best-book-img").forEach(imgBox => {
    imgBox.addEventListener("click", () => {
      location.href = "product_detail_view.html";
    });
  });
}

// 초기화
function initializePage() {
  setupCategoryNavigation();
  setupCartAndBuyButtons();
  setupSecondBookCards();
  setupBestBookImages();
}

document.addEventListener("DOMContentLoaded", initializePage);
