//상세 검색 슬라이더
function toggleSearchPanel() {
    const panel = document.getElementById("searchPanel");
    panel.classList.toggle("active");
  }
  
  //상세 검색 기간
  function selectDateRange(button, isCustom = false) {
    // 모든 버튼에서 active 제거
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
  
    // 클릭된 버튼에 active 추가
    button.classList.add('active');
  
    // 직접입력이면 날짜 입력칸 보이기
    const dateRange = document.getElementById('date-range');
    if (isCustom) {
      dateRange.style.display = 'inline-block';
    } else {
      dateRange.style.display = 'none';
    }
  }
  // 상세 검색 초기화
  function resetSearchForm() {
    // 1. 전체 텍스트 입력 필드 초기화
    const inputs = document.querySelectorAll('.search-panel input[type="text"], .search-panel input[type="date"]');
    inputs.forEach(input => input.value = '');
  
    // 2. 카테고리 select 초기화 (분야)
    document.getElementById('category-select').selectedIndex = 0;
  
    // 3. 출간일 버튼 active 초기화
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[0].classList.add('active'); // "전체" 버튼에 active 다시 줌
  
    // 4. 날짜 범위 선택창 숨기기
    document.getElementById('date-range').style.display = 'none';
  
    // 5. 체크박스 초기화
    document.querySelector('input[name="exclude_soldout"]').checked = false;
  }
  
  //  [추가] 검색 버튼 눌렀을 때 유효성 검사 (검색어 하나라도 없으면 경고창)
  function validateAndSubmit() {
    const form = document.getElementById('detailSearchForm');
    const inputs = form.querySelectorAll('input[type="text"]');
    let hasValue = false;
  
    inputs.forEach(input => {
      if (input.value.trim() !== '') {
        hasValue = true;
      }
    });
  
    if (!hasValue) {
      alert("검색어를 하나 이상 입력해주세요.");
      return; // 폼 제출 방지
    }
  
    form.submit(); // 직접 전송
  }