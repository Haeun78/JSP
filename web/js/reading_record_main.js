// 로그인 상태 및 사용자 ID (가정)
const isLoggedIn = true;
const currentUserId = 1;
const userName = "김하은";

// DOM 요소들
const submenu = document.getElementById("submenu");
const sortSelect = document.getElementById("sortSelect");
const recordList = document.getElementById("recordList");
const myRecordList = document.getElementById("myRecordList");
const userGreeting = document.getElementById("userGreeting");

let currentTab = "all";
let currentSort = "date-desc";

// 탭 메뉴 렌더링
let subHtml = '<ul>';
subHtml += '<li><button class="tab-btn active" data-tab="all"><img src="./icon/rss.svg" alt=""> 모아보기</button></li>';
if (isLoggedIn) {
  subHtml += '<li><button class="tab-btn" data-tab="mine"><img src="./icon/bookmark-fill.svg" alt=""> 나의 기록</button></li>';
  subHtml += '<li><button id="writeBtn" class="tab-btn"><img src="./icon/blockquote-left.svg" alt=""> 새 글 작성</button></li>';
}
subHtml += '</ul>';
submenu.innerHTML = subHtml;

// 새 글 작성 이동
document.getElementById("writeBtn")?.addEventListener("click", () => {
  location.href = "reading_record_write.html";
});

// 탭 전환 처리
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("tab-btn")) {
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    currentTab = e.target.dataset.tab;

    // 부드러운 전환 처리
    switchTab(currentTab);

    // 나의 기록 인사말 표시
    if (currentTab === "mine" && isLoggedIn) {
      userGreeting.textContent = `${userName}님의 기록입니다.`;
    }

    renderView();
  }
});

// 탭 전환 함수 (애니메이션 적용)
function switchTab(tabName) {
  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.classList.remove("active");
  });

  const targetPanel = document.getElementById(`tab-${tabName}-content`);
  if (targetPanel) {
    targetPanel.classList.add("active");
  }
}


const records = [
  {
    id: 1,
    title: "데미안",
    summary: "본문 내용 입니다. 본문 내용 입니다. 본문 내용 입니다. 본문 내용 입니다. 본문 내용 입니다. 내면의 성장과 혼란을 담은 이야기",
    date: "2024-05-27",
    likes: 12,
    writer: "김하은",
    writerId: 1,
    thumbnail: "image/40세 정신과 영수증.jpg"
  },
  {
    id: 2,
    title: "파우스트",
    summary: "본문 내용 입니다. 본문 내용 입니다. 본문 내용 입니다. 본문 내용 입니다. 본문 내용 입니다. 내면의 성장과 혼란을 담은 이야기",
    date: "2024-05-20",
    likes: 30,
    writer: "손태호",
    writerId: 2,
    thumbnail: "image/sample2.jpg"
  },
  {
    id: 3,
    title: "제목",
    summary: "본문 내용 입니다. 본문 내용 입니다. 본문 내용 입니다. 본문 내용 입니다. 본문 내용 입니다. 내면의 성장과 혼란을 담은 이야기",
    date: "2024-05-20",
    likes: 30,
    writer: "손태호",
    writerId: 2,
    thumbnail: "image/sample2.jpg"
  },
  {
    id: 3,
    title: "제목",
    summary: "본문 내용 입니다. 본문 내용 입니다. 본문 내용 입니다. 본문 내용 입니다. 본문 내용 입니다. 내면의 성장과 혼란을 담은 이야기",
    date: "2024-05-20",
    likes: 30,
    writer: "손태호",
    writerId: 2,
    thumbnail: "image/sample2.jpg"
  },
  {
    id: 3,
    title: "제목",
    summary: "본문 내용 입니다. 본문 내용 입니다. 본문 내용 입니다. 본문 내용 입니다. 본문 내용 입니다. 내면의 성장과 혼란을 담은 이야기",
    date: "2024-05-20",
    likes: 30,
    writer: "손태호",
    writerId: 2,
    thumbnail: "image/sample2.jpg"
  },
  {
    id: 3,
    title: "제목",
    summary: "악마와 거래한 인간 이야기",
    date: "2024-05-20",
    likes: 30,
    writer: "손태호",
    writerId: 2,
    thumbnail: "image/sample2.jpg"
  },
  {
    id: 3,
    title: "제목",
    summary: "악마와 거래한 인간 이야기",
    date: "2024-05-20",
    likes: 30,
    writer: "손태호",
    writerId: 2,
    thumbnail: "image/sample2.jpg"
  },
  {
    id: 3,
    title: "제목",
    summary: "악마와 거래한 인간 이야기",
    date: "2024-05-20",
    likes: 30,
    writer: "손태호",
    writerId: 2,
    thumbnail: "image/sample2.jpg"
  },
  {
    id: 3,
    title: "제목",
    summary: "악마와 거래한 인간 이야기",
    date: "2024-05-20",
    likes: 30,
    writer: "손태호",
    writerId: 2,
    thumbnail: "image/sample2.jpg"
  }
];

// 정렬 함수
function sortRecords(list, sortType) {
  const sorted = [...list];
  if (sortType === "date-desc") sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
  else if (sortType === "date-asc") sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
  else if (sortType === "likes") sorted.sort((a, b) => b.likes - a.likes);
  return sorted;
}

// 카드 렌더링
function renderRecords(list, container) {
  container.innerHTML = list.map(r => `
    <div class="record-card" onclick="location.href='read.html?id=${r.id}'">
      <img class="thumbnail" src="${r.thumbnail}" alt="썸네일" onerror="this.onerror=null; this.src='./image/이미지 샘플.png';" />
      <div class="card-body">
        <h3 class="card-title">${r.title}</h3>
        <p class="card-summary">${r.summary}</p>
        <div class="card-meta">
          <span class="card-date">${r.date}</span>
          <span class="card-writer">by ${r.writer}</span>
        </div>
        <div class="card-footer">❤️ <span class="likes">${r.likes}</span></div>
      </div>
    </div>
  `).join("");
}

// 메인 렌더링
function renderView() {
  let filtered = [...records];
  if (currentTab === "mine" && isLoggedIn) {
    filtered = filtered.filter(r => r.writerId === currentUserId);
    renderRecords(filtered, myRecordList);
  } else {
    renderRecords(sortRecords(filtered, currentSort), recordList);
  }
}

// 정렬 이벤트
sortSelect.addEventListener("change", () => {
  currentSort = sortSelect.value;
  renderView();
});

// 초기 출력
renderView();
