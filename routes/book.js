var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/',
  (req,res) => {
    db.Book.findAll().then(
      b => {
        if(b) {
          res.json({data:b, done:true})
        } else res.json({done: false})
      }
    )
  }
)

router.post('/',
  (req,res) => {
    const data = req.body;

    db.Book.create({
      Name: data.name,
      Price: data.price,
      Mainbook: data.mainbook,
      Publish: data.publish
    }).then(
      e => {
        if(e) {
          let bookNo = e.dataValues.BookNo

          JSON.parse(data.author).forEach(
            (e, i) => db.Author.create({
              Author: e,
              BookNo: bookNo,
              Weight: i
            })
          )

          JSON.parse(data.keyword).forEach(
            (e) => db.Keyword.create({
              Keyword: e,
              BookNo: bookNo,
            })
          )

          res.json({done: true})
        } else
          res.json({done: false})
      }
    )
  }
)

router.get('/detail/:id',
  (req,res) => {
    let id = req.params.id;
    console.log(id)
    if (id) {
      db.Book.findOne({where: {BookNo: id} }).then(
        e => {
          console.log(e)
          if(e) {
            let d = e.dataValues;

            db.Keyword.findAll({where: {BookNo: id} }).then(
              e => {
                let keyword = []
                if (e) {
                  keyword = e.map(e => e.Keyword)
                }

                db.Author.findAll({where: {BookNo: id} }).then(
                  e => {
                    let author = []
                    if (e) {
                      author = e.map(e => e.Author)
                    }

                    db.BookProvider.findAll({where: {BookNo: id} }).then(
                      e => {
                        let inventory = 0;
                        e = e ? e : []

                        if(e) e.map(e => inventory += e.Inventory)

                        res.json({
                          id: d.BookNo,
                          name: d.Name,
                          price: d.Price,
                          publish: d.Publish,
                          author, keyword, inventory, provider:e
                        })
                      }
                    )
                  }
                )
              }
            )
          } else res.json({message: "not found", done: false})
        }
      )
    } else {
      res.json({message: "not found", done: false})
    }
  }
)

router.put("/detail/:id",
  async function (req,res) {
    let id = req.params.id;
    if (req.session.UserID) {
      let re = await db.User.findOne({where:{ID : req.session.UserID}})

      if(re && re.dataValues.Role === 'admin') {
        let one = await db.Provider.create({
          Name: req.body.name,
          Info: req.body.info,
          UserID: req.body.UserID
        })

        let book = await db.Book.findOne({where: {BookNo: id} })

        if(book) {
          book.updateAttributes({
            Name: req.body.name,
            Price: req.body.price,
            Mainbook: req.body.mainBook,
            Publish: req.body.publish
          })
        } else
          res.json({message: "not found", done: false})
      } else
        res.json({message: "not admin" ,done: false})
    } else
      res.json({message: "not login" ,done: false})
  }
)

module.exports = router;