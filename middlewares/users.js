const db = require('../database')

function userExist (req, res, next) {

  if (!db.users.find(user => user.id == req.params.userId)) {
    return res.status(423).send({
      status: 423,
      message: 'el usuario no existe'
    })
  }
  
  next()
}


module.exports = userExist