const responds = document.getElementsByName('comment__respond')
responds.forEach(element => {
  element.addEventListener('click', () => {
    const id = element.id
    const form = document.getElementById(`comment__form-${id}`)
    if (form.classList.contains('hidden')) {
      hideForms()
      form.classList.remove('hidden')
    } else {
      form.classList.add('hidden')
    }
  })
})

function hideForms() {
  document.getElementsByName('comment__form').forEach(element => {
    element.classList.add('hidden')
  })
}