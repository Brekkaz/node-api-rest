const config = require('../config')

function pagination(req, vArray) {
  const vUrl = `${req.protocol}://${req.headers.host}${req.baseUrl}${req.path}`
  const page = parseInt(req.query.page && req.query.page > 0 ? req.query.page : config.page)
  const pageSize = parseInt(req.query.pageSize && req.query.pageSize > 0 ? req.query.pageSize : config.pageSize)
  let offset = page == 1 ? 0 : (page-1) * pageSize
  
  let vres = {}
  vres.data = vArray.slice(offset, offset+pageSize)
  vres.total = vArray.length
  vres.page = page
  vres.pageSize = pageSize

  if (page > 1) vres.prev_link = `${vUrl}?pageSize=${pageSize}&page=${page-1}`
  if ((page + 1) <= (vArray.length / pageSize)) vres.next_link = `${vUrl}?pageSize=${pageSize}&page=${page+1}`

  return vres;
}

module.exports = {
  pagination
}