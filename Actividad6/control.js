const usuario = document.getElementById("usuario");
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")


form.addEventListener("submit", e=>{
    e.preventDefault()
 // let warnings = ""
    let entrar = true
    let regexUsuario = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)/
    parrafo.innerHTML = ""

    if(usuario.value.length <1){
   
       alert("¡El nombre no es valido!");
    // warnings += `El nombre no es valido <br>`

    console.log=("El nombre no es valido ");
       entrar = false
    }

    if(!regexUsuario.test(usuario.value)){
        
        swal("¡Falta el arroba en el usuario!", "", "warning");
        console.log=("¡Falta el arroba en el usuario!");
     // warnings += `Falta el arroba en el usuario <br>`
        entrar = false
    }

    if(pass.value.length <1){

    alert("¡La contraseña no es valida!");
    console.log=("¡La contraseña no es valida!");
    //  warnings += `La contraseña no es valida <br>`   
        entrar = false
    }



  /* if(entrar){
        parrafo.innerHTML = warnings
    }else{
        alert("¡Enviado!");
    } 
*/
    if(entrar){
        
        swal("¡Enviado!", "", "success");
        closeModal: true;
       console.log("¡Enviado!");
    // location.reload();
    }

})

