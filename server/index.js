const
   express = require('express'),
   app = express(),
   bodyParser = require('body-parser'),
   router = require('./Router'),
   cors = require('cors')


app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('/views'))

router(app)

const port = process.env.PORT || 1200
app.listen(port, () => console.log(`Server is running: at port: ${port}`))