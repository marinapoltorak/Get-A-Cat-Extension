let url = 'https://api.thecatapi.com/v1/images/search'
axios.get(url).then(response => {
  document.querySelector('#cat_img_url').src = response.data[0].url

})
