const express = require('express')
const router = express.Router()
const stocks = require('../controller/stockController.js')
router.use((req,res,next)=>{
    console.log(req.ip,req.url)
    next()
})

router.get('/inventory')

module.exports = router