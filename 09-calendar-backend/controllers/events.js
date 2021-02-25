const { response } = require('express')
const Event = require('./../models/Event')

const createEvent = async (req, res = response) => {
  const event = new Event({ ...req.body, user: req.uid })
  try {
    const savedEvent = await event.save()
    res.json({
      ok: true,
      event: savedEvent
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      ok: false,
      msg: 'Please contact administrator.'
    })
  }
}
const readEvent = async (req, res = response) => {
  const events = await Event.find().populate({
    path: 'user',
    select: '-password -__v'
  })
  return res.status(200).json({
    ok: true,
    events
  })
}
const updateEvent = async (req, res = response) => {
  const eventId = req.params.id
  const { uid } = req

  try {
    const event = await Event.findById(eventId)
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: `There is no such event for the event id: '${eventId}'`
      })
    }
    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: `You don't have permission to edit this event`
      })
    }

    const newEvent = {
      ...req.body,
      user: uid
    }
    const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, {
      new: true,
      runValidators: true
    })
    return res.json({
      ok: true,
      event: updatedEvent
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      ok: false,
      msg: 'Please contact administrator.'
    })
  }
}
const deleteEvent = async (req, res = response) => {
  const eventId = req.params.id
  const { uid } = req

  try {
    const event = await Event.findById(eventId)
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: `There is no such event for the event id: '${eventId}'`
      })
    }
    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: `You don't have permission to delete this event`
      })
    }

    await Event.findByIdAndDelete(eventId)

    return res.json({ ok: true })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      ok: false,
      msg: 'Please contact administrator.'
    })
  }
}

module.exports = { createEvent, readEvent, updateEvent, deleteEvent }
