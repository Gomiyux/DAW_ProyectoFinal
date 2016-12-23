/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/*MUESTRA EL CONTENIDO DE JUMBOTRON*/
function show(){
    

    if(document.getElementById("oculto_principal").style.display=="none"){
    document.getElementById("oculto_principal").style.display="block";
    document.getElementById("botonampli").textContent='Ver Menos';
    document.getElementById("footer").style.position="relative";
    
    }
    else{
    document.getElementById("oculto_principal").style.display="none";
    document.getElementById("botonampli").textContent='Ver Más';
    document.getElementById("footer").style.position="relative";
    }
    
}


/*Desplegar Menu pantallas pequeñas*/
function desplegar_menu(){
    
    if(document.getElementById("menu_desplegable").style.display=="none"){
        
        document.getElementById("menu_desplegable").style.display="block"
        document.getElementById("footer").style.position="relative";    
        
        
    }
    else{
        document.getElementById("menu_desplegable").style.display="none"
        document.getElementById("footer").style.position="relative";
        
    }   
}
window.onresize = function() {
    
    
    if (window.innerWidth >= 768) {  
        
        document.getElementById("menu_desplegable").style.display="none"
        document.getElementById("footer").style.position="absolute";
        
    }
    
}