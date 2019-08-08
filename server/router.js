const
   express = require('express'),
   app = express(),
   bodyParser = require('body-parser'),
   router = require('./router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('../public'))

router(app)

app.listen(config.port, () => console.log(`Server is running: at port ${config.port}`))
