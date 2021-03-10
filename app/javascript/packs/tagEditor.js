// Initialize tag array by adding any existing tag (due to edit)
let tags = document.getElementById('article_tags').value.split(', ')

// Add events to remove tag buttons if any exist (due to edit)
document.querySelectorAll('.editor__removeTag').forEach(item => {
  item.addEventListener('click', () => {
    removeTag(item.parentElement.textContent.trim())
    item.parentElement.remove()
  })
})

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
  cross.className = 'fal fa-times fa-sm'
  const crossWrap = document.createElement('div')
  crossWrap.className = 'editor__removeTag'
  crossWrap.appendChild(cross)
  crossWrap.addEventListener('click', () => {
    removeTag(crossWrap.parentElement.textContent.trim())
    crossWrap.parentElement.remove()
  })
  newTag.appendChild(crossWrap)

  // Add created tag to wrap
  const editorTags = document.querySelector('.editor__tags-wrap')
  editorTags.appendChild(newTag)
}

// Adds the tag to the array and input for form
function addTag(tag) {
  tags.push(tag)
  listTags()
}

// Removes the tag from the array and input for form
function removeTag(tag) {
  const index = tags.indexOf(tag)
  tags.splice(index, 1)
  listTags()
}

// Reports updated tags array to input for form
function listTags() {
  document.getElementById('article_tags').value = tags.join(', ')
}