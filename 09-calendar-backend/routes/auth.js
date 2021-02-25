const { Router } = require('express')
const { check } = require('express-validator')
const { createUser, loginUser, renewToken } = require('../controllers/auth')
const { fieldsValidator } = require('../middlewares/fields-validator')

const router = Router()

router.post(
  '/new',
  [
    check('name').not().isEmpty().trim().escape().withMessage({
      message: 'Name is required.',
      errorCode: 400
    }),
    check('email').normalizeEmail().isEmail().withMessage('Email is required.'),
    check('password')
      .not()
      .isEmpty()
      .withMessage()
      .isLength({ min: 6, max: 20 })
      .withMessage({
        message: 'Password should be between 6 and 20 characters.',
        errorCode: 400
      }),
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
      .withMessage({
        message: 'Password should be between 6 and 20 characters.',
        errorCode: 400
      }),
    fieldsValidator
  ],
  loginUser
)
router.get('/renew', renewToken)

module.exports = router
