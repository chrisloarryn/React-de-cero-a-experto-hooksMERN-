const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const generateJWT = (uid, name) =>
  promisify(jwt.sign)({ uid, name }, process.env.SECRET_JWT_SEED, {
    expiresIn: '2h'
  })

module.exports = { generateJWT }
