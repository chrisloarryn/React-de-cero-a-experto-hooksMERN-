const { response } = require('express')

const createUser = (req, res = response) => {
  const { email, name, password } = req.body
  if (name.length < 5) {
    return res.status(400).json({
      ok: false,
      msg: 'Invalid username'
    })
  }
  res.status(201).json({
    ok: true,
    msg: 'register',
    name,
    email,
    password
  })
}

const loginUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'login',
    name,
    email
  })
}

const renewToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew'
  })
}

module.exports = { createUser, loginUser, renewToken }
