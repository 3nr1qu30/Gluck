const formulario = document.getElementById('formulario'),
inputs = document.querySelectorAll('#formulario input')/* ,
nombre = document.getElementById('nombre'),
apellidos = document.getElementById('apellidos'),
email = document.getElementById('email'),
edad = document.getElementById('edad'),
telefono = document.getElementById('telefono'),
cedula = document.getElementById('cedula'),
calle = document.getElementById('calle'),
numext = document.getElementById('numext'),
colonia = document.getElementById('colonia'),
cp = document.getElementById('cp'),
delegacion = document.getElementById('delegacion'),
entidad = document.getElementById('entidad'),
password = document.getElementById('password');  */

const expReg = {
    nombre: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+([ ][a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/
}

const validarFormulario = (e) => {
    console.log(e.target.name);
    switch (e.target.name){
        case "NombreForm":
            if(e.target.name === "NombreForm"){
                console.log(`yo siempre me pasa`);
            }
            else{

            }
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("abrase alv si solo va a jugar");
}); 
    
/* const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const nombre = document.getElementById('nombre'),
apellidos = document.getElementById('apellidos'),
email = document.getElementById('email'),
edad = document.getElementById('edad'),
telefono = document.getElementById('telefono'),
curp = document.getElementById('curp'),
sexo = document.getElementById('sexo'),
tipodiabetes = document.getElementById('tipodiabetes'),
password = document.getElementById('password');

const expReg = {
    nombre: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+([ ][a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/,
    apellidos: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+([ ][a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*[ ][a-zA-ZáéíóúÁÉÍÓÚñÑ]+([ ][a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    edad: /^\d+$/,
    telefono: /^\+?\d{1,3}\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
    curp: /^[A-Z\d]{18}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.#])[A-Za-z\d$@$!%*?&.#]{8,35}$/
}

const validarFormulario = (e) => {
    console.log(e.target.name);
}

/* inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("abrase alv si solo va a jugar");
});
*/