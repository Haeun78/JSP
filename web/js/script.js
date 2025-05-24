function scrollToYear(year) {
  const column = document.getElementById('year-' + year);
  const timeline = document.querySelector('.timeline-wrapper');
  const marker = document.getElementById('marker');
  const ticks = document.querySelectorAll('.year-tick');

  if (column && timeline) {
    const scrollX = column.offsetLeft - 60;
    timeline.scrollTo({ left: scrollX, behavior: 'smooth' });

    ticks.forEach(t => {
      if (t.innerText === year) {
        const left = t.offsetLeft + t.offsetWidth / 2;
        marker.style.left = `${left}px`;
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector('.timeline-wrapper');
  wrapper.addEventListener('wheel', function (e) {
    e.preventDefault();
    wrapper.scrollLeft += e.deltaY;
  }, { passive: false });
});