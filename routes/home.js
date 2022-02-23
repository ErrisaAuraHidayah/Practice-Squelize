const express = require('express')

const verifyToken = require('./../verify-token') // <--
const controller = require('./../controllers/home')

const router = express.Router()

router.get('/', controller.index)
// router.get('/', function (req, res) {
//     res.send('Selamat datang di Perpustakaan')
// })

router.get('/home', verifyToken, controller.home)
// router.get('/home', verifyToken, function (req, res) { // <--
//     res.send({
//         user: req.user
//     })
// })

module.exports = router