var express = require('express');
var router = express.Router();
var db = require('../db');
let pd = require('./unit/passwd');

router.get('/', (req, res) => {
  if (!req.session.UserID)
    res.json({message: "not login" ,done: false})
  else
    db.User.findOne({where: {ID: req.session.UserID}}).then(
      u => {
        if(u) {
          let data = u.dataValues
          delete data.Passwd

          res.json({done: true, user:data})
        } else res.json({done: false})
      }
    )
})

router.post('/login',
  (req, res) => {
    db.User.findOne({where: {username: req.body.username}})
      .then(u => {
        if(u) {
          if (u.dataValues.Passwd === pd.encode(req.body.password)){
            req.session.UserID = u.dataValues.ID
            res.json({done: true})
          } else
            res.json({message: "wrong password", done: false})
        } else {
          res.json({message: "username not exits", done: false})
        }
      })
  }
);

router.post('/login_out',
  (req, res) => {
    req.session.UserID = null
    res.json({done: true})
  }
)

router.post('/register',
  (req, res) => {
    console.log(req)
    db.User.findOne({where: {username: req.body.username}})
      .then(u => {
        if(!u) {
          db.User.create({
            UserName: req.body.username,
            Passwd: pd.encode(req.body.password)
          }).then(e => {
            res.json({done: true})
          })
        } else {
          res.json({message: "username exits", done: false})
        }
      })

  }
)

module.exports = router;
