// 데이터
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"), 10);

const readingData = [
  {
    id: 1,
    title: "『르네상스 시민의식』을 읽고",
    date: "2025-06-01",
    category: "인문 · 역사",
    period: "2025.05.25 ~ 2025.05.30",
    content: `...긴 내용...`,
    tags: ["#인문", "#르네상스", "#시민사회"],
    review: "이 책 정말 인상 깊었어요!",
    image: "./images/renaissance.jpg",
    likes: 58
  }
];

const record = readingData.find(r => r.id === id);

if (record) {
  document.getElementById("readingTitle").textContent = record.title;
  document.getElementById("readingDate").textContent = record.date;
  document.getElementById("readingCategory").textContent = record.category;
  document.getElementById("readingPeriod").textContent = record.period;
  document.getElementById("readingContent").textContent = record.content;
  document.getElementById("readingTags").textContent = record.tags.join(" ");
  document.getElementById("readingReview").textContent = record.review;
  document.getElementById("readingImage").src = record.image;
  document.getElementById("likeCount").textContent = record.likes;
}

// 좋아요 기능
let liked = false;
let likeCount = record ? record.likes : 0;

const likeWrap = document.querySelector(".icon-wrap-heart"); // 감싸는 박스
const likeIcon = document.querySelector(".icon-heart");       // 실제 하트 아이콘
const likeCountEl = document.getElementById("likeCount");

likeWrap.addEventListener("click", () => {
  liked = !liked;

  if (liked) {
    likeIcon.classList.add("active");
    likeCount++;
  } else {
    likeIcon.classList.remove("active");
    likeCount--;
  }

  likeCountEl.textContent = likeCount;
});


// 공유 모달
const shareWrap = document.querySelector(".icon-wrap-share");
const shareModal = document.getElementById("shareModal");
const closeModalBtn = document.getElementById("closeModal");

shareWrap.addEventListener("click", () => {
  navigator.clipboard.writeText(window.location.href)
    .then(() => {
      shareModal.style.display = "flex";
    })
    .catch(() => alert("복사 실패 ❌"));
});

closeModalBtn.addEventListener("click", () => {
  shareModal.style.display = "none";
});
