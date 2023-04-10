const formulario = document.getElementById('formulario'),
inputs = document.querySelectorAll('#formulario input');

const expReg = {
    nombre: /^([A-ZÁÉÍÓÚÑ][a-záéíóúñ]{1,}\s?)+$/,
    apellidos: /^[A-ZÑñ][a-zñáéíóúü]+\s[A-ZÑñ][a-zñáéíóúü]+$/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    edad: /^[1-9][0-9]$/,
    telefono: /^\d{10}$/,
    cedula: /^\d[0-9]{7}$/,
    calle: /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s\d#-]+$/,
    numext: /^\d{1,4}[A-Za-z]?$/,
    colonia: /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]+$/,
    cp: /^\d{5}$/,
    delegacion: /^[a-zA-Z]+\s?([a-zA-Z]+\s?)*[a-zA-Z]*$/,
    entidad: /^(Aguascalientes|Baja California|Baja California Sur|Campeche|Chiapas|Chihuahua|Ciudad de México|CDMX|Coahuila|Colima|Durango|Estado de México|Guanajuato|Guerrero|Hidalgo|Jalisco|Michoacán|Morelos|Nayarit|Nuevo León|Oaxaca|Puebla|Querétaro|Quintana Roo|San Luis Potosí|Sinaloa|Sonora|Tabasco|Tamaulipas|Tlaxcala|Veracruz|Yucatán|Zacatecas)$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.#])[A-Za-z\d$@$!%*?&.#]{8,35}$/
}

//yo esa

const campos = {
    nombre: false,
    apellidos: false,
    edad: false,
    telefono: false,
    cedula: false,
    calle: false,
    numext: false,
    colonia: false,
    cp: false,
    delegacion: false,
    entidad: false,
    password: false,
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "NombreForm":
            if(expReg.nombre.test(e.target.value)){
                document.querySelector('#grupo_nombre .input_nombre_error').classList.remove('input_nombre_error-activo');
            }
            if(!(expReg.nombre.test(e.target.value))){
                document.querySelector('#grupo_nombre .input_nombre_error').classList.add('input_nombre_error-activo');            
            }
            if(e.target.value === ""){
                document.querySelector('#grupo_nombre .input_nombre_error').classList.remove('input_nombre_error-activo');
            }     
        break;
        case "ApellidosForm":
            if(expReg.apellidos.test(e.target.value)){
                document.querySelector('#grupo_apellido .input_apellidos_error').classList.remove('input_apellidos_error-activo');
            }
            if(!(expReg.apellidos.test(e.target.value))){
                document.querySelector('#grupo_apellido .input_apellidos_error').classList.add('input_apellidos_error-activo'); 
            }
            if(e.target.value === ""){
                document.querySelector('#grupo_apellido .input_apellidos_error').classList.remove('input_apellidos_error-activo');
            }     
        break;
        case "EmailForm":
            if(expReg.email.test(e.target.value)){
                document.querySelector('#grupo_email .input_email_error').classList.remove('input_email_error-activo');
            }
            if(!(expReg.email.test(e.target.value))){
                document.querySelector('#grupo_email .input_email_error').classList.add('input_email_error-activo');            }
            if(e.target.value === ""){
                document.querySelector('#grupo_email .input_email_error').classList.remove('input_email_error-activo');            }     
        break;
        case "EdadForm":
            if(expReg.edad.test(e.target.value)){
                document.querySelector('#grupo_edad .input_edad_error').classList.remove('input_edad_error-activo');
            }
            if(!(expReg.edad.test(e.target.value))){
                document.querySelector('#grupo_edad .input_edad_error').classList.add('input_edad_error-activo');            }
            if(e.target.value === ""){
                document.querySelector('#grupo_edad .input_edad_error').classList.remove('input_edad_error-activo');
            }     
        break;
        case "TelefonoForm":
            if(expReg.telefono.test(e.target.value)){
                document.querySelector('#grupo_telefono .input_telefono_error').classList.remove('input_telefono_error-activo');
            }
            if(!(expReg.telefono.test(e.target.value))){
                document.querySelector('#grupo_telefono .input_telefono_error').classList.add('input_telefono_error-activo');            }
            if(e.target.value === ""){
                document.querySelector('#grupo_telefono .input_telefono_error').classList.remove('input_telefono_error-activo');
            }     
        break;
        case "CedulaForm":
            if(expReg.cedula.test(e.target.value)){
                document.querySelector('#grupo_cedula .input_cedula_error').classList.remove('input_cedula_error-activo');
            }
            if(!(expReg.cedula.test(e.target.value))){
                document.querySelector('#grupo_cedula .input_cedula_error').classList.add('input_cedula_error-activo');            }
            if(e.target.value === ""){
                document.querySelector('#grupo_cedula .input_cedula_error').classList.remove('input_cedula_error-activo');
            }     
        break;
        case "CalleForm":
            if(expReg.calle.test(e.target.value)){
                document.querySelector('#grupo_calle .input_calle_error').classList.remove('input_calle_error-activo');
            }
            if(!(expReg.calle.test(e.target.value))){
                document.querySelector('#grupo_calle .input_calle_error').classList.add('input_calle_error-activo');            }
            if(e.target.value === ""){
                document.querySelector('#grupo_calle .input_calle_error').classList.remove('input_calle_error-activo');
            }     
        break;
        case "NuExForm":
            if(expReg.numext.test(e.target.value)){
                document.querySelector('#grupo_numext .input_numext_error').classList.remove('input_numext_error-activo');
            }
            if(!(expReg.numext.test(e.target.value))){
                document.querySelector('#grupo_numext .input_numext_error').classList.add('input_numext_error-activo');            }
            if(e.target.value === ""){
                document.querySelector('#grupo_numext .input_numext_error').classList.remove('input_numext_error-activo');
            }     
        break;
        case "ColoniaForm":
            if(expReg.colonia.test(e.target.value)){
                document.querySelector('#grupo_colonia .input_colonia_error').classList.remove('input_colonia_error-activo');
            }
            if(!(expReg.colonia.test(e.target.value))){
                document.querySelector('#grupo_colonia .input_colonia_error').classList.add('input_colonia_error-activo');            }
            if(e.target.value === ""){
                document.querySelector('#grupo_colonia .input_colonia_error').classList.remove('input_colonia_error-activo');
            }     
        break;
        case "CodigoPostalForm":
            if(expReg.cp.test(e.target.value)){
                document.querySelector('#grupo_cp .input_cp_error').classList.remove('input_cp_error-activo');
            }
            if(!(expReg.cp.test(e.target.value))){
                document.querySelector('#grupo_cp .input_cp_error').classList.add('input_cp_error-activo');            }
            if(e.target.value === ""){
                document.querySelector('#grupo_cp .input_cp_error').classList.remove('input_cp_error-activo');
            }     
        break;
        case "DelMunForm":
            if(expReg.delegacion.test(e.target.value)){
                document.querySelector('#grupo_delegacion .input_delegacion_error').classList.remove('input_delegacion_error-activo');
            }
            if(!(expReg.delegacion.test(e.target.value))){
                document.querySelector('#grupo_delegacion .input_delegacion_error').classList.add('input_delegacion_error-activo');            }
            if(e.target.value === ""){
                document.querySelector('#grupo_delegacion .input_delegacion_error').classList.remove('input_delegacion_error-activo');
            }     
        break;
        case "EnFeForm":
            if(expReg.entidad.test(e.target.value)){
                document.querySelector('#grupo_entidad .input_entidad_error').classList.remove('input_entidad_error-activo');
            }
            if(!(expReg.entidad.test(e.target.value))){
                document.querySelector('#grupo_entidad .input_entidad_error').classList.add('input_entidad_error-activo');           }
            if(e.target.value === ""){
                document.querySelector('#grupo_entidad .input_entidad_error').classList.remove('input_entidad_error-activo');
            }     
        break;
        case "PassForm":
            if(expReg.password.test(e.target.value)){
                document.querySelector('#grupo_password .input_password_error').classList.remove('input_password_error-activo');
            }
            if(!(expReg.password.test(e.target.value))){
                document.querySelector('#grupo_password .input_password_error').classList.add('input_password_error-activo');           }
            if(e.target.value === ""){
                document.querySelector('#grupo_password .input_password_error').classList.remove('input_password_error-activo');
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
    document.querySelector('#grupo_enviar .error_enviar').classList.add('error_enviar-activo');
}); 
    