import imageToBase64 from "./imageToBase64"

function insertImageAsBase64(input = HTMLInputElement, output = [], deleter = HTMLButtonElement) {
  input.addEventListener('change', () => {
    if (input.files.length != 0) {
      imageToBase64(input.files[0], writeOut)
    }
  })

  function writeOut(base64String) {
    output.forEach(element => {
      if (element instanceof HTMLInputElement) {
        element.value = base64String
      } else if (element instanceof HTMLImageElement) {
        element.src = base64String
      } else {
        element.innerHTML = base64String
      }
    })
  }

  if (deleter) {
    deleter.addEventListener('click', (e) => {
      e.preventDefault()
      writeOut('')
    })
  }
}

export default insertImageAsBase64