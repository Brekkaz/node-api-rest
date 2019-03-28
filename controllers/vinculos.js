const db = require('../database')
const utils = require('../services/utils')

function readVinculos (req, res) {
  res.status(200).send(utils.pagination(
    req, 
    db.vinculos.filter(vinculo => {
      vinculo.trainer = db.users.find(user=>user.id==vinculo.idTrainer).nombre
      vinculo.cliente = db.users.find(user=>user.id==vinculo.idcliente).nombre
      return vinculo
    })
  ))
}

function createVinculo (req, res) {
  res.status(200).send({ idTrainer: req.body.idTrainer, idCliente:req.body.idCliente })
}

module.exports = {
  readVinculos,
  createVinculo
}