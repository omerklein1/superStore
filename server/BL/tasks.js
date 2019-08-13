const
    uniqid = require('uniqid'),
    Tasks = DL => {

        async function create(task) {

            if (!task.name) throw 'please add name'
            if (typeof task.name != 'string') throw 'name must be string'

            task.id = uniqid()
            task.status = 'new'

            return DL.create(task)

        }

        async function read() {

            return DL.read()

        }

        async function readOne(id) {

            return DL.readOne(id)

        }

        async function update(task) {

            return DL.update(task)

        }

        async function del(id) {

            return DL.del(id)

        }

        return { create, read, readOne, update, del }

    }

module.exports = Tasks
