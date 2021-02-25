const { response } = require('express')
const { validationResult } = require('express-validator')

const fieldsValidator = (req, res = response, next) => {
  // error handler
  const errors = validationResult(req)
  if (!errors.isEmpty())
    return res.status(400).json({
      ok: false,
      errors: errors.mapped() // array()
    })
  next()
}

module.exports = { fieldsValidator }
