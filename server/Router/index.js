const myEmail = 'oklein.website@gmail.com';
const nodemailer = require('nodemailer');
const mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: myEmail,
        pass: 'aviad555'
    }
});

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
            console.log('result', result)
            res.send(result)
        }
        catch (err) {
            res.send(err)
        }
    })

    app.put('/newProduct', async (req, res) => {
        try {
            const { body } = req,
                result = await BL.products.create(body)
            console.log('result', result)
            res.send(result)
        }
        catch (err) {
            res.send(err)
        }
    })

    app.put('/signin', async (req, res) => {
        try {
            const { body } = req,
                result = await BL.users.create(body)
            console.log('result', result)
            const mailOptions = {
                from: myEmail,
                to: body.email || myEmail,
                subject: 'אישור רישום לאתר Electro-klein',
                html: `<h1> ${body.userName || ""} ברוכים הבאים </h1><p>הרישום בוצע בהצלחה! ,${body.userName || ''}</p><p>קניה מהנה</p>`
                // text: 'תודה על רכישתך באתר בעלות  57,765ש"ח'
            };

            mail.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            res.send(result)
        }
        catch (err) {
            res.send(err)
        }
    })
    app.get('/users', async (req, res) => {


        const result = await BL.users.read()
        res.send(result)

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