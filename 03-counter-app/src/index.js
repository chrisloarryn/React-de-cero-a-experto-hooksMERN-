import React from 'react'
import ReactDOM from 'react-dom'

import './index.module.css'
import FirstApp from './FirstApp'
// import CounterApp from './CounterApp'

const rootDiv = document.querySelector('#root')

// <FirstApp message={`Hello, I'm Goku`} subtitle={'My first App'} />
// <CounterApp value={12} />

// ReactDOM.render(<CounterApp value={12} />, rootDiv)
ReactDOM.render(
  <FirstApp message={`Hello, I am Goku`} subtitle={'My first App'} />,
  rootDiv,
)
