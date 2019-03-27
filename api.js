const express = require('express')
const bodyparser = require('body-parser')
const util = require('util')
const app = express()
const api = express.Router()
const port = process.env.PORT || 3000

//objetos
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

//middlewares
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use('/api', api)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


//server
app.listen(port, () => {
  console.log(`API REST running on http://localhost:${port}`)
})

//rutas
//users
api.get('/users', (req, res) => {
  res.status(200).send(pagination(req, users))
})

api.get('/users/rol/:rolId', (req, res) => {
  res.status(200).send(pagination(req, users.filter(user=>user.rol==req.params.rolId)))
})

//vinculo
api.get('/vinculo', (req, res) => {
  res.status(200).send(pagination(
    req, 
    vinculos.filter(vinculo => {
      vinculo.trainer = users.find(user=>user.id==vinculo.idTrainer).nombre
      vinculo.cliente = users.find(user=>user.id==vinculo.idcliente).nombre
      return vinculo
    })
  ))
})

api.post('/vinculo', (req, res) => {
  res.status(200).send({ idTrainer: req.body.idTrainer, idCliente:req.body.idCliente })
})


api.put('/user/:userId', (req, res) => {
  return res.status(201).send({ token: req })
})
api.delete('/user/:userId', (req, res) => {
  return res.status(201).send({ token: req })
})
api.post('/user', (req, res) => {
  return res.status(201).send({ token: req })
})


//funciones
function pagination(req, vArray) {
  let vUrl = `${req.protocol}://${req.headers.host}${req.baseUrl}${req.path}`
  let offset = parseInt(req.query.offset && req.query.offset > 0 ? req.query.offset : 0)
  let limit = parseInt(req.query.limit && req.query.limit > 0 ? req.query.limit : 10)

  let vres = {}
  vres.data = vArray.slice(offset, offset+limit)
  vres.total = vArray.length

  if ((offset - limit) >= 0) vres.prev_link = `${vUrl}?offset=${offset-limit}&limit=${limit}`
  if ((offset + limit) < vArray.length) vres.next_link = `${vUrl}?offset=${offset+limit}&limit=${limit}`
  
  return vres;
}