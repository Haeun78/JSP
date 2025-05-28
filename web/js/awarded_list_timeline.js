document.addEventListener("DOMContentLoaded", () => {
  // 1. 마우스 휠 가로 스크롤
  const wrapper = document.querySelector('.timeline-wrapper');
  if (wrapper) {
    wrapper.addEventListener('wheel', function (e) {
      e.preventDefault();
      wrapper.scrollLeft += e.deltaY;
    }, { passive: false });
  }

  // 2. 카드 클릭 시 모달 열기
  const cards = document.querySelectorAll(".award-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const title = card.querySelector("h3").innerText;
      const award = card.querySelector(".award").innerText;
      const author = card.querySelector(".author").innerText;
      const image = card.querySelector("img").src;

      const html = `
        <h2>${title}</h2>
        <img src="${image}" style="width:100%; max-height:360px; object-fit:cover; border-radius:8px;" />
        <p><strong>${award}</strong></p>
        <p><em>${author}</em></p>
        <p style="margin-top:12px;">이 책은 아직 등록된 설명이 없습니다.</p>
      `;
      openModal(html);
    });
  });

  // 3. 페이지 진입 시 기본 연도 스크롤
  if (document.getElementById("year-2025")) {
    scrollToYear("2025");
  }
});

// 연도 클릭 시 해당 카드 영역으로 스크롤 이동
function scrollToYear(year) {
  const column = document.getElementById('year-' + year);
  const timeline = document.querySelector('.timeline-wrapper');
  const marker = document.getElementById('marker');
  const ticks = document.querySelectorAll('.year-tick');

  if (column && timeline) {
    const scrollX = column.offsetLeft - 60;
    timeline.scrollTo({ left: scrollX, behavior: 'smooth' });

    // 연도 버튼 스타일 리셋 및 활성화
    ticks.forEach(t => t.classList.remove("active"));
    const selected = [...ticks].find(t => t.innerText === year);
    if (selected) {
      selected.classList.add("active");
      marker.style.left = `${selected.offsetLeft + selected.offsetWidth / 2}px`;
    }

    // ✅ (추가) 강조 효과를 위해 다른 column의 클래스 제거 후 현재 연도 강조
    document.querySelectorAll('.year-column').forEach(col => col.classList.remove("highlighted"));
    column.classList.add("highlighted");

    // (선택사항) 몇 초 뒤 강조 해제하고 싶다면 아래 주석 해제
    // setTimeout(() => {
    //   column.classList.remove("highlighted");
    // }, 2000);
  }
}

// 모달 열기 함수
function openModal(contentHtml) {
  const modal = document.getElementById("bookModal");
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = contentHtml;
  modal.style.display = "block";
}

// 모달 닫기 함수
function closeModal() {
  document.getElementById("bookModal").style.display = "none";
}

// ✅ (추가) 모달 외부 클릭 시 닫기 기능
window.addEventListener("click", (e) => {
  const modal = document.getElementById("bookModal");
  if (e.target === modal) closeModal();
});
