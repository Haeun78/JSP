function showTab(type) {
      document.getElementById('tab-id').classList.remove('active');
      document.getElementById('tab-pw').classList.remove('active');
      document.getElementById('useridInput').style.display = 'none';
      document.getElementById('usernameInput').style.display = 'block';

      if (type === 'id') {
        document.getElementById('tab-id').classList.add('active');
        document.getElementById('method-title').innerText = '아이디 찾기 방법 선택';
        document.getElementById('useridInput').style.display = 'none';
      } else {
        document.getElementById('tab-pw').classList.add('active');
        document.getElementById('method-title').innerText = '비밀번호 찾기 방법 선택';
        document.getElementById('useridInput').style.display = 'block';
      }
      toggleInputFields();
    }

    function toggleInputFields() {
      const method = document.querySelector('input[name="method"]:checked').value;
      document.getElementById('phoneInput').style.display = (method === 'phone') ? 'block' : 'none';
      document.getElementById('emailInput').style.display = (method === 'email') ? 'block' : 'none';
    }

 document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const tab = urlParams.get("tab");

  if (tab === "pw") {
    showTab("pw");
  } else {
    showTab("id");
  }
});
