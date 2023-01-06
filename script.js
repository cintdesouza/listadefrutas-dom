const main = document.createElement(`main`)
main.classList.add(`main`)
document.querySelector(`body`).appendChild(main)

const figure = document.createElement(`figure`)
figure.classList.add(`parteFigure`)
main.appendChild(figure)

const img = document.createElement(`img`)
img.classList.add(`imagemLogo`)
img.src = "./assets/vidafrutaLogoAlternativo.png"
figure.appendChild(img)


const divPrincipal = document.createElement(`div`)
divPrincipal.classList.add(`divPrincipal`)
main.appendChild(divPrincipal)


let arr = [`Banana`, `Morango`, `Goiaba`, `Pêssego`]

for (i = 0; i < arr.length; i++) {
    let fruta = arr[i]
    let button = document.createElement(`button`)
    button.classList.add(`button`)
    button.innerHTML = `${fruta}`
    divPrincipal.appendChild(button)
}

const footer = document.createElement(`footer`)
footer.classList.add(`footer`)
document.querySelector(`body`).appendChild(footer)

const pfooter = document.createElement(`p`)
pfooter.classList.add(`pfooter`)
pfooter.innerHTML = `vidafruta © kenzie academy brasil`
footer.appendChild(pfooter)