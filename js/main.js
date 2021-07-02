const btnMode = document.getElementById('switch');

btnMode.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnMode.classList.toggle('active');
});

// RETURN
const btnReturn = document.getElementById('return');

btnReturn.addEventListener('click', () => {
  window.scroll(0, 0);
})