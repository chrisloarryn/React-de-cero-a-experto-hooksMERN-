import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import FirstApp from '../FirstApp'


/*  
  //   test('<FirstApp /> should render "Hello, I am Goku" message" ', () => {
  //     const greeting = 'Hello, I am Goku'
  //     const { getByText } = render(<FirstApp message={greeting} />)
  //     expect(getByText(greeting)).toBeInTheDocument()
  //   })
*/
describe('Test in <FirstApp />', () => {
  test('<FirstApp /> should be rendered correctly', () => {
    const message = 'Hello, I am Goku'
    const wrapper = shallow(<FirstApp message={message} />)
    
    expect(wrapper).toMatchSnapshot()
 
  })
})
