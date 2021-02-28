/**
 * Users Routes / Event routes
 * host + /api/events
 */

const { Router } = require('express')
const { check } = require('express-validator')
const {
  createEvent,
  readEvent,
  updateEvent,
  deleteEvent
} = require('../controllers/events')
const { fieldsValidator } = require('../middlewares/fields-validator')
const { validateJWT } = require('../middlewares/validate-jwt')
const { isDate } = require('./../helpers/isDate')

const router = Router()

// all routes should be validated by middleware
router.use(validateJWT)

// get events from db
router.get('/', readEvent)

// create event
router.post(
  '/',
  [
    check('title')
      .not()
      .isEmpty()
      .trim()
      .escape()
      .withMessage('Name is required.'),
    check('start').custom(isDate).withMessage('Start date is not valid.'),
    check('end').custom(isDate).withMessage('End date is not valid.'),
    fieldsValidator
  ],
  createEvent
)

// update event
router.put('/:id', updateEvent)

// delete event
router.delete('/:id', deleteEvent)

module.exports = router
