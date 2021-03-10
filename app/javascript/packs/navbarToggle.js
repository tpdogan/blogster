const burger = document.querySelector('.navbar-burger')
burger.addEventListener('click', () => {
  const dataTarget = burger.dataset.target
  const target = document.getElementById(dataTarget)

  if (target.classList.contains('is-active')) {
    target.classList.remove('is-active')
    burger.classList.remove('is-active')
  } else {
    target.classList.add('is-active')
    burger.classList.add('is-active')
  }
})