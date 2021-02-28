import '@testing-library/jest-dom'
import { fetchWithoutToken, fetchWithToken } from './../../helpers/fetch'

describe('Tests in fetch.js', () => {
  let token = ''
  test('fetchWithoutToken should work', async () => {
    const resp = await fetchWithoutToken(
      'auth',
      { email: 'chrisloarryn@gmail.com', password: '123456' },
      'POST'
    )
    expect(resp instanceof Response).toBe(true)

    const body = await resp.json()
    expect(body.ok).toBe(true)

    token = body.token
  })

  test('fetchWithToken should work', async () => {
    localStorage.setItem('token', token)
    const resp = await fetchWithToken(
      'events/6038c791e0be40001549f553',
      {},
      'DELETE'
    )
    const body = await resp.json()
    expect(body.msg).toBe(
      `There is no such event for the event id: '6038c791e0be40001549f553'`
    )
  })
})
