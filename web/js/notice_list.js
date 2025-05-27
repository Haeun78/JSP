// 공지사항 더미 데이터 (예: 25건)
const notices = Array.from({ length: 25 }, (_, i) => ({
  number: 25 - i,
  date: `2025-05-${(25 - i).toString().padStart(2, '0')}`,
  title: `공지사항 제목 ${25 - i}`
}));

// DOM 요소
const noticeList = document.getElementById("noticeList");
const noticeCount = document.getElementById("noticeCount");
const searchBtn = document.querySelector(".search-button");
const searchInput = document.getElementById("searchInput");
const searchType = document.getElementById("searchType");
const pagination = document.getElementById("pagination");

// 페이지 관련 변수
const itemsPerPage = 10;
let currentPage = 1;
let filteredNotices = [...notices];

// 공지사항 렌더링
function renderNotices(page = 1) {
  noticeList.innerHTML = "";

  if (filteredNotices.length === 0) {
    const li = document.createElement("li");
    li.textContent = "🔍 결과가 없습니다.";
    li.style.textAlign = "center";
    li.style.padding = "20px";
    noticeList.appendChild(li);

    pagination.innerHTML = "";
    noticeCount.textContent = 0;
    return;
  }

  const startIdx = (page - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const pageItems = filteredNotices.slice(startIdx, endIdx);

  pageItems.forEach((notice) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="notice-number">${notice.number}</span>
      <span class="notice-title">
        <a href="notice_view.html?no=${notice.number}">${notice.title}</a>
      </span>
      <span class="notice-date">${notice.date}</span>
    `;
    noticeList.appendChild(li);
  });

  noticeCount.textContent = filteredNotices.length;
  renderPagination();
}

// 페이지네이션 렌더링
function renderPagination() {
  pagination.innerHTML = "";
  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);

  // 이전 버튼
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "«";
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    currentPage--;
    renderNotices(currentPage);
  };
  pagination.appendChild(prevBtn);

  // 페이지 번호
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.textContent = i;
    if (i === currentPage) {
      pageBtn.style.fontWeight = "bold";
    }
    pageBtn.onclick = () => {
      currentPage = i;
      renderNotices(currentPage);
    };
    pagination.appendChild(pageBtn);
  }

  // 다음 버튼
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "»";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => {
    currentPage++;
    renderNotices(currentPage);
  };
  pagination.appendChild(nextBtn);
}

// 검색 기능
function searchNotices() {
  const keyword = searchInput.value.toLowerCase().trim();
  const type = searchType.value;

  filteredNotices = notices.filter((notice) => {
    if (type === "all") {
      return (
        notice.title.toLowerCase().includes(keyword) ||
        notice.date.includes(keyword)
      );
    } else if (type === "title") {
      return notice.title.toLowerCase().includes(keyword);
    } else if (type === "content") {
      return notice.title.toLowerCase().includes(keyword); // 'content' 없음
    }
  });

  currentPage = 1;
  renderNotices(currentPage);
}

// 이벤트
searchBtn.addEventListener("click", searchNotices);

// 초기 렌더링
renderNotices(currentPage);
