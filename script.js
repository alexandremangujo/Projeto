function toggleMode() {
   const html = document.documentElement

  // if(html.classList.contains('light')) {
 //   html.classlist.remove('light')
 //  } else {
 //   html.classlist.add('light')
  // }


  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

  if (html.classList.contains('light')){
     img.setAttribute('src' , './avatar-light-bg.png')
  }else {
     img.setAttribute('src' , './avatar.png')
  }

  //Pegar a tag Img
  //Substituir a Imagem 
  //Se tiver light mode adicionar a imagem light 
  //Se estiver sem light mode manter a imagem normal 
}