const formulario = document.getElementById('formulario');
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
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

document.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("abrase alv si solo va a jugar")
});
