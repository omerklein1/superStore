const
     DL = require('../DL_Mongo'),
    //DL = require('../DL_SQL'),
    tasks = require('./tasks')(DL)

module.exports = { tasks } 
