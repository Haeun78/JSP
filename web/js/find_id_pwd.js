document.addEventListener('DOMContentLoaded', () => {
  const findIdRadio = document.getElementById('find-id');
  const findPwRadio = document.getElementById('find-pw');
  const idInput = document.getElementById('id-input');

  function toggleIdField() {
    if (findPwRadio.checked) {
      idInput.style.display = 'block';
    } else {
      idInput.style.display = 'none';
    }
  }

  findIdRadio.addEventListener('change', toggleIdField);
  findPwRadio.addEventListener('change', toggleIdField);

  toggleIdField(); // 초기 설정
});
