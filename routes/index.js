const express = require('express')
const api = express.Router()
const usersCtrl = require('../controllers/users')
const vinculosCtrl = require('../controllers/vinculos')
const citasCtrl = require('../controllers/citas')
const auth = require('../middlewares/auth')
const vinculoExist = require('../middlewares/vinculos')
const userExist = require('../middlewares/users')

const moment = require('moment')

//users
api.post('/users', usersCtrl.createUser)
api.get('/users', auth, usersCtrl.readUsers)
api.put('/users/:userId', auth, userExist, usersCtrl.updateUser)
api.delete('/users/:userId', auth, userExist, usersCtrl.deleteUser)
api.post('/users/login', usersCtrl.loginUser)
api.get('/users/rol/:rolId', auth, usersCtrl.readUsersByRol)
api.get('/users/:userId', auth, userExist, usersCtrl.readUserById)

//vinculos
api.post('/vinculos', vinculosCtrl.createVinculo)
api.get('/vinculos', vinculosCtrl.readVinculos)
api.put('/vinculos/:trainerId/:clienteId', vinculosCtrl.updateVinculo)
api.delete('/vinculos/:trainerId/:clienteId', vinculosCtrl.deleteVinculo)
api.get('/vinculos/user/:userId', vinculosCtrl.readVinculosOfUser)
api.get('/vinculos/:trainerId/:clienteId', vinculosCtrl.readVinculoByIds)

//citas
api.post('/citas', citasCtrl.createCita)
api.get('/citas', citasCtrl.readCitas)
api.put('/citas/:citaId', citasCtrl.updateCita)
api.get('/citas/user/:userId', citasCtrl.readCitasOfUser)
api.delete('/citas/:citaId', citasCtrl.deleteCita)
api.get('/citas/:citaId', citasCtrl.readCitaById)

module.exports = api


  

  