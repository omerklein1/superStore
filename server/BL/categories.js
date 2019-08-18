const
    uniqid = require('uniqid'),
    Categories = DL => {

        // async function create(task) {

        //     if (!task.name) throw 'please add name'
        //     if (typeof task.name != 'string') throw 'name must be string'

        //     task.id = uniqid()
        //     task.status = 'new'

        //     return DL.create(task)

        // }

        async function read() {

            return DL.read('categories')

        }

       

        // async function update(task) {

        //     return DL.update(task)

        // }

        // async function del(id) {

        //     return DL.del(id)

        // }

        return { /* create, */ read/* , readOne, update, del */ }

    }

module.exports = Categories
