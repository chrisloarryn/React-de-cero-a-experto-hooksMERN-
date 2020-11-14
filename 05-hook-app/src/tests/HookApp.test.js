import React from 'react'
import { shallow } from 'enzyme/build'
import { HookApp } from 'HookApp'

describe('Tests in <HookApp />', () => {
  test('should be rendered correctly', () => {
    const wrapper = shallow(<HookApp />)
    expect(wrapper).toMatchSnapshot()
  })
})
