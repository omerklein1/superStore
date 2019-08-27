const
    Users = DL => {

        async function create(user) {

            if (!user.userName) throw 'please add name'
            if (typeof user.userName != 'string') throw 'name must be string'

                        return DL.create('users' , user)
        }

        async function read() {

            return DL.read('users')

        }


        // async function update(product) {
        //     if (!product.id) throw 'Must get id'
        //     return DL.update('products', product)

        // }



        // async function update(task) {

        //     return DL.update(task)

        // }

        // async function del(id) {

        //     return DL.del(id)

        // }

        return { create, read, /* readOne, update, del */ }

    }

module.exports = Users
