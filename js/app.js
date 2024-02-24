const fondo = document.querySelector('body')
const nombreColor = document.getElementById('nombreColor')
const boton = document.getElementById('boton')
const letras = '0123456789ABCDEF';
function changeColor(e){
    let color = '';
    while (color.length < 6){
        color += letras[Math.floor(Math.random() * 16)]
    }
    fondo.style.backgroundColor = `#${color}`
    nombreColor.innerHTML = `#${color}`
}
boton.addEventListener('click', changeColor)