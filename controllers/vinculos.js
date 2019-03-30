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
  let vinculoId = req.params.vinculoId

  db.vinculos.map(vinculo => {
    if (vinculo.id == vinculoId) {
      vinculo.idtrainer = req.body.idtrainer,
      vinculo.idcliente = req.body.idcliente
    }
  })

  return res.status(200).send({ status: 200, message: 'el vinculo se ha actualizado' })
}

function deleteVinculo (req, res) {
  let vinculoId = req.params.vinculoId
  db.vinculos = db.vinculos.filter(vinculo => vinculo.id != vinculoId)

  return res.status(200).send({ status: 200, message: 'el vinculo se ha eliminado' })
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
  readVinculosOfUser
}
/*


function readUsersByRol(req, res) {
  res.status(200).send(utilsService.pagination(req, db.users.filter(user => user.rol == req.params.rolId)))
}


*/