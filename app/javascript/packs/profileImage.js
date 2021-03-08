import imageToBase64 from "./modules/imageToBase64"

const form = document.getElementById('edit_author')
const selectedImage = document.getElementById('selected_image')
const avatar = document.getElementById('author_avatar')
const imageInput = document.getElementById('upload_new_image')
const deleteBtn = document.getElementById('delete_author_avatar')

// Add event listeners to upload and delete image
imageInput.addEventListener('change', () => {
  imageToBase64(imageInput.files[0], insertBase64)
})
deleteBtn.addEventListener('click', deleteAuthorAvatar)

// Set the image input to base64 string to save
function insertBase64(base64String) {
  selectedImage.classList.remove('hidden')
  selectedImage.src = base64String
  avatar.value = base64String
}

// Remove image input and submit the form
function deleteAuthorAvatar(e) {
  e.preventDefault()
  selectedImage.src = ''
  avatar.value = ''
}

// Show avatar image if it exists
setTimeout(() => {
  insertBase64(avatar.value)
}, 100)