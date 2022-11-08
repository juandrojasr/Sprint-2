const myInput = document.querySelector("input");
let usuarios = []

class Usuario{
constructor (n, a, e, c){
this.nombre = n
this.apellido = a
this.email = e
this.contraseña = c
}
}

function ingresoUsuario(){
    let nombreus = document.getElementById("nomus").value;
    let apeus = document.getElementById("apus").value;
    let emailus = document.getElementById("emus").value;
    let contraus = document.getElementById("cous").value;
    usuarios.push(new Usuario(nombreus, apeus, emailus, contraus));
    
}
console.table(usuarios)

myInput.addEventListener("input", () => {
    myInput.setCustomValidity("");
    myInput.checkValidity();

})

myInput.addEventListener("invalid", () =>{
    myInput.setCustomValidity("Por favor llene este campo")
})