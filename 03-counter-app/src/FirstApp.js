import React from 'react'
import PropTypes from 'prop-types'

// Functional Component
const FirstApp = ({ message, subtitle = 'My first App' }) => {
  // console.log(message)

  // A LOT OF MEMORY
  // if (!message) {
  //     throw new Error('Message must be specified for the first app component')
  // }

  // eslint-disable-next-line
  const sayHello = {
    message: 'Hello World :D',
    age: 24,
  }
  return (
    <>
      <h1>{message}</h1>
      {/* <pre>{JSON.stringify(sayHello, null, 2)}</pre> */}
      <p>{subtitle}</p>
    </>
  )
}

FirstApp.propTypes = {
  message: PropTypes.string.isRequired
}
FirstApp.defaultProps = {
  subtitle: `I am a subtitle`,
}

export default FirstApp
