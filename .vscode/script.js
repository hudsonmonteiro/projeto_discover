function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Passos para inserir o avatar light:
  // 1º - Pegar a tag img [query (pesquisa) pelo selector (seletor)]
  const img = document.querySelector("#profile img")
  // 2º - Tem uma condição: Se tiver a imagem light mode, substituir a imagem light
  if (html.classList.contains("light")) {
    // 3º -  Se tiver a imagem light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // 3º - Se tiver sem  a imagem light mode, manter a imagem normal
    // Obs.: Vai no "if" para ter a condição para trocar a imagem.
    img.setAttribute("src", "./assets/avatar.png")
  }
}

// Tudo isso pode ser trocado por algo mais simples
//if (html.classList.contains("light")) {
//  html.classList.remove("light")
// } else {
//  html.classList.add("light")
// }

// O toggle faz toda essa função, logo acima, que não precisava de escrever
