const usersService = require('../services/users')

function isAuth (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: 'no tiene autorizacion' })
  }

  const token = req.headers.authorization.split(' ')[1]

  usersService.decodeToken(token)
  .then(response => {
    req.user = response
    next()
  })
  .catch(response => {
    console.log(response)
    return res.status(response.status).send(response)
  })
}

module.exports = isAuth