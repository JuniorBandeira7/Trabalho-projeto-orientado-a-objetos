const express = require('express')
const router = express.Router()
const app = express()
const port = 3000

const appController = require('../controllers/appController')

router.get('/:name', appController.app)


module.exports = router