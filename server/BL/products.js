const
    uniqid = require('uniqid'),
    Products = DL => {

        async function create(product) {

            if (!product.name) throw 'please add name'
            if (typeof product.name != 'string') throw 'name must be string'

                        return DL.create('products' , product)
        }

        async function read() {

            return DL.read('products')

        }


        async function update(product) {
            if (!product.id) throw 'Must get id'
            return DL.update('products', product)

        }



        // async function update(task) {

        //     return DL.update(task)

        // }

        // async function del(id) {

        //     return DL.del(id)

        // }

        return { create, read, /* readOne, */ update, /* del */ }

    }

module.exports = Products
