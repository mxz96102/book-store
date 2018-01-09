let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let db = require('../db')
let pw = require('./unit/passwd')

function validUserPsw(user, passwd) {
  let {dataValues: {Passwd: pwd}} = user

  if (pw.encode(passwd) === pwd) return true
  else return false
}

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({where: { username: username }}).then(user => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.', done: false });
      }
      if (!validUserPsw(user, password)) {
        return done(null, false, { message: 'Incorrect password.', done: false });
      }
      return done(null, user.dataValues);
    });
  }
));

module.exports = passport;
