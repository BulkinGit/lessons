document.addEventListener('click', function (e) {

  const targeClick = e.target;
  if (targeClick.closest('.navigation__menu-icon')) {
    document.documentElement.classList.toggle('burger-open')
    e.preventDefault()
  }
}
)