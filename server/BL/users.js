

const
    Users = DL => {

        async function create(user = {}) {

            if (!user.userName) throw 'please add name'
            if (typeof user.userName != 'string') throw 'name must be string'

            return DL.create('users', user)
        }

        async function read() {

            return DL.read('users')

        }


        return { create, read, /* readOne, update, del */ }

    }

module.exports = Users
