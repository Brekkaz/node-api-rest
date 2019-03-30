const db = require('../database')

function vinculoExist (req, res, next) {
  //si esta creando
  if (!(req.params.vinculoId)) {
    //si existe
    if (db.vinculos.find(vinculo => 
    vinculo.idtrainer == req.body.idtrainer && 
    vinculo.idcliente == req.body.idcliente)) {
      return res.status(423).send({
        status: 423,
        message: 'el vinculo ya existe'
      })
    }
  }
  
  next()
}


module.exports = vinculoExist