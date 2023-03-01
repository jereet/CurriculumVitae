var ubicacion = false;
var telefono = false; 
var mail = false;
var trabajo = false;
document.getElementById("ubicacion").addEventListener("click", function(){
    if(!ubicacion){
        document.getElementById("mostrarUb").innerHTML = "Avenida Miller 1235";
        ubicacion = true;
    }else{
        document.getElementById("mostrarUb").innerHTML = "";
        ubicacion = false;
    }

})
document.getElementById("telefono").addEventListener("click", function(){
    if(!telefono){
        document.getElementById("mostrarTel").innerHTML = "(935) 838-6345";
        telefono=true;
    }else{
        document.getElementById("mostrarTel").innerHTML = "";
        telefono = false;
    }
})
document.getElementById("mail").addEventListener("click", function(){
    if(!mail){
        document.getElementById("mostrarMail").innerHTML = "steven.arnold@example.com";
        mail=true;
    }else{
        document.getElementById("mostrarMail").innerHTML = "";
        mail = false;
    }

})
document.getElementById("trabajo").addEventListener("click", function(){
    if(!trabajo){
        document.getElementById("mostrarTrab").innerHTML = "SAMSUNG";
        trabajo=true;
    }else{
        document.getElementById("mostrarTrab").innerHTML = "";
        trabajo = false;
    }
})