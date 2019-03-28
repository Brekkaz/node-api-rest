const express = require('express')
const usersCtrl = require('../controllers/users')
const vinculosCtrl = require('../controllers/vinculos')
const util = require('util')

const api = express.Router()

//users
api.get('/users', usersCtrl.readUsers)
api.get('/users/rol/:rolId', usersCtrl.readUsersByRol)

//vinculos
api.get('/vinculos', vinculosCtrl.readVinculos)
api.post('/vinculos', vinculosCtrl.createVinculo)

//Test
api.get('/test', (req, res) => {
    return res.status(200).send({
        1 : req.protocol,
        2 : req.secure,
        3: util.inspect(req.connection)
    })
})

/*api.put('/user/:userId', userCtrl.updateUser)
api.delete('/user/:userId', userCtrl.deleteUser)*/

module.exports = api


  

  