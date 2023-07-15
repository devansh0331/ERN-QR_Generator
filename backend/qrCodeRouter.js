const express = require('express')
const { scanQRCode } = require('./qrCodeController')
const qrRouter = express.Router()

qrRouter.post('/scanQRCode' , scanQRCode)

module.exports = qrRouter