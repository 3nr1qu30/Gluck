const express = require('express');
const router = express.Router();

const indexRController = require('../controllers/indexRController');
//rutas
router.get('/', indexRController.index);
router.get('/Registro', indexRController.registros);
router.get('/Registro/Paciente',indexRController.registroPaciente);
router.get('/Registro/Doctor',indexRController.registroDoctor);
router.post('/Registro/Paciente',indexRController.registroPacientePost);
router.post('/Registro/Doctor', indexRController.registroDoctorPost);
router.get('/Inicio-de-sesion', indexRController.inicioSesion);
router.post('/Inicio-de-sesion', indexRController.inicioSesionPost);
module.exports = router;
