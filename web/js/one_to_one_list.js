  const inquiries = [
    {
      id: 1,
      title: "배송이 아직 안 와요",
      type: "배송",
      date: "2025-05-21",
      status: "waiting",
      content: "주문한 지 며칠 지났는데 배송이 안 왔어요. 확인 부탁드려요.",
      file: null
    },
    {
      id: 2,
      title: "책이 찢어져서 왔어요",
      type: "상품",
      date: "2025-05-20",
      status: "done",
      content: "책 모서리가 찢어져 있었습니다. 첨부 사진 확인해주세요.",
      file: {
        name: "damaged_book.jpg",
        url: "image/이미지 샘플.png"
      }
    },
    {
      id: 3,
      title: "거래 내역 확인 요청",
      type: "결제",
      date: "2025-05-19",
      status: "done",
      content: "구매 영수증 첨부했어요. 확인 부탁드립니다.",
      file: {

        name: "receipt.pdf",
        url: "/image/이미지 샘플.png"
      }
    }
  ];

  const isImage = (filename) => {
    return /\.(jpg|jpeg|png|gif)$/i.test(filename);
  };

  const list = document.getElementById("inquiryList");

  inquiries.forEach(inquiry => {
    const item = document.createElement("div");
    item.className = "inquiry-item";
    item.setAttribute("data-id", inquiry.id);

    const statusText = inquiry.status === "done" ? "답변완료" : "답변대기";
    const statusClass = inquiry.status === "done" ? "done" : "waiting";

    let fileHTML = "";
    if (inquiry.file) {
      if (isImage(inquiry.file.name)) {
        fileHTML = `
          <div class="file-attachment">
            <div>첨부 이미지:</div>
            <img src="${inquiry.file.url}" alt="${inquiry.file.name}">
          </div>
        `;
      } else {
        fileHTML = `
          <div class="file-attachment">
            첨부파일: <a href="${inquiry.file.url}" class="file-link" target="_blank">${inquiry.file.name}</a>
          </div>
        `;
      }
    }

    const modifyButtons = `
      <div class="modify-buttons">
        <button class="edit-btn" onclick="editInquiry(${inquiry.id})">수정</button>
        <button class="delete-btn" onclick="deleteInquiry(${inquiry.id})">삭제</button>
      </div>
    `;

    item.innerHTML = `
      <div class="inquiry-header">
        <div class="inquiry-title-type">
          <div class="inquiry-title">${inquiry.title}</div>
          <div class="inquiry-type">${inquiry.type}</div>
          <div class="inquiry-meta">${inquiry.date}</div>
        </div>
        <div class="inquiry-status ${statusClass}">${statusText}</div>
      </div>
      <div class="inquiry-content-wrapper">
        <div class="inquiry-content">
          ${inquiry.content}
          ${fileHTML}
          ${modifyButtons}
        </div>
      </div>
    `;

    const header = item.querySelector(".inquiry-header");
    const wrapper = item.querySelector(".inquiry-content-wrapper");
    const content = item.querySelector(".inquiry-content");

    wrapper.style.height = "0px";
    wrapper.style.overflow = "hidden";
    wrapper.style.transition = "height 0.3s ease";

    header.addEventListener("click", () => {
  const isOpen = item.classList.contains("open");

  if (isOpen) {
    // 닫기
    content.style.opacity = "0";
    content.style.visibility = "hidden";
    wrapper.style.height = content.scrollHeight + "px";
    requestAnimationFrame(() => {
      wrapper.style.height = "0px";
    });
    item.classList.remove("open");

  } else {
    // ✨ 1️⃣ 내용 먼저 보이게 만들기
    content.style.opacity = "1";
    content.style.visibility = "visible";

    // ✨ 2️⃣ 그 다음 height 조정
    wrapper.style.height = content.scrollHeight + "px";
    item.classList.add("open");

    wrapper.addEventListener("transitionend", () => {
      if (item.classList.contains("open")) {
        wrapper.style.height = "auto";
      }
    }, { once: true });
  }
});
    list.appendChild(item);
  });

  function editInquiry(id) {
    alert(`수정 페이지로 이동: inquiry_edit.html?id=${id}`);
    // 실제로는 window.location.href 사용 가능
  }

  function deleteInquiry(id) {
    if (confirm("정말 삭제할까요?")) {
      const item = document.querySelector(`.inquiry-item[data-id='${id}']`);
      if (item) {
        item.remove();

        const remainingItems = document.querySelectorAll(".inquiry-item");
        if (remainingItems.length === 0) {
          const list = document.getElementById("inquiryList");
          list.innerHTML = `<div class="no-inquiry">작성한 문의가 없습니다.</div>`;
        }
      }
    }
  }
