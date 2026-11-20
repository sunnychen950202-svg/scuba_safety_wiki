const slides = Array.from(document.querySelectorAll('.slide'));
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
const progress = document.querySelector('#progress');
let current = 0;

function showSlide(index) {
  if (index < 0 || index >= slides.length) return;

  slides[current].hidden = true;
  current = index;
  slides[current].hidden = false;
  progress.textContent = `${current + 1} / ${slides.length}`;
  previous.disabled = current === 0;
  next.disabled = current === slides.length - 1;
  slides[current].querySelector('h1, h2').focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

previous.addEventListener('click', () => showSlide(current - 1));
next.addEventListener('click', () => showSlide(current + 1));

document.addEventListener('keydown', (event) => {
  if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey ||
      event.shiftKey || event.target.closest('input, textarea, select, [contenteditable]')) return;

  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showSlide(current + (event.key === 'ArrowRight' ? 1 : -1));
  }
});

for (const question of document.querySelectorAll('.questions fieldset')) {
  const feedback = question.querySelector('.feedback');
  question.addEventListener('change', (event) => {
    const correct = event.target.value === question.dataset.answer;
    feedback.dataset.result = correct ? 'correct' : 'incorrect';
    feedback.textContent = `${correct ? '答對了！' : '這題答錯了。'}${question.dataset.explanation}`;
  });
}
