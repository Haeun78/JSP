const allFaqs = [
    { category: "상품정보", 
    question: "도서 등록정보 오류가 있습니다.", 
    answer: "책광장모두에 등록되어 있는 도서정보에 오류가 있을 경우 1:1 문의로 접수해\n주시거나 아래의 메일로 전달해 주시면 확인 후 즉시 수정 하겠습니다. \n modoo@koreabook.or.kr" 
    },

    { category: "상품정보", 
    question: "일시품절/품절/절판인 도서를 다른 도서와 같이 주문할 수 있나요?", 
    answer: "일시품절 도서는 다른 도서와 함께 주문하실 수 없습니다. \n일시품절인 도서 상세페이지를 보시면 장바구니 버튼이 활성화되어 있지 않은 것을 보실 수 있습니다. \n일시품절 도서는 나의 관심도서에 넣어두셨다가 일시품절 해제 후 주문하여 주시기 바랍니다. " },

    { category: "상품정보", 
    question: "도서 상세페이지의 ‘바로구매’는 어떤 기능인가요?", 
    answer: "‘바로구매’는 다른 도서와 함께 구매하지 않고 조회 상품만 간편 주문하시는 기능입니다. \n다른 도서와 함께 구매하시려면 ‘장바구니’를 이용하시기 바랍니다.   " },

    { category: "상품정보", 
    question: "주문한 도서가 품절이거나 절판인 경우 구할 수 없나요?", 
    answer: "도서 주문 후 출판사의 재고 상황에 따라 출고가 불가할 수 있습니다. 주문 이후에 도서가 품절이거나 절판인 것을 확인한 경우 도서 재고 확보가 어려워 안내와 함께 환불처리 됩니다. 결품으로 인한 부분 취소는 고객센터에서 처리가 가능합니다. T.070-7711-3455" },

    { category: "회원가입", 
    question: "회원정보 변경은 어떻게 하나요?", 
    answer: "회원 로그인 후 마이페이지-회원정보 수정에서 수정이 가능합니다. ※ 탈퇴 후 재가입 시, 아이디 변경이 가능하며 기존 주문내역, 적립금, 할인쿠폰 등은 사라집니다. " },

    { category: "회원가입", 
    question: "회원에서 탈퇴하고 싶어요", 
    answer: "로그인 후 마이페이지-회원 정보 수정 하단의 회원탈퇴 버튼으로 가능합니다. 탈퇴 시 회원 정보 및 기존 주문, 배송 내역, 적립금 등은 복구가 불가합니다. 회원 아이디에 대해서는 서비스 이용의 혼선을 방지하고자 탈퇴 후 동일 아이디로 재가입은 허용되지 않습니다." },

    { category: "회원가입", 
    question: " ‘모두같이’에 파트너사로 입점하고 싶습니다.", 
    answer: "조합 담당자와 입점 계약 체결 후 SCM에 가입하여 입점서점을 생성한 이후 운영할 수 있습니다. 자세한 내용은 각 서점 담당자를 통해 문의하시거나 디지털정보팀으로 문의해 주시면 친절히 안내해드리겠습니다. T.070-7119-1758" },

    { category: "회원가입", 
    question: "아이디/비밀번호를 잊어버렸어요.", 
    answer: "*아이디(ID) 찾기-로그인 화면에서 아이디 찾기 탭을 선택한 후 휴대폰 번호와 이메일을 통해 본인 인증 후 아이디를 확인하실 수 있습니다. *비밀번호(PASSWORD) 찾기-로그인 화면에서 비밀번호 찾기 탭을 선택한 후 휴대폰 번호와 이메일을 통해 본인 인증 후 확인하실 수 있습니다. " },

    { category: "회원가입", 
    question: "회원 가입은 어떻게 하나요?", 
    answer: " 회원 가입은 본인 명의의 휴대전화로 인증 후 진행됩니다. 성인 인증도 동시에 진행되므로 꼭 1번은 진행해 주셔야 합니다." },

    { category: "주문/결제", 
    question: "비회원도 주문할 수 있나요?", 
    answer: "책광장모두는 회원으로 로그인하셔야 이용이 가능합니다. 회원 가입 후 책광장모두에서 드리는 다양한 혜택을 받아보세요!" },

    { category: "주문/결제", question: "이용 가능한 결제 수단은 어떤 것이 있나요?", answer: "신용카드, 계좌이체, 무통장입금 등이 있습니다." },

    { category: "주문/결제", question: "현금영수증은 어떻게 신청하나요?", answer: "주문 시 발급 여부를 선택하실 수 있습니다." },

    { category: "주문/결제", question: "반품/교환이 안되는 상품도 있나요?", answer: "일부 상품은 반품이 제한될 수 있습니다." },
    { category: "주문/결제", question: "반품/교환이 안되는 상품도 있나요?", answer: "일부 상품은 반품이 제한될 수 있습니다." },
    { category: "주문/결제", question: "반품/교환이 안되는 상품도 있나요?", answer: "일부 상품은 반품이 제한될 수 있습니다." },
    { category: "주문/결제", question: "반품/교환이 안되는 상품도 있나요?", answer: "일부 상품은 반품이 제한될 수 있습니다." },
    { category: "주문/결제", question: "반품/교환이 안되는 상품도 있나요?", answer: "일부 상품은 반품이 제한될 수 있습니다." },
    { category: "주문/결제", question: "반품/교환이 안되는 상품도 있나요?", answer: "일부 상품은 반품이 제한될 수 있습니다." },
    { category: "주문/결제", question: "반품/교환이 안되는 상품도 있나요?", answer: "일부 상품은 반품이 제한될 수 있습니다." },
    { category: "주문/결제", question: "반품/교환이 안되는 상품도 있나요?", answer: "일부 상품은 반품이 제한될 수 있습니다." },
    { category: "주문/결제", question: "반품/교환이 안되는 상품도 있나요?", answer: "일부 상품은 반품이 제한될 수 있습니다." },
    { category: "주문/결제", question: "반품/교환이 안되는 상품도 있나요?", answer: "일부 상품은 반품이 제한될 수 있습니다." },
    { category: "주문/결제", question: "반품/교환이 안되는 상품도 있나요?", answer: "일부 상품은 반품이 제한될 수 있습니다." },
    { category: "주문/결제", question: "반품/교환이 안되는 상품도 있나요?", answer: "일부 상품은 반품이 제한될 수 있습니다." },

    { category: "기타", question: "고객센터 전화번호/문의처?", answer: "02-701-0805 / modoobook@koreabook.or.kr" },
    { category: "기타", question: "고객센터 전화번호/문의처?", answer: "02-701-0805 / modoobook@koreabook.or.kr" },

    { category: "배송안내", question: "고객센터 전화번호/문의처?", answer: "02-701-0805 / modoobook@koreabook.or.kr" },
    { category: "배송안내", question: "고객센터 전화번호/문의처?", answer: "02-701-0805 / modoobook@koreabook.or.kr" },
    { category: "배송안내", question: "고객센터 전화번호/문의처?", answer: "02-701-0805 / modoobook@koreabook.or.kr" },
    { category: "배송안내", question: "고객센터 전화번호/문의처?", answer: "02-701-0805 / modoobook@koreabook.or.kr" },

    ];

    let currentCategory = "all";
    let currentPage = 1;
    const itemsPerPage = 10;

    const faqList = document.getElementById("faqList");
    const pagination = document.getElementById("pagination");

    // 탭 클릭 시 필터링
    document.querySelectorAll(".faq-tabs button").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".faq-tabs button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.dataset.category;
        currentPage = 1;
        renderFaqs();
      });
    });

    // 필터링 후 목록 출력
    function renderFaqs() {
      const filtered = currentCategory === "all" ? allFaqs : allFaqs.filter(faq => faq.category === currentCategory);
      const start = (currentPage - 1) * itemsPerPage;
      const paginated = filtered.slice(start, start + itemsPerPage);

      faqList.innerHTML = paginated.map(faq => `
      <li>
        <button class="faq-question">Q ${faq.question}</button>
        <div class="faq-answer">A ${faq.answer.replace(/\n/g, "<br>")}</div>
      </li>`).join("");


      pagination.innerHTML = "";
      const totalPages = Math.ceil(filtered.length / itemsPerPage);
      for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        if (i === currentPage) btn.classList.add("active");
        btn.addEventListener("click", () => {
          currentPage = i;
          renderFaqs();
        });
        pagination.appendChild(btn);
      }

      // 아코디언 기능
      document.querySelectorAll(".faq-question").forEach(btn => {
        btn.addEventListener("click", () => {
          const answer = btn.nextElementSibling;
          answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
      });
    }

    // 초기 렌더링
    renderFaqs();