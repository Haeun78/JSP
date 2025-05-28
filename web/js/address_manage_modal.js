const modal = document.getElementById("modalOverlay");
const addBtn = document.getElementById("addAddressBtn");
const cancelBtn = document.getElementById("cancelBtn");
const submitBtn = document.getElementById("submitBtn");
const addressList = document.getElementById("addressList");

let isEdit = false;
let editTarget = null;

// 모달 열기
addBtn.addEventListener("click", () => {
  openModal("add");
});

// 모달 닫기
cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// 확인 버튼
submitBtn.addEventListener("click", () => {
  const recipient = document.getElementById("recipient").value;
  const nickname = document.getElementById("nickname").value;
  const phone = document.getElementById("phone").value;
  const zipcode = document.getElementById("zipcode").value;
  const address1 = document.getElementById("address1").value;
  const address2 = document.getElementById("address2").value;

  if (isEdit && editTarget) {
    editTarget.querySelector(".recipient").textContent = recipient;
    editTarget.querySelector(".nickname").textContent = nickname;
    editTarget.querySelector(".phone").textContent = phone;
    editTarget.querySelector(".full-address").textContent = `${zipcode} ${address1} ${address2}`;
  } else {
    const card = document.createElement("div");
    card.classList.add("address-card");
    card.innerHTML = `
      <div class="address-header">
        <span class="nickname">${nickname}</span>
        <button class="default-btn" onclick="setDefault(this)">기본배송지</button>
      </div>
      <div class="address-detail">
        <div><strong>수령인:</strong> <span class="recipient">${recipient}</span></div>
        <div><strong>연락처:</strong> <span class="phone">${phone}</span></div>
        <div><strong>주소:</strong> <span class="full-address">${zipcode} ${address1} ${address2}</span></div>
      </div>
      <div class="address-actions">
        <button onclick="editAddress(this)">수정</button>
        <button onclick="deleteAddress(this)">삭제</button>
      </div>
    `;
    addressList.appendChild(card);
  }

  modal.style.display = "none";
  clearModalFields();
});

// 수정
window.editAddress = function(btn) {
  const card = btn.closest(".address-card");
  editTarget = card;
  isEdit = true;

  document.getElementById("recipient").value = card.querySelector(".recipient").textContent;
  document.getElementById("nickname").value = card.querySelector(".nickname").textContent;
  document.getElementById("phone").value = card.querySelector(".phone").textContent;

  const fullAddr = card.querySelector(".full-address").textContent.split(" ");
  document.getElementById("zipcode").value = fullAddr[0] || "";
  document.getElementById("address1").value = fullAddr[1] || "";
  document.getElementById("address2").value = fullAddr.slice(2).join(" ") || "";

  openModal("edit");
};

// 삭제
window.deleteAddress = function(btn) {
  if (confirm("정말 삭제하시겠습니까?")) {
    const card = btn.closest(".address-card");
    card.remove();
  }
};

// 기본배송지 설정
window.setDefault = function(btn) {
  document.querySelectorAll(".address-card").forEach(card => {
    card.classList.remove("default");
    card.querySelector(".default-btn").classList.remove("active");
  });

  const card = btn.closest(".address-card");
  card.classList.add("default");
  btn.classList.add("active");

  // 삭제 버튼 숨기기
  document.querySelectorAll(".address-actions button:nth-child(2)").forEach(btn => btn.style.display = "inline-block");
  const deleteBtn = card.querySelector(".address-actions button:nth-child(2)");
  if (deleteBtn) deleteBtn.style.display = "none";
};

// 모달 열기
function openModal(mode) {
  modal.style.display = "flex";
  document.getElementById("modalTitle").textContent = mode === "edit" ? "배송지 수정" : "배송지 추가";
  document.getElementById("submitBtn").textContent = mode === "edit" ? "수정완료" : "확인";
}

// 입력 초기화
function clearModalFields() {
  isEdit = false;
  editTarget = null;
  document.querySelectorAll("#modalOverlay input").forEach(input => input.value = "");
}
