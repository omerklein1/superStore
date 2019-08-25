const
    uniqid = require('uniqid'),
    Products = DL => {

        // async function create(task) {

        //     if (!task.name) throw 'please add name'
        //     if (typeof task.name != 'string') throw 'name must be string'

        //     task.id = uniqid()
        //     task.status = 'new'

        //     return DL.create(task)

        // }

        async function read() {

            return DL.read('products')

        }


        async function update(item) {
            if (!item.id) throw 'Must get id'
            return DL.update('products', item)

        }



        // async function update(task) {

        //     return DL.update(task)

        // }

        // async function del(id) {

        //     return DL.del(id)

        // }

        return { /* create, */ read, /* readOne, */ update, /* del */ }

    }

module.exports = Products
