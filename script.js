const minhaLista=document.querySelector('#Lista')
const list= minhaLista.querySelector('ul')

 console.log(list.children.length)


function modificadoHtml(){
 let novo ="Item modificado"
 list.children[1].innerHTML=novo
}


function addHtml() {
    list.innerHTML +="<li>Novo item</li>"
    
 }

 function adicionarItem(){
    let novoElemento = document.createElement("li")
    novoElemento.innerHTML="Item criado dinamicamente"
    list.appendChild(novoElemento)
 }

 function senha(){

    const input= document.querySelector('input')
    if(input.type=='password'){
    input.setAttribute('type','Text')
    } else 
    {
     input.setAttribute('type','password')
    }
 }

 list.before("Inicio da Lista")
 list.after("Fim da lista")

function azul(){
   let novaCor= list.children[2].style.color='blue'
if(list.children[2].style.color == 'black'){
novaCor
}
else{
   novaCor.children.style.color = 'black'
   
}
}

function borda(){
   let addBorda = list.children[3].style.fontWeight='bold'
   if(list.children[3].style.color='black'){
      addBorda
   }else{
     list.children[3].style.color='black'
     
   }

}
