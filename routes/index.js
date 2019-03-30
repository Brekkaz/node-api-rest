const express = require('express')
const usersCtrl = require('../controllers/users')
const vinculosCtrl = require('../controllers/vinculos')
const auth = require('../middlewares/auth')
const vinculoExist = require('../middlewares/vinculos')
const api = express.Router()

//users
api.post('/users', usersCtrl.createUser)
api.get('/users', auth, usersCtrl.readUsers)
api.put('/users/:userId', auth, usersCtrl.updateUser)
api.delete('/users/:userId', auth, usersCtrl.deleteUser)
api.post('/users/login', usersCtrl.loginUser)
api.get('/users/rol/:rolId', auth, usersCtrl.readUsersByRol)

//vinculos
api.post('/vinculos', vinculoExist, vinculosCtrl.createVinculo)
api.get('/vinculos', vinculosCtrl.readVinculos)
api.put('/vinculos/:vinculoId', vinculoExist, vinculosCtrl.updateVinculo)
api.delete('/vinculos/:vinculoId', vinculosCtrl.deleteVinculo)
api.get('/vinculos/user/:userId', vinculosCtrl.readVinculosOfUser)

module.exports = api


  

  