var express = require('express');
var router = express.Router();
var db = require('../db');

router.get("/",
  async function (req, res) {
    if (req.session.UserID) {
      let re = await db.Order.findAll({where:{UserID : req.session.UserID}})

      if(re) {
        res.json({data: re ,done: true})
      } else
        res.json({message: "not provider" ,done: false})
    }
    else
      res.json({message: "not login" ,done: false})
  }
)

router.get("/detail/:id",
  async function (req, res) {
    let id = req.params.id

    if (req.session.UserID) {
      let re = await db.Order.findOne({where:{OrderID: id}})

      if (re && re.dataValues.UserID === req.session.UserID) {
        let bl = await db.sequelize.query(`SELECT books.Name as BookName,providers.Name as PvdName,Num from books,providers,orderBooks 
        where books.BookNo = orderBooks.bookNo and
         providers.ProviderNo = orderBooks.ProviderNo
         and OrderID = ${id}`)

        if(bl) {
          res.json({done: true, order: re, books: bl})
        }

      } else
        res.json({message: "not found" ,done: false})
    }
    else
      res.json({message: "not login" ,done: false})
  }
)

router.post("/",
  async function (req,res) {
    if (req.session.UserID) {
      let e = await db.Order.create({
        UserID: req.session.UserID,
        Address: req.body.address,
        state: "已提交",
        Price: req.body.price
      })

      if (e && e.dataValues.OrderID) {
        let id = e.dataValues.OrderID

        req.body.books.map(b => db.OrderBook.create({
          OrderID: id,
          BookNo: b.bookId,
          Provider: b.providerId,
          Num: b.num,
          isPre: !!b.isPre
        }))
      }
    } else
      res.json({message: "not login" ,done: false})
  }
)


module.exports = router;