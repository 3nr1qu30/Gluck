const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

passport.use('local-registro',new localStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},(req,username,passport,callback)=>{
    
}));
