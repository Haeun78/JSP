document.addEventListener("DOMContentLoaded", () => {
  // === 1. 가로 스크롤 드래그
  const wrapper = document.querySelector('.timeline-wrapper');
  if (wrapper) {
    wrapper.addEventListener('wheel', function (e) {
      e.preventDefault();
      wrapper.scrollLeft += e.deltaY;
    }, { passive: false });
  }

  // === 2. 타임라인 트랙 & 눈금
  const track = document.getElementById("timeline-track");
  const timelineBar = document.getElementById("timelineBar");
  const years = Array.from({ length: 20 }, (_, i) => 2024 - i);
  const awards = ["노벨문학상", "부커상", "공쿠르상"];

  years.forEach((year) => {
    const tick = document.createElement("div");
    tick.className = "tick";
    tick.dataset.year = year;
    if (year === 2012) tick.classList.add("active");

    tick.innerHTML = `
      <div class="marker"></div>
      <span class="year-label">${year}</span>
    `;

    tick.onclick = () => {
      scrollToYear(year);
      document.querySelectorAll(".tick").forEach(t => t.classList.remove("active"));
      tick.classList.add("active");
    };

    timelineBar.appendChild(tick);

    const column = document.createElement("div");
    column.className = "year-column";
    column.id = `year-${year}`;
    column.innerHTML = `
      <div class="year-line"></div>
      <div class="year-label">${year}</div>
      <div class="card-row">
        ${awards.map(award => `
          <div class="award-card">
            <div class="book-img-box">
              <img src="../image/40세 정신과 영수증.jpg" alt="${award}">
            </div>
            <div class="card-info">
              <h3>대표작 ${year}</h3>
              <p class="award">${award}</p>
              <p class="author">작가 A</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
    track.appendChild(column);
  });

  // === 3. 카드 클릭 시 모달 열기
  document.addEventListener("click", e => {
    const card = e.target.closest(".award-card");
    if (card) {
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
    }
  });

  // === 4. 사이드 메뉴 열기
  document.getElementById("menuToggle")?.addEventListener("click", () => {
    document.getElementById("sideDrawer")?.classList.add("open");
    renderDrawerMenu();
  });

  // === 5. 사이드 메뉴 닫기
  document.getElementById("closeDrawer")?.addEventListener("click", () => {
    document.getElementById("sideDrawer")?.classList.remove("open");
  });

  // === 6. 페이지 진입 시 사이드 메뉴 렌더링
  renderDrawerMenu();
});

// === 7. 연도 이동
function scrollToYear(year) {
  const column = document.getElementById('year-' + year);
  const timeline = document.querySelector('.timeline-wrapper');
  if (column && timeline) {
    const scrollX = column.offsetLeft - 60;
    timeline.scrollTo({ left: scrollX, behavior: 'smooth' });
    document.querySelectorAll('.year-column').forEach(col => col.classList.remove("highlighted"));
    column.classList.add("highlighted");
  }
}

// === 8. 모달 열기
function openModal(contentHtml) {
  const modal = document.getElementById("bookModal");
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = contentHtml;
  modal.style.display = "block";
}

// === 9. 모달 닫기
function closeModal() {
  document.getElementById("bookModal").style.display = "none";
}

// === 10. 모달 외부 클릭 시 닫기
window.addEventListener("click", (e) => {
  const modal = document.getElementById("bookModal");
  if (e.target === modal) closeModal();
});

// === 11. 로그인 상태 관리 + 사이드 메뉴 구성
function renderDrawerMenu() {
  const userMenu = document.getElementById("userMenu");
  if (!userMenu) return;

  const isLoggedIn = getLoginState();
  userMenu.innerHTML = ''; // 로그인 메뉴만 초기화

  if (!isLoggedIn) {
    userMenu.innerHTML = `
      <li><a href="./login_form.html">로그인</a></li>
      <li><a href="./signup.html">회원가입</a></li>
      <li><a href="./customer_service_main.html">고객센터</a></li>
    `;
  } else {
    userMenu.innerHTML = `
      <li><a href="#" id="logoutBtn">로그아웃</a></li>
      <li><a href="./order_list.html">주문배송</a></li>
      <li><a href="./customer_service_main.html">고객센터</a></li>
      <li><a href="./mypage_main.html">마이페이지</a></li>
    `;

    document.getElementById("logoutBtn")?.addEventListener("click", (e) => {
      e.preventDefault();
      setLoginState(false);
      alert('로그아웃 되었습니다.');
      renderDrawerMenu();
    });
  }
}


document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("sideDrawer").classList.add("open");
});
