const Sequelize = require('sequelize')
const sequelize = new Sequelize('bs', 'root', '145223686', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Book = sequelize.define("book",{
  BookNo:  { type: Sequelize.INTEGER, autoIncrement: true , primaryKey: true},
  Name: Sequelize.STRING,
  Price: Sequelize.FLOAT(10,2),
  Mainbook: { type: Sequelize.INTEGER, defaultValue: 0 },
  Publish: Sequelize.STRING
})

Book.sync()

const Author = sequelize.define("author",{
  No: { type: Sequelize.INTEGER, autoIncrement: true , primaryKey: true},
  Author: Sequelize.STRING,
  Weight: Sequelize.INTEGER,
  BookNo: {
    type: Sequelize.INTEGER,
  }
})

Author.sync()

const User = sequelize.define("user", {
  ID: { type: Sequelize.INTEGER, autoIncrement: true , primaryKey: true},
  UserName: Sequelize.STRING,
  Passwd: Sequelize.STRING,
  Address: Sequelize.TEXT,
  Credit: Sequelize.INTEGER,
  Role: {type: Sequelize.ENUM('user','admin','provider'), defaultValue:('user')}
})

User.sync()

const Provider = sequelize.define("provider", {
  ProviderNo: { type: Sequelize.INTEGER, autoIncrement: true , primaryKey: true},
  Name: Sequelize.STRING,
  Info: Sequelize.TEXT,
  UserID: {
  type: Sequelize.INTEGER,
  }
})

Provider.sync()

const BookProvider = sequelize.define("bookProvider", {
  Inventory: Sequelize.INTEGER,
  BookNo: {
    type: Sequelize.INTEGER,
  },
  ProviderNo: {
    type: Sequelize.INTEGER,
  },
  ProviderName: Sequelize.STRING
})

BookProvider.sync()

const Keyword = sequelize.define("keyword",{
  No: { type: Sequelize.INTEGER, autoIncrement: true , primaryKey: true},
  Keyword: Sequelize.STRING,
  BookNo: {
    type: Sequelize.INTEGER,
  }
})

Keyword.sync()

const Order = sequelize.define("order",{
  OrderID: { type: Sequelize.INTEGER, autoIncrement: true , primaryKey: true},
  UserID: {
    type: Sequelize.INTEGER,
  },
  Address: Sequelize.TEXT,
  state: Sequelize.STRING,
  Price: Sequelize.FLOAT(10,2)
})

Order.sync()

const OrderBook = sequelize.define("orderBook", {
  OrderID: {
    type: Sequelize.INTEGER,
  },
  BookNo: {
    type: Sequelize.INTEGER,
  },
  ProviderNo: {
    type: Sequelize.INTEGER,
  },
  Num : Sequelize.INTEGER,
  isPre : {type: Sequelize.BOOLEAN, defaultValue: false}
})

OrderBook.sync()

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

Book.findOne({where: {BookNo : 2}}).then(e=>console.log(e))

module.exports = {
  Author, BookProvider, Book, OrderBook, Order, Keyword, Provider, User, sequelize
}
