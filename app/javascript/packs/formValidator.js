// Input to validate
const titleInput = document.getElementById('article_title')
const bodyInput = document.getElementById('article_body')
const imageInput = document.getElementById('article_image')
const tagsInput = document.getElementById('article_tags')

// Form and submit to listen
const form = document.getElementById('new_article')
const submit = document.getElementById('article_publish')
submit.addEventListener('click', (e) => {
  e.preventDefault()
  let submit = true
  // Checks for title
  if (titleInput.value.length < 10) {
    showError(document.getElementById('article_title_error'))
    submit = false
  }

  // Checks for body
  if (bodyInput.value.length < 100 || bodyInput.value.length > 1000) {
    showError(document.getElementById('article_body_error'))
    submit = false
  }

  // Checks for image
  if (!imageInput.value) {
    showError(document.getElementById('article_image_error'))
    submit = false
  }

  // Checks for tags
  if (!tagsInput.value) {
    showError(document.getElementById('article_tags_error'))
    submit = false
  }

  // Submit if all good
  if (submit) { form.submit() }
})

function showError(element) {
  element.classList.remove('hidden')
  setTimeout(() => {
    element.classList.add('hidden')
  }, 3000)
}