const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passportLocal = require('passport-local').Strategy;

//configuración
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

//importando rutas
const indexR =require('./routers/indexR');
const passport = require('passport');

//peticiones para antes de correr
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
//blibliotecas para el login
app.use(cookieParser('culotesss'));

app.use(session({
  secret:'culotesss',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
//archivos estaticos o complementarios
app.use(express.static(path.join(__dirname,'public')));

//routers
app.use('/', indexR);


//iniciar servidor
app.listen(app.get('port'),()=>{
  console.log('Servidor en el puerto 3000');
});
