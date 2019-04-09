const db = require('../database')
const utilsService = require('../services/utils')

function createVinculo (req, res) {  
  let vinculo =  { 
    id: db.vinculos.length + 1,
    idtrainer: req.body.idtrainer,
    idcliente: req.body.idcliente
  }

  db.vinculos.push(vinculo)

  return res.status(201).send({ 
    status: 201,
    message: 'el vinculo se ha creado'
  })
}

function readVinculos (req, res) {
  res.status(200).send(utilsService.pagination(
    req, 
    db.vinculos.map(vinculo => {
      vinculo.trainer = db.users.find(user=>user.id==vinculo.idtrainer).nombre
      vinculo.cliente = db.users.find(user=>user.id==vinculo.idcliente).nombre
      return vinculo
    })
  ))
}

function updateVinculo (req, res) {
  let trainerId = req.params.trainerId
  let clienteId = req.params.clienteId
  
  db.vinculos.map(vinculo => {
    if (vinculo.idtrainer == trainerId && vinculo.idcliente == clienteId) {
      vinculo.idtrainer = req.body.idtrainer,
      vinculo.idcliente = req.body.idcliente
    }
  })

  return res.status(200).send({ status: 200, message: 'el vinculo se ha actualizado' })
}

function deleteVinculo (req, res) {
  let trainerId = req.params.trainerId
  let clienteId = req.params.clienteId

  db.vinculos = db.vinculos.filter(vinculo => !(vinculo.idtrainer == trainerId && vinculo.idcliente == clienteId))

  return res.status(200).send({ status: 200, message: 'el vinculo se ha eliminado' })
}

function readVinculoByIds(req, res) {
  return res.status(200).send({
    vinculo:db.vinculos.find(vinculo => vinculo.idtrainer == req.params.trainerId && vinculo.idcliente == req.params.clienteId)
  })
}

function readVinculosOfUser (req, res) {
  res.status(200).send(utilsService.pagination(
    req, 
    db.vinculos.filter(vinculo => {
      vinculo.trainer = db.users.find(user=>user.id==vinculo.idtrainer).nombre
      vinculo.cliente = db.users.find(user=>user.id==vinculo.idcliente).nombre
      return vinculo.idtrainer == req.params.userId || vinculo.idcliente == req.params.userId
    })
  ))
}

module.exports = {
  createVinculo,
  readVinculos,
  updateVinculo,
  deleteVinculo,
  readVinculoByIds,
  readVinculosOfUser
}