const express = require('express');
const router = express.Router()

const useController = require('../controllers/user')

router.get('/users', useController.index )

router.get('/user/:id', useController.show)

router.post('/user', useController.store)

router.put('/user/:id', useController.update)

router.delete('/user/:id', useController.delete)

module.exports = router