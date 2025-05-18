document.addEventListener("DOMContentLoaded", () => {
  const agreeAll = document.getElementById("agreeAll");
  const termChecks = document.querySelectorAll(".terms");

  // ✅ 전체 동의 클릭 시 개별 약관 모두 체크 또는 해제
  agreeAll.addEventListener("change", () => {
    termChecks.forEach(cb => cb.checked = agreeAll.checked);
  });

  // ✅ 개별 약관 체크 여부에 따라 전체 동의 자동 갱신
  termChecks.forEach(cb => {
    cb.addEventListener("change", () => {
      const allChecked = [...termChecks].every(c => c.checked);
      agreeAll.checked = allChecked;
    });
  });

  // ✅ 필수 입력값 확인 후 확인 버튼 활성화
  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", () => {
    const required = [
      "userid", "password", "confirmPassword", "name",
      "birth-year", "birth-month", "birth-day", "phone", "email"
    ];

    for (const id of required) {
      const el = document.getElementById(id);
      if (!el || el.value.trim() === "") {
        alert(`필수 항목이 누락되었습니다: ${id}`);
        el.focus();
        return;
      }
    }

    if (!document.getElementById("privacy").checked || !document.getElementById("commerce").checked) {
      alert("필수 약관에 동의해 주세요.");
      return;
    }

    alert("회원가입이 완료되었습니다.");
    window.location.href = "index.html";
  });
});
