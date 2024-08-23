const express = require('express')
const router = express.Router()
const app = express()
const port = 3000

const homeController = require('../controllers/homeController')

router.get('/', homeController.showHome)


module.exports = router