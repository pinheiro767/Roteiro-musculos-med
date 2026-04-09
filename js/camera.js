
function tirarFoto(card){

let input=document.createElement("input")
input.type="file"
input.accept="image/*"
input.capture="environment"

input.onchange=(e)=>importarArquivo(card,e)
input.click()

}

function importarArquivo(card,event){

let files=event.target.files

for(let f of files){

let img=document.createElement("img")
img.src=URL.createObjectURL(f)

card.appendChild(img)

}

}
