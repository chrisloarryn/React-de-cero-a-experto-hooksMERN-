/**
 * Users Routes / Auth routes
 * host + /api/auth
 */

const { Router } = require('express')
const { check } = require('express-validator')
const { createUser, loginUser, renewToken } = require('../controllers/auth')
const { fieldsValidator } = require('../middlewares/fields-validator')
const { validateJWT } = require('../middlewares/validate-jwt')

const router = Router()

router.post(
  '/new',
  [
    check('name')
      .not()
      .isEmpty()
      .trim()
      .escape()
      .withMessage('Name is required.'),
    check('email').normalizeEmail().isEmail().withMessage('Email is required.'),
    check('password')
      .not()
      .isEmpty()
      .withMessage()
      .isLength({ min: 6, max: 20 })
      .withMessage('Password should be between 6 and 20 characters.'),
    fieldsValidator
  ],
  createUser
)
router.post(
  '/',
  [
    check('email').normalizeEmail().isEmail().withMessage('Email is required.'),
    check('password')
      .not()
      .isEmpty()
      .withMessage()
      .isLength({ min: 6, max: 20 })
      .withMessage('Password should be between 6 and 20 characters.'),
    fieldsValidator
  ],
  loginUser
)
router.get('/renew', validateJWT, renewToken)

module.exports = router
