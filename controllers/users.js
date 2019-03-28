const db = require('../database')
const utils = require('../services/utils')

function readUsers (req, res) {
  return res.status(200).send(utils.pagination(req, db.users))
}

function readUsersByRol (req, res) {
  res.status(200).send(utils.pagination(req, db.users.filter(user=>user.rol==req.params.rolId)))
}

module.exports = {
  readUsers,
  readUsersByRol
}
