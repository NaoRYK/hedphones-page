const ladoRosa = document.querySelector("#div2");
const ladoCian = document.querySelector("#div1");

const pinkBtn = document.querySelector("#pinkBtn");
const cyanBtn = document.querySelector("#cyanBtn");

const imagen = document.querySelector("#headset");

function ampliarLadoRosa(){

    imagen.classList.add("compra");


    if(ladoRosa.style.width != "100vw"){

        ladoRosa.style.width = "100vw";
        ladoCian.style.width = "0vw";
        console.log("hola1");
     
    }
    else
    {
        ladoRosa.style.width = "50vw";
        ladoCian.style.width = "50vw";
        console.log("hola2");
    }

    
    setTimeout(() => {
        imagen.classList.remove('compra');
    }, 800);
    
    
    

    // pinkBtn.addEventListener("click", ()=>{
        
    // });
}


function ampliarLadoCian(){
    imagen.classList.add("compra");
    if(ladoCian.style.width != "100vw"){
        
        
        ladoCian.style.width = "100vw";
        ladoRosa.style.width = "0vw";
    }
    else{

        ladoRosa.style.width = "50vw";
        ladoCian.style.width = "50vw";
       
    }
    setTimeout(() => {
        imagen.classList.remove('compra');
    }, 800);
    
}




function easterEgg(){

    ladoRosa.style.background = "white";
    ladoCian.style.background = "black";

}



pinkBtn.addEventListener("click", ampliarLadoRosa);
cyanBtn.addEventListener("click", ampliarLadoCian);
