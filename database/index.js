//users 1(admin), 2(trainer), 3(cliente)
var users = [
  { id:1, nombre:'ad-boss', rol:1 },
  { id:2, nombre:'tr-jhon', rol:2 },
  { id:3, nombre:'tr-doe', rol:2 },
  { id:4, nombre:'tr-ipsum', rol:2 },
  { id:5, nombre:'cl-dummy', rol:3 },
  { id:6, nombre:'cl-nick', rol:3 },
  { id:7, nombre:'cl-lorem', rol:3 },
]

var vinculos = [
  { id:1, idTrainer:2, idcliente:5 },
  { id:2, idTrainer:2, idcliente:6 },
  { id:3, idTrainer:3, idcliente:6 }
]

module.exports = {
  users,
  vinculos
}
