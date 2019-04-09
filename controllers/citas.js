const db = require('../database')
const utilsService = require('../services/utils')


function readCitas (req, res) {
  res.status(200).send(utilsService.pagination(
    req, 
    db.citas.map(cita => {
      cita.trainer = db.users.find(user=>user.id==cita.idtrainer).nombre
      cita.cliente = db.users.find(user=>user.id==cita.idcliente).nombre
      return cita
    })
  ))
}

function readCitasOfUser (req, res) {
  res.status(200).send(utilsService.pagination(
    req, 
    db.citas.filter(cita => {
      cita.trainer = db.users.find(user=>user.id==cita.idtrainer).nombre
      cita.cliente = db.users.find(user=>user.id==cita.idcliente).nombre
      return cita.idtrainer == req.params.userId || cita.idcliente == req.params.userId
    })
  ))
}

function createCita (req, res) {  
  let cita = {
    id: db.citas.length + 1,
    idtrainer: req.body.idtrainer,
    idcliente: req.body.idcliente,
    fecha: req.body.fecha,
    hora: req.body.hora,
    estado: req.body.estado,
  }

  db.citas.push(cita)

  return res.status(201).send({ 
    status: 201,
    message: 'la cita se ha creado'
  })
}

function updateCita (req, res) {
  let citaId = req.params.citaId

  db.citas.map(cita => {
    if (cita.id == citaId) {
      cita.idtrainer = req.body.idtrainer
      cita.idcliente = req.body.idcliente
      cita.fecha = req.body.fecha
      cita.hora = req.body.hora
      cita.estado = req.body.estado
    }
  })

  return res.status(200).send({ status: 200, message: 'la cita se ha actualizado' })
}

function deleteCita (req, res) {
  let citaId = req.params.citaId
  db.citas = db.citas.filter(cita => cita.id != citaId)

  return res.status(200).send({ status: 200, message: 'la cita se ha eliminado' })
}

function readCitaById(req, res) {
  return res.status(200).send({
    cita:db.citas.find(cita => cita.id == req.params.citaId)
  })
}


module.exports = {
  readCitas,
  readCitasOfUser,
  createCita,
  updateCita,
  deleteCita,
  readCitaById
}