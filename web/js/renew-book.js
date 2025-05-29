function slideCategory(dir) {
    const viewport = document.querySelector(".category-slider-viewport");
    viewport.scrollBy({ left: dir * 200, behavior: "smooth" });
  }
  
  function switchTerm(term) {
    document.querySelectorAll(".renew-term-tabs button").forEach(btn => {
      btn.classList.toggle("active", btn.textContent.includes(term === 'weekly' ? '주간' : '월간'));
    });
  }
  
  function slideBooksRenew(direction) {
    const bookList = document.getElementById('renewBookList');
    const scrollAmount = 160 * 5 + 20 * 4;
    bookList.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }