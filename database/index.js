//users 1(admin), 2(trainer), 3(cliente)
var users = [
  { id:1, nombre:'admin', email:'admin@test.com', contrasena:'123456', rol:1 },
  { id:2, nombre:'trainer1', email:'trainer1@test.com', contrasena:'123456', rol:2 },
  { id:3, nombre:'trainer2', email:'trainer2@test.com', contrasena:'123456', rol:2 },
  { id:4, nombre:'trainer3', email:'trainer3@test.com', contrasena:'123456', rol:2 },
  { id:5, nombre:'cliente1', email:'cliente1@test.com', contrasena:'123456', rol:3 },
  { id:6, nombre:'cliente2', email:'cliente2@test.com', contrasena:'123456', rol:3 },
  { id:7, nombre:'cliente3', email:'cliente3@test.com', contrasena:'123456', rol:3 },
]

var vinculos = [
  { id:1, idtrainer:2, idcliente:5 },
  { id:2, idtrainer:2, idcliente:6 },
  { id:3, idtrainer:3, idcliente:6 }
]

module.exports = {
  users,
  vinculos
}
