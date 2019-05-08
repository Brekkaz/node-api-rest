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
api.post('/users', auth, usersCtrl.createUser)
api.get('/users', auth, usersCtrl.readUsers)
api.put('/users/:userId', auth, userExist, usersCtrl.updateUser)
api.delete('/users/:userId', auth, userExist, usersCtrl.deleteUser)
api.post('/users/login', usersCtrl.loginUser)
api.get('/users/rol/:rolId', auth, usersCtrl.readUsersByRol)
api.get('/users/:userId', auth, userExist, usersCtrl.readUserById)

//vinculos
api.post('/vinculos', auth, vinculosCtrl.createVinculo)
api.get('/vinculos', auth, vinculosCtrl.readVinculos)
api.put('/vinculos/:trainerId/:clienteId', auth, vinculosCtrl.updateVinculo)
api.delete('/vinculos/:trainerId/:clienteId', auth, vinculosCtrl.deleteVinculo)
api.get('/vinculos/user/:userId', auth, vinculosCtrl.readVinculosOfUser)
api.get('/vinculos/:trainerId/:clienteId', auth, vinculosCtrl.readVinculoByIds)

//citas
api.post('/citas', auth, citasCtrl.createCita)
api.get('/citas', auth, citasCtrl.readCitas)
api.put('/citas/:citaId', auth, citasCtrl.updateCita)
api.get('/citas/user/:userId', auth, citasCtrl.readCitasOfUser)
api.delete('/citas/:citaId', auth, citasCtrl.deleteCita)
api.get('/citas/:citaId', auth, citasCtrl.readCitaById)

module.exports = api


  

  