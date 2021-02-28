const { response } = require('express')
const bcrypt = require('bcryptjs')
const User = require('./../models/User')
const { generateJWT } = require('./../helpers/jwt')

const createUser = async (req, res = response) => {
  const { email, password } = req.body
  try {
    let user = await User.findOne({ email }).select('-password -__v')
    if (user)
      return res.status(400).json({
        ok: false,
        msg: `Email registered for user: '${user.name}'.`,
        user
      })
    user = new User(req.body)

    // encrypt password
    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt)

    await user.save()

    // generate token
    const token = await generateJWT(user.id, user.name)

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token
    })
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: 'Please contact the administrator.'
    })
  }
}

const loginUser = async (req, res = response) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    console.log(user)
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: `User with email: '${user.name}', doesn\'t exist'.`
      })
    }
    // compare password
    const validPassword = bcrypt.compareSync(password, user.password)
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Password incorrect.'
      })
    }
    console.log(validPassword)

    // generate token
    const token = await generateJWT(user.id, user.name)

    res.json({
      ok: true,
      uid: user.id,
      name: user.name,
      token
    })
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: 'Please contact the administrator.'
    })
  }
}

const renewToken = async (req, res = response) => {
  const { name, uid } = req

  // generate token
  const token = await generateJWT(uid, name)
  res.json({
    ok: true,
    uid,
    name,
    token
  })
}

module.exports = { createUser, loginUser, renewToken }
