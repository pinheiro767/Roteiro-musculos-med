
function gerarPDF(){

const { jsPDF } = window.jspdf
let doc=new jsPDF()

let imgs=document.querySelectorAll("img")
let y=10

imgs.forEach((img,i)=>{

doc.text("Imagem "+(i+1),10,y)
doc.addImage(img.src,'JPEG',10,y+5,60,40)

y+=50

if(y>250){
doc.addPage()
y=10
}

})

doc.save("atlas_miologia_estudo.pdf")

}
