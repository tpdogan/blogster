import imageToBase64 from "./modules/imageToBase64"

const selectedImage = document.getElementById('selected_new_image')
const avatar = document.getElementById('author_avatar')
const imageInput = document.getElementById('upload_new_image')
imageInput.addEventListener('change', () => {
  imageToBase64(imageInput.files[0], insertBase64)
})

function insertBase64(base64String) {
  selectedImage.classList.remove('hidden')
  selectedImage.src = base64String
  avatar.value = base64String
}