import insertImageAsBase64 from './modules/insertImageAsBase64'

insertImageAsBase64(
  document.getElementById('upload_new_image'),
  [
    document.getElementById('article_image'),
    document.getElementById('selected_image')
  ],
  document.getElementById('delete_article_image')
)