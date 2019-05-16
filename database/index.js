//users 1(admin), 2(trainer), 3(cliente)
var users = [
  { id:1, nombre:'admin', apellido:'admin', email:'admin@test.com', contrasena:'123456', direccion:'calle 1 #1-2', celular:3012223333, rol:1 },
  { id:2, nombre:'trainer1', apellido:'trainer1', email:'trainer1@test.com', contrasena:'123456', direccion:'calle 1 #1-2', celular:3012223333, rol:2 },
  { id:3, nombre:'trainer2', apellido:'trainer2', email:'trainer2@test.com', contrasena:'123456', direccion:'calle 1 #1-2', celular:3012223333, rol:2 },
  { id:4, nombre:'trainer3', apellido:'trainer3', email:'trainer3@test.com', contrasena:'123456', direccion:'calle 1 #1-2', celular:3012223333, rol:2 },
  { id:5, nombre:'cliente1', apellido:'cliente1', email:'cliente1@test.com', contrasena:'123456', direccion:'calle 1 #1-2', celular:3012223333, rol:3 },
  { id:6, nombre:'cliente2', apellido:'cliente2', email:'cliente2@test.com', contrasena:'123456', direccion:'calle 1 #1-2', celular:3012223333, rol:3 },
  { id:7, nombre:'cliente3', apellido:'cliente3', email:'cliente3@test.com', contrasena:'123456', direccion:'calle 1 #1-2', celular:3012223333, rol:3 },
  { id:8, nombre:'cliente4', apellido:'cliente4', email:'cliente4@test.com', contrasena:'123456', direccion:'calle 1 #1-2', celular:3012223333, rol:3 }
]

var vinculos = [
  { id:1, idtrainer:2, idcliente:5 },
  { id:2, idtrainer:2, idcliente:6 },
  { id:3, idtrainer:3, idcliente:6 }
]

var citas = [
  { id:1, idtrainer:2, idcliente:5, fecha:"2019-04-09", hora:"18:04", estado:1 },
  { id:1, idtrainer:2, idcliente:4, fecha:"2019-04-09", hora:"18:00", estado:1 },
]

module.exports = {
  users,
  vinculos,
  citas
}
