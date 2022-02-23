const express = require('express')

const homeRouter = require('./routes/home') // <--
const authRouter = require('./routes/auth') // <--

const app = express()
app.use(express.json())

app.use('/', homeRouter) // <--
app.use('/', authRouter) // <--

const port = 3000
app.listen(port, () => {
    console.log(`App running in server ${port}`)
})