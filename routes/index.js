const express = require('express')
const usersCtrl = require('../controllers/users')
const vinculosCtrl = require('../controllers/vinculos')

const api = express.Router()

//users
api.get('/users', usersCtrl.readUsers)
api.get('/users/rol/:rolId', usersCtrl.readUsersByRol)

//vinculos
api.get('/vinculos', vinculosCtrl.readVinculos)
api.post('/vinculos', vinculosCtrl.createVinculo)

/*api.put('/user/:userId', userCtrl.updateUser)
api.delete('/user/:userId', userCtrl.deleteUser)*/

module.exports = api


  

  