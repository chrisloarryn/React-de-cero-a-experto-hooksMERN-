import React from 'react'
import { mount } from 'enzyme'
import { HomeScreen } from 'components/09-useContext/HomeScreen'
import { UserContext } from 'components/09-useContext/UserContext'
import '@testing-library/jest-dom'

describe('Tests in <HomeScreen /> ', () => {
  const user = {
    name: 'Christopher',
    email: 'christopher@gmail.com'
  }
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  )

  test('Should be rendered correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
