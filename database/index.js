//users 1(admin), 2(trainer), 3(cliente)
var users = [
  { id:1, nombre:'ad-boss', email:'ad-boss@test.com', contrasena:'123456', rol:1 },
  { id:2, nombre:'tr-jhon', email:'tr-jhon@test.com', contrasena:'123456', rol:2 },
  { id:3, nombre:'tr-doe', email:'tr-doe@test.com', contrasena:'123456', rol:2 },
  { id:4, nombre:'tr-ipsum', email:'tr-ipsum@test.com', contrasena:'123456', rol:2 },
  { id:5, nombre:'cl-dummy', email:'cl-dummy@test.com', contrasena:'123456', rol:3 },
  { id:6, nombre:'cl-nick', email:'cl-nick@test.com', contrasena:'123456', rol:3 },
  { id:7, nombre:'cl-lorem', email:'cl-lorem@test.com', contrasena:'123456', rol:3 },
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
