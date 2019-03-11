export default {
  load: (src,type='js')  => {
    console.log('sssssss')
    let s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src,
    document.body.appendChild(s);
  },
  alert: s => alert(s),
  fileToImage(file){
    let image = null
    if (file) {
      image = URL.createObjectURL(file)
    }
    return image
  }
}
