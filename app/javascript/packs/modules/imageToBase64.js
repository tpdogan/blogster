function imageToBase64(imageFile = File, callback = Function) {
  let reader = new FileReader()
  reader.readAsDataURL(imageFile)
  reader.onloadend = imageReady
  
  function imageReady() {
    callback(reader.result)
  }
}

export default imageToBase64