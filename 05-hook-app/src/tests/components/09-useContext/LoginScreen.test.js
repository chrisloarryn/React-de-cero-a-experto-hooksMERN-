import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { LoginScreen } from 'components/09-useContext/LoginScreen'
import { UserContext } from 'components/09-useContext/UserContext'

describe('Tests in <LoginScreen />', () => {
  const user = {
    name: 'Christopher',
    email: 'christophere@gmail.com'
  }
  const setUser = jest.fn()
  const wrapper = mount(
    <UserContext.Provider value={{ user, setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  )
  test('Should be rendered correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Should execute setUser with required prop', () => {
    wrapper.find('button').prop('onClick')()
    expect(setUser).toHaveBeenCalledWith({
      id: 234,
      name: 'namdsssde'
    })
  })
})
