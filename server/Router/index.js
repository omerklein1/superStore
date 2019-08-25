
const BL = require('../BL')

const Router = app => {

    app.get('/products', async (req, res) => {


        const result = await BL.products.read()
        res.send(result)

    })

    app.get('/categories', async (req, res) => {

        const result = await BL.categories.read()
        res.send(result)

    })

    app.get('/subCategories', async (req, res) => {

        const result = await BL.subCategories.read()
        res.send(result)

    })
    app.put('/products', async (req, res) => {
        try {
            const { body } = req,
            result = await BL.products.update(body)
            res.send(result)
        }
        catch (err) {
            res.send(err)
        }
    })

    // app.post('/tasks', async (req, res) => {

    //     const { body } = req

    //     rest('tasks', 'create', body, res)
    // })

    // app.put('/tasks', async (req, res) => {

    //     const { body } = req

    //     rest('tasks', 'update', body, res)

    // })

    // app.delete('/tasks/:id', async (req, res) => {

    //     const { id } = req.params

    //     rest('tasks', 'del', id, res)

    // })

}

module.exports = Router