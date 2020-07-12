import React from 'react'
import { render } from '@testing-library/react'
import FirstApp from '../FirstApp'

describe('Test in <FirstApp />', () => {
  test('<FirstApp /> should render "Hello, I am Goku" message" ', () => {
    const greeting = 'Hello, I am Goku'
    const { getByText } = render(<FirstApp message={greeting} />)
    expect(getByText(greeting)).toBeInTheDocument()
  })
})
