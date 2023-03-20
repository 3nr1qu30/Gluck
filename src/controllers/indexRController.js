const bodyParser = require("body-parser");
const llaves = require('../database/llaves');
const encrypt = require('../helper/handleBcrypt');
const controller ={};

controller.index = (req, res) => {
    res.render('index');
};

controller.registros = (req,res) =>{
    res.render('registros');
};

controller.registroPaciente = (req,res) =>{
    res.render('registroPaciente');
};

controller.registroDoctor = (req,res) =>{
    res.render('registroDoctor');
};
controller.registroPacientePost = (req,res) =>{
  const {NombreForm,ApellidosForm,EmailForm,EdadForm,
    TelefonoForm,CurpForm,sexo,tipo,PassForm} = req.body;
    console.log(CurpForm);
  llaves.buscarPacientes(CurpForm, (err, resultado) => {
    if (err) {
      console.log(err);
      return res.render('index');
    }
    else if(resultado==='no existe'){
      llaves.registrarPacientes(CurpForm,EmailForm,PassForm,NombreForm,ApellidosForm,sexo,
        EdadForm,tipo,TelefonoForm,(err,resultado)=>{
          if(err){
            console.log('Paciente no registrado');
          }
          else if(resultado){
            console.log('Paciente registrado con exito')
          }
        });
    }
    else{
      console.log('Curp registrada con anterioridad');
    }
});
};

controller.registroDoctorPost = (req,resultado) =>{
  const {NombreForm,ApellidosForm,EmailForm,EdadForm,TelefonoForm,
    CedulaForm,sexo,CalleForm,NuExForm,ColoniaForm,CodigoPostalForm,DelMunForm,EnFeForm,
    PassForm} = req.body;
    llaves.buscarDoctores(CedulaForm,(err,resultado)=>{
      if (err) {
        console.log(err);
        return res.render('index');
      }
      else if(resultado==='no existe'){
        llaves.registrarDoctores(CedulaForm,EmailForm,PassForm,NombreForm,ApellidosForm,sexo,
          CalleForm,NuExForm,ColoniaForm,DelMunForm,CodigoPostalForm,EnFeForm,TelefonoForm,EdadForm, (err,resultado)=>{
            if(err){
              console.log('Doctor no registrado');
            }
            else if(resultado){
              console.log('Doctor registrado con exito');
            }
          });
      }
      else{
        console.log('Cedula registrada con anterioridad');
      }
    });
  };
controller.inicioSesion = (req,res)=>{
  res.render('inicioSesion');
};

controller.inicioSesionPost = (req,res)=>{
  const {UsuarioForm,contrasena} = req.body
  llaves.login(UsuarioForm,contrasena,(err,resultado)=>{
    if(resultado){
      console.log(resultado)
    }
  })
};

module.exports = controller; 
