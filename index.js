let boton = document.getElementById("cambiar-color")
let color =document.getElementById("color") 
  function cambiarColor(){
    let digitos = "0123456789ABCDEF"
    let colorhex = "#"
    for (let i = 0; i < 6; i++){
      let indiceAleatorio = Math.floor(Math.random() * 16)
     colorhex += digitos[indiceAleatorio] 
    }
    return colorhex
  }
 boton.addEventListener("click", function (){
   let colorAleatorio =cambiarColor()
   color.textContent =colorAleatorio
   document.body.style.backgroundColor = colorAleatorio
 })
