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
    nombre: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+([ ][a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/,
    apellidos: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+([ ][a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*[ ][a-zA-ZáéíóúÁÉÍÓÚñÑ]+([ ][a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    edad: /^[1-9][0-9]$/,
    telefono: /^\d{10}$/,
    cedula: /^\d[0-9]{7}$/,
    calle: /^\d+\s+([a-zA-Z]+\s)*[a-zA-Z]+$/,
    numext: /^\d{1,4}[A-Za-z]?$/,
    colonia: /^[a-zA-Z]+\s?([a-zA-Z]+\s?)*[a-zA-Z]*$/,
    cp: /^\d{5}$/,
    delegacion: /^[a-zA-Z]+\s?([a-zA-Z]+\s?)*[a-zA-Z]*$/,
    entidad: /^(Aguascalientes|Baja California|Baja California Sur|Campeche|Chiapas|Chihuahua|Ciudad de México|Coahuila|Colima|Durango|Estado de México|Guanajuato|Guerrero|Hidalgo|Jalisco|Michoacán|Morelos|Nayarit|Nuevo León|Oaxaca|Puebla|Querétaro|Quintana Roo|San Luis Potosí|Sinaloa|Sonora|Tabasco|Tamaulipas|Tlaxcala|Veracruz|Yucatán|Zacatecas)$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.#])[A-Za-z\d$@$!%*?&.#]{8,35}$/
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "NombreForm":
            if(expReg.nombre.test(e.target.value)){
                document.querySelector('#grupo_nombre .input_nombre_error').classList.remove('input_nombre_error-activo');
            }
            if(!(expReg.nombre.test(e.target.value))){
                document.querySelector('#grupo_nombre .input_nombre_error').classList.add('input_nombre_error-activo');            }
            if(e.target.value === ""){
                document.querySelector('#grupo_nombre .input_nombre_error').classList.remove('input_nombre_error-activo');
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
    