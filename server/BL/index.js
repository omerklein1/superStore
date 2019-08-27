const
     DL_Mongo = require('../DL_Mongo'),
    DL_SQL = require('../DL_SQL'),
    products = require('./products')(DL_SQL),
    categories = require('./categories')(DL_SQL),
    subCategories = require('./subCategories')(DL_SQL),
    users = require('./users')(DL_SQL)

module.exports = { products ,categories, subCategories, users } 
