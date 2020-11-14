import { renderHook, act } from '@testing-library/react-hooks'

import '@testing-library/jest-dom'
import { useFetch } from './../../hooks/useFetch'
import { useForm } from './../../hooks/useForm'

describe('Tests in useFetch', () => {
  test('Should return data by default', () => {
    const { result } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    )
    const { data, loading, error } = result.current

    expect(data).toBe(null)
    expect(loading).toBe(true)
    expect(error).toBe(null)
  })
  test('Should have required info, loading false, error false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://reqres.in/apid/users?page=2`)
    )
    await waitForNextUpdate()
    const { data, loading, error } = result.current

    expect(data).toBe(null)
    expect(loading).toBe(false)
    expect(error).toBe('data has not been charged')
  })
})
