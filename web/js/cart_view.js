// 문서가 완전히 로드되면 실행
document.addEventListener('DOMContentLoaded', () => {

  // 주요 요소 연결
  const selectAll = document.getElementById('select-all'); // 전체 선택 체크박스
  const deleteSelectedBtn = document.getElementById('delete-selected');   // 선택 삭제 버튼
  const totalPriceEl = document.getElementById('total-price');            // 총 상품 금액
  const expectedPriceEl = document.getElementById('expected-price');      // 결제 예정 금액
  const pointEl = document.getElementById('point');                       // 적립금
  const selectedCountEl = document.getElementById('selected-count');      // 선택된 총 수량
  const purchaseBtn = document.getElementById('purchase-btn');            // 구매하기 버튼

  // 장바구니 요약 정보 업데이트 함수
  function updateSummary() {
    let total = 0;            // 총 결제 금액
    let count = 0;            // 선택된 도서 총 수량

    // 각 cart-item을 순회
    document.querySelectorAll('.cart-item').forEach(item => {
      const checkbox = item.querySelector('.item-checkbox');
      const qty = parseInt(item.querySelector('.qty-input').value);
      const price = parseInt(item.querySelector('.unit-price').innerText.replace(/,/g, ''));

      if (checkbox.checked) {
        total += qty * price; // 총 금액 누적
        count += qty;         // 수량 누적
      }
    });

    // DOM에 실시간 반영
    totalPriceEl.innerText = total.toLocaleString();
    expectedPriceEl.innerText = total.toLocaleString();
    pointEl.innerText = Math.floor(total * 0.05).toLocaleString(); // 5% 적립금 계산
    selectedCountEl.innerText = `총 ${count}개 선택`;
  }

  // 전체 선택 체크박스 클릭 시
  selectAll.addEventListener('change', () => {
    const isChecked = selectAll.checked;
    document.querySelectorAll('.item-checkbox').forEach(cb => {
      cb.checked = isChecked;
    });
    updateSummary();
  });

  // 개별 체크박스 클릭 시 전체 선택 상태 갱신
  document.querySelectorAll('.item-checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      const all = document.querySelectorAll('.item-checkbox');
      const allChecked = [...all].every(cb => cb.checked);
      selectAll.checked = allChecked;
      updateSummary();
    });
  });

  // 수량 증가 버튼 (+) 클릭 시
  document.querySelectorAll('.qty-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.cart-item');         // 해당 상품
      const input = item.querySelector('.qty-input');
      input.value = parseInt(input.value) + 1;        // 수량 증가
      updateSummary();
    });
  });

  // 수량 감소 버튼 (-) 클릭 시
  document.querySelectorAll('.qty-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.cart-item');
      const input = item.querySelector('.qty-input');
      const val = parseInt(input.value);
      if (val > 1) {
        input.value = val - 1; // 수량 감소
        updateSummary();
      } else {
        alert("최소 구매 가능 수량은 1개 입니다");
      }
    });
  });

  // 선택된 항목 삭제 버튼 클릭 시
  deleteSelectedBtn.addEventListener('click', () => {
    const selected = [...document.querySelectorAll('.item-checkbox')].filter(cb => cb.checked);

    if (selected.length === 0) {
      alert("삭제할 상품을 선택해주세요.");
      return;
    }

    if (confirm("장바구니에서 삭제하시겠습니까?")) {
      selected.forEach(cb => cb.closest('.cart-item').remove());
      updateSummary();
    }
  });

  // 각 상품의 개별 삭제 버튼
  document.querySelectorAll('.item-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm("장바구니에서 삭제하시겠습니까?")) {
        btn.closest('.cart-item').remove();
        updateSummary();
      }
    });
  });

  // 구매하기 버튼 클릭 시 결제 페이지로 이동
  purchaseBtn.addEventListener('click', () => {
    window.location.href = "payment.html";
  });

  // 초기 상태 업데이트
  updateSummary();
});
