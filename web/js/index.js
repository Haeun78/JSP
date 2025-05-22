
//경현 - 자바 스크립트
// 현재 보여주고 있는 슬라이드의 인덱스 (0부터 시작)
    let currentIndex = 0;

    // 슬라이더 전체를 감싸고 있는 요소(=책 카드들이 들어 있는 부모 컨테이너)
    const slider = document.getElementById('bookSlider');

    // 각 책 카드의 너비 (200px) + 카드 사이 간격(margin) 20px
    const itemWidth = 200 + 20; 

    // 화면에 한 번에 보이는 책 카드 수 (예: 4개)
    const visibleCount = 4;

    // 왼쪽 화살표를 눌렀을 때 호출되는 함수
    function slideLeft() {
        // 현재 인덱스가 0보다 크면 (즉, 왼쪽으로 더 갈 수 있다면)
        if (currentIndex > 0) {
            // 인덱스를 하나 줄여서 왼쪽으로 이동
            currentIndex--;

            // 슬라이더를 왼쪽으로 itemWidth만큼 이동시킴 (X축 기준 이동)
            slider.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
        }
    }

    // 오른쪽 화살표를 눌렀을 때 호출되는 함수
    function slideRight() {
        // 현재 인덱스가 (전체 카드 개수 - 화면에 보이는 카드 개수)보다 작으면 오른쪽으로 이동 가능
        if (currentIndex < slider.children.length - visibleCount) {
            // 인덱스를 하나 늘려서 오른쪽으로 이동
            currentIndex++;

            // 슬라이더를 왼쪽으로 itemWidth만큼 이동시킴 (X축 기준)
            slider.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
        }
    }

    //나눔 - 자바스크립트
    function showTab(tab) {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.getElementById('btn-' + tab).classList.add('active');
      document.getElementById('bestseller-tabs').style.display = (tab === 'best') ? 'flex' : 'none';
      document.getElementById('category-tabs').style.display = (tab === 'new') ? 'block' : 'none';
      document.querySelectorAll('.book-grid').forEach(grid => grid.classList.remove('active'));

      if (tab === 'new') {
        document.querySelectorAll('#category-tabs .sub-tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('#category-tabs .sub-tab-btn:nth-child(1)').classList.add('active');
        document.getElementById('cat-cat0').classList.add('active');
      } else {
        document.querySelectorAll('#bestseller-tabs .sub-tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('#bestseller-tabs .sub-tab-btn:nth-child(1)').classList.add('active');
        document.getElementById('cat-best-week').classList.add('active');
      }
    }

    function showCategory(event, categoryId) {
      document.querySelectorAll('.sub-tab-btn').forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
      document.querySelectorAll('.book-grid').forEach(grid => grid.classList.remove('active'));
      document.getElementById('cat-' + categoryId).classList.add('active');
    }

    function scrollCategory(direction) {
      const container = document.querySelector('.scroll-container');
      container.scrollLeft += direction * 200;
    }

    window.onload = function () {
      showTab('new');
    }