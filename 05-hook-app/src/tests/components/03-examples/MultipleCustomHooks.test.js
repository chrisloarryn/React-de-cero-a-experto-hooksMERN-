import React from 'react'
import { shallow } from 'enzyme'
import { MultipleCustomsHooks } from 'components/03-examples/MultipleCustomsHooks'
import { useFetch } from 'hooks/useFetch'
import { useCounter } from 'hooks/useCounter'

jest.mock('hooks/useFetch')
jest.mock('hooks/useCounter')

describe('Tests in <MultipleCustomHooks />', () => {
  useCounter.mockReturnValue({
    counter: 1,
    increment: () => {}
  })

  test('Should be rendered perfectly', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: false,
      error: null
    })

    const wrapper = shallow(<MultipleCustomsHooks />)
    expect(wrapper).toMatchSnapshot()
  })

  test('Should return author data', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Cristobalite', quote: 'Hello world!' }],
      loading: false,
      error: null
    })
    const wrapper = shallow(<MultipleCustomsHooks />)

    expect(wrapper.find('.alert').exists()).toBe(false)
    expect(wrapper.find('.mb-0').text().trim()).toBe('Hello world!')
    expect(wrapper.find('footer').text().trim()).toBe('Cristobalite')

    console.log(wrapper.html())
  })
})
