const express = require('express')
var morgan = require('morgan')

const app = express()
const port = 3000
// Http logger
app.use(morgan('combined'))
app.get('/', (req, res) => {
    res.send('Phạm Hoàng Sang')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})