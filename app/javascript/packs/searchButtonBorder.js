const changeButtonBorder = () => {
  const cat_btn = document.querySelectorAll('.cat-card');

  cat_btn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
    btn.style.border = "1px solid white"
  });
  });
}

export { changeButtonBorder }
