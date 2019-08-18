const
   express = require('express'),
   app = express(),
   bodyParser = require('body-parser'),
   router = require('./Router'),
   cors = require('cors')


app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('../public'))

router(app)

app.listen(1200, () => console.log(`Server is running: at port: 1200`))