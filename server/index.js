const BL = require('./BL')

async function rest(collection, action, data, res) {

    let result

    try {

        result = await BL[collection][action](data)

    } catch (error) {

        res.send({ error: error.message || error })

    }

    res.send(result)

}

const Router = app => {

    app.get('/tasks/:id?', async (req, res) => {

        const { id } = req.params

        rest('tasks', id ? 'readOne' : 'read', id, res)

    })

    app.post('/tasks', async (req, res) => {

        const { body } = req

        rest('tasks', 'create', body, res)
    })

    app.put('/tasks', async (req, res) => {

        const { body } = req

        rest('tasks', 'update', body, res)

    })

    app.delete('/tasks/:id', async (req, res) => {

        const { id } = req.params

        rest('tasks', 'del', id, res)

    })

}

module.exports = Router