const db = require('../database')
const utilsService = require('../services/utils')
const usersService = require('../services/users')

function createUser(req, res) {
  let user = {
    id: db.users.length + 1,
    apellido: req.body.apellido,
    nombre: req.body.nombre,
    email: req.body.email,
    contrasena: req.body.contrasena,
    direccion: req.body.direccion,
    celular: req.body.celular,
    rol: req.body.rol
  }

  db.users.push(user)

  return res.status(201).send({ token: usersService.createToken(user) })
}

function readUsers(req, res) {
  return res.status(200).send(utilsService.pagination(req, db.users))
}

function updateUser(req, res) {
  let userId = req.params.userId

  db.users.map(user => {
    if (user.id == userId) {
      user.nombre = req.body.nombre,
      user.apellido = req.body.apellido,
      user.email = req.body.email,
      user.contrasena = req.body.contrasena,
      user.direccion = req.body.direccion,
      user.celular = req.body.celular,
      user.rol = req.body.rol
    }
  })

  return res.status(200).send({ status: 200, message: 'el usuario se ha actualizado' })
}

function deleteUser(req, res) {
  let userId = req.params.userId
  db.users = db.users.filter(user => user.id != userId)

  return res.status(200).send({ status: 200, message: 'el usuario se ha eliminado' })
}

function readUserById(req, res) {
  return res.status(200).send({
    user:db.users.find(user => user.id == req.params.userId)
  })
}

function readUsersByRol(req, res) {
  res.status(200).send(utilsService.pagination(req, db.users.filter(user => user.rol == req.params.rolId)))
}

function loginUser(req, res) {
  let user = db.users.find(user => user.email == req.body.email && user.contrasena == req.body.contrasena)
  
  if (!user) return res.status(403).send({
    status: 403,
    message: 'error de autenticacion'
  })

  return res.status(200).send({ token: usersService.createToken(user) })
}


module.exports = {
  createUser,
  loginUser,
  readUsers,
  readUsersByRol,
  updateUser,
  deleteUser,
  readUserById
}
