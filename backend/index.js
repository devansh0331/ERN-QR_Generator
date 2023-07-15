const express = require('express')
const app = express()
const cors = require('cors')
const qrRouter = require('./qrCodeRouter')

app.use(express.json()) // To pass json data request
app.use(cors()) // To avoid cors policy request
app.use('/api' , qrRouter)

const port = 5000

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})