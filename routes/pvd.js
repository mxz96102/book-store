var express = require('express');
var router = express.Router();
var db = require('../db');

router.get("/",
  async function (req, res) {
    if (req.session.UserID) {
      let re = await db.Provider.findOne({where:{UserID : req.session.UserID}})

      if(re) {
        res.json({info: re ,done: true})
      } else
        res.json({message: "not provider" ,done: false})
    }
     else
      res.json({message: "not login" ,done: false})
  }
)

router.post("/",
  async function (req, res) {
    if (req.session.UserID) {
      let re = await db.User.findOne({where:{ID : req.session.UserID}})

      if(re && re.dataValues.Role === 'admin') {
        let one = await db.Provider.create({
          Name: req.body.name,
          Info: req.body.info,
          UserID: req.session.UserID
        })

        if(one) {
          res.json({done: true})
        } else
          res.json({message: "not success" ,done: false})
      } else
        res.json({message: "not admin" ,done: false})
    } else
      res.json({message: "not login" ,done: false})
  }
)

router.post("/book",
  async function (req, res) {
    if (req.session.UserID) {
      let re = await db.Provider.findOne({where:{UserID : req.session.UserID}})

      if(re) {
        let last = await db.BookProvider.findOne({where: {
          BookNo: req.body.bookNo,
          ProviderNo: re.dataValues.ProviderNo,
        }})

        if (last) {
          let one = await last.updateAttributes({
            Inventory: parseInt(req.body.inventory) + parseInt(last.dataValues.Inventory),
          })
          if (one) {
            res.json({done: true})
          }else
            res.json({message: "not success" ,done: false})

        } else {
          let one = await db.BookProvider.create({
            Inventory: req.body.inventory,
            BookNo: req.body.bookNo,
            ProviderNo: re.dataValues.ProviderNo,
            ProviderName: re.dataValues.Name
          })

          if (one) {
            res.json({done: true})
          }else
            res.json({message: "not success" ,done: false})
        }
      } else
        res.json({message: "not provider" ,done: false})
    } else
      res.json({message: "not login" ,done: false})
  }
)



module.exports = router;