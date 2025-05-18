document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const popup = document.getElementById("loginPopup");
  const welcomeMessage = document.getElementById("welcomeMessage");
  const closePopup = document.getElementById("closePopup");

  const useridInput = document.getElementById("userid");
  const rememberCheckbox = document.getElementById("remember");

  // 👉 저장된 아이디가 있으면 불러오기
  const savedId = localStorage.getItem("savedId");
  if (savedId) {
    useridInput.value = savedId;
    rememberCheckbox.checked = true;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const id = useridInput.value.trim();
    const pw = document.getElementById("password").value.trim();

    // 👉 아이디 저장 체크 시 저장, 해제 시 제거
    if (rememberCheckbox.checked) {
      localStorage.setItem("savedId", id);
    } else {
      localStorage.removeItem("savedId");
    }

    // 👉 로그인 검증 (임시 조건)
    if (id === "test" && pw === "1234") {
      welcomeMessage.textContent = `${id}님, 환영합니다.`;
      popup.classList.remove("hidden");
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  });

  closePopup.addEventListener("click", function () {
    popup.classList.add("hidden");
    window.location.href = "index.html";
  });
});
