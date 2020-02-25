const slider = document.querySelector('.items');
let isDown = false;
// record where the initial click is is positioned
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return; // Stop the function from running if isDown is false;
  e.preventDefault();

  const x = e.pageX - slider.offsetLeft;
  //   For every pixel moved it is multiplied by the number to speed up the process.
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});
