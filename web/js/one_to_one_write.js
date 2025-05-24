const form = document.getElementById("inquiryForm");
const submitBtn = document.getElementById("submitBtn");
const fileInput = document.getElementById("file");
const previewBox = document.getElementById("filePreview");

// 필수 입력 요소들
const requiredFields = [
  document.getElementById("category"),
  document.getElementById("title"),
  document.getElementById("content")
];

// 모든 필수 입력이 채워졌는지 확인하여 버튼 활성화
function checkFormValidity() {
  const allFilled = requiredFields.every(field => field.value.trim() !== "");
  submitBtn.disabled = !allFilled;
}

requiredFields.forEach(field => {
  field.addEventListener("input", checkFormValidity);
});

// 파일 첨부: 확장자 제한 + 이미지 미리보기
fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif"];

  previewBox.innerHTML = ""; // 기존 미리보기 초기화

  if (file) {
    if (!allowedTypes.includes(file.type)) {
      alert("PNG, JPG, JPEG, GIF 형식만 업로드할 수 있습니다.");
      fileInput.value = "";
      return;
    }

    // 이미지 미리보기 생성
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      previewBox.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // 모달창 보여주기
  document.getElementById("submitModal").style.display = "flex";
});

// 확인 버튼 클릭 시 페이지 이동
document.getElementById("modalOkBtn").addEventListener("click", function () {
  window.location.href = "one_to_one_list.html";
});

// 취소 버튼 동작: 확인창 띄우기
const cancelBtn = document.querySelector(".cancel-btn");

cancelBtn.addEventListener("click", () => {
  const confirmed = confirm("작성을 취소하시겠습니까?");
  if (confirmed) {
    form.reset(); // 입력값 초기화
    document.getElementById("filePreview").innerHTML = ""; // 파일 미리보기 제거
    document.getElementById("submitBtn").disabled = true; // 완료 버튼 비활성화
    window.location.href = "one_to_one_list.html"; // 목록 페이지로 이동
  }
});
