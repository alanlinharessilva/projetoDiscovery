function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // funcao de trocar ao inves do toggle

  //   if (html.classList.contains("light")) {
  //     html.classList.remove("light")
  //   } else {
  //     html.classList.add("light")
  //   }

  //  pegar a tag img

  // substituir a imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // se tiver light toggleMode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  const imgAlt = document.querySelector("#profile img alt")

  if (html.classList.contains("light")) {
    // se tiver light toggleMode, alterar alt da imagem light
    img.setAttribute("alt", "Kayk com oculos escuro")
  } else {
    // se tiver sem light mode, manter alt da imagem
    img.setAttribute("alt", "Avatar Imagem")
  }
}
