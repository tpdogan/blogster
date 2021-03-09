// Initialize tag array
let tags = []

// Listen to input for tags to add
const tagInput = document.getElementById('tag_input')
tagInput.addEventListener('input', (e) => {
  // Check if comma is entered
  const lastChar = tagInput.value.substr(-1)
  if (!lastChar.match(/^[0-9a-z]+$/i)) {
    // Check if the tag has more than 3 characters without whitespaces
    const tag = tagInput.value.slice(0,-1).trim().toLowerCase()
    // Give error if tag is not long enough
    if (tag.length < 4) {
      tagError('length')
      tagInput.value = ''
    // Give error if tag already exists
    } else if (tags.includes(tag)) {
      tagError('exist')
    } else {
      // Create tag if conditions are met and clear the input
      createTag(tag)
      addTag(tag)
      tagInput.value = ''
    }
  }
})

function tagError(type) {
  const element = document.getElementById(`article_tags_${type}_error`)
  element.classList.remove('hidden')
  // Remove error after 3 seconds
  setTimeout(() => {
    element.classList.add('hidden')
  }, 3000)
}

function createTag(tag) {
  // Create tag element with string content
  const newTag = document.createElement('div')
  newTag.classList.add('editor__tag')
  newTag.textContent = tag

  // Create delete button
  const cross = document.createElement('i')
  cross.className = 'fal fa-times'
  cross.addEventListener('click', () => {
    cross.parentElement.remove()
    removeTag(tag)
  })
  newTag.appendChild(cross)

  // Add created tag to wrap
  const editorTags = document.querySelector('.editor__tags-wrap')
  editorTags.appendChild(newTag)
}

function addTag(tag) {
  tags.push(tag)
  listTags()
}

function removeTag(tag) {
  const index = tags.indexOf(tag)
  tags.splice(index, 1)
  listTags()
}

function listTags() {
  document.getElementById('article_tags').value = tags.join(', ')
}