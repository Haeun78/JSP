const noticeData = [
  {
    number: 1,
    date: "2025-03-01",
    title: "📢 여름방학 교재 배송 안내",
    content: `안녕하세요. 책광장모두입니다.

2023년 9월 15일 개정된 개인정보보호법(’개인정보 유효기간제’폐지, 개정 전 39조의 6)이 시행됨에 따라 개인정보 처리방침이

변경되었습니다. 

개인정보 유효기간제(개정 전 39조의 6)폐지로 휴면 정책이 변경되었으니 서비스 이용에 참고하시기 바랍니다.

책광장모두는 고객님의 소중한 개인정보를 보호하기 위하여 언제나 최선을 다하겠습니다.`
  },
  {
    number: 2,
    date: "2025-03-05",
    title: "📦 무료배송 이벤트 안내",
    content: `안녕하세요. 책광장모두입니다.

2023년 9월 15일 개정된 개인정보보호법(’개인정보 유효기간제’폐지, 개정 전 39조의 6)이 시행됨에 따라 개인정보 처리방침이

변경되었습니다. 

개인정보 유효기간제(개정 전 39조의 6)폐지로 휴면 정책이 변경되었으니 서비스 이용에 참고하시기 바랍니다.

책광장모두는 고객님의 소중한 개인정보를 보호하기 위하여 언제나 최선을 다하겠습니다.`
  },
  {
    number: 3,
    date: "2025-03-10",
    title: "📘 학기 교재 주문 시작",
    content: `안녕하세요. 책광장모두입니다.

2023년 9월 15일 개정된 개인정보보호법(’개인정보 유효기간제’폐지, 개정 전 39조의 6)이 시행됨에 따라 개인정보 처리방침이

변경되었습니다. 

개인정보 유효기간제(개정 전 39조의 6)폐지로 휴면 정책이 변경되었으니 서비스 이용에 참고하시기 바랍니다.

책광장모두는 고객님의 소중한 개인정보를 보호하기 위하여 언제나 최선을 다하겠습니다.`
  }
];

// 현재 공지
const queryParams = new URLSearchParams(window.location.search);
const currentNo = parseInt(queryParams.get("no"), 10);
const currentNotice = noticeData.find(n => n.number === currentNo);
if (!currentNotice) {
  document.querySelector(".notice-main").innerHTML = "<h2>해당 공지사항이 존재하지 않습니다.</h2>";
} else {
  document.getElementById("noticeTitle").textContent = currentNotice.title;
  document.getElementById("noticeDate").textContent = currentNotice.date;
  document.getElementById("noticeContent").textContent = currentNotice.content;

  const currentDate = new Date(currentNotice.date);

  // ✅ prev: 더 이후 날짜 (즉, 더 최신)
  const prev = noticeData
    .filter(n => new Date(n.date) > currentDate)
    .sort((a, b) => new Date(a.date) - new Date(b.date))[0];

  if (prev) {
    document.querySelector(".notice-row-prev .row-content").innerHTML = `
      <div class="label">prev</div>
      <div class="side-line"></div>
      <div class="title-date-wrap">
        <a href="notice_view.html?no=${prev.number}" class="notice-title">${prev.title}</a>
        <span class="notice-date">${prev.date}</span>
      </div>
    `;
  } else {
    document.querySelector(".notice-row-prev .row-content").innerHTML = `
      <div class="label">prev</div>
      <div class="side-line"></div>
      <div class="title-date-wrap">
        <span class="notice-title">이전 글이 없습니다.</span>
        <span class="notice-date"></span>
      </div>
    `;
  }

  // ✅ next: 더 이전 날짜 (즉, 더 과거)
  const next = noticeData
    .filter(n => new Date(n.date) < currentDate)
    .sort((a, b) => new Date(b.date) - new Date(a.date))[0];

  if (next) {
    document.querySelector(".notice-row-next .row-content").innerHTML = `
      <div class="label">next</div>
      <div class="side-line"></div>
      <div class="title-date-wrap">
        <a href="notice_view.html?no=${next.number}" class="notice-title">${next.title}</a>
        <span class="notice-date">${next.date}</span>
      </div>
    `;
  } else {
    document.querySelector(".notice-row-next .row-content").innerHTML = `
      <div class="label">next</div>
      <div class="side-line"></div>
      <div class="title-date-wrap">
        <span class="notice-title">다음 글이 없습니다.</span>
        <span class="notice-date"></span>
      </div>
    `;
  }
}
