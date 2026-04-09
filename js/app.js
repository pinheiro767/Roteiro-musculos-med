
function buscarMusculo(){

let termo=document.getElementById("busca").value.toLowerCase()
let area=document.getElementById("resultados")
area.innerHTML=""

MUSCULOS.forEach(m=>{

if(m.toLowerCase().includes(termo)){

let card=document.createElement("div")
card.className="card"

let titulo=document.createElement("h4")
titulo.innerText=m

let foto=document.createElement("button")
foto.innerText="Tirar foto"
foto.onclick=()=>tirarFoto(card)

let importar=document.createElement("input")
importar.type="file"
importar.accept="image/*"
importar.multiple=true
importar.onchange=(e)=>importarArquivo(card,e)

card.appendChild(titulo)
card.appendChild(foto)
card.appendChild(importar)

area.appendChild(card)

}

})

}
