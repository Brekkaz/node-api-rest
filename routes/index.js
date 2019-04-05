const express = require('express')
const api = express.Router()
const usersCtrl = require('../controllers/users')
const vinculosCtrl = require('../controllers/vinculos')
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

api.get('/test/:hour', (req, res) => res.status(200).send({ 
    dateparams: req.params.hour,
    date: moment("2018-12-9").calendar(),
    hour: moment(req.params.hour).format("hh:mm:ss K")
  }))

module.exports = api


  

  