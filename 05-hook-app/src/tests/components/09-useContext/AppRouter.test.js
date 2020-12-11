import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { UserContext } from 'components/09-useContext/UserContext'
import { AppRouter } from 'components/09-useContext/AppRouter'

describe('Tests in <AppRouter />', () => {
  const user = {
    name: 'Christopher',
    email: 'christopher@gmail.com'
  }
  const setUser = jest.fn()
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  )
  test('Should be rendered correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
