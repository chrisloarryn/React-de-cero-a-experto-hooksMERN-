import '@testing-library/jest-dom'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Swal from 'sweetalert2'

import { startChecking, startLogin, startRegister } from '../../actions/auth'
import { types } from '../../types/types'
import * as fetchModule from '../../helpers/fetch'

jest.mock('sweetalert2', () => ({
  fire: jest.fn()
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

let token = ''
const initState = {}
let store = mockStore(initState)

Storage.prototype.setItem = jest.fn()

describe('Tests in auth.js actions', () => {
  beforeEach(() => {
    store = mockStore(initState)
    jest.clearAllMocks()
  })
  test('startLogin should work fine', async () => {
    await store.dispatch(startLogin('chrisloarryn@gmail.com', '123456'))
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: types.authLogin,
      payload: {
        uid: expect.any(String),
        name: expect.any(String)
      }
    })
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'token',
      expect.any(String)
    )
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'token-init-date',
      expect.any(Number)
    )

    token = localStorage.setItem.mock.calls[0][1]
  })
  test('startLogin should not work', async () => {
    await store.dispatch(startLogin('chrisloarryn@gmail.com', '123456789'))
    let actions = store.getActions()
    expect(actions).toEqual([])
    expect(Swal.fire).toHaveBeenCalledWith(
      'Error',
      'Password incorrect.',
      'error'
    )
    await store.dispatch(startLogin('chrisloarryn1111@gmail.com', '123456'))
    actions = store.getActions()
    expect(Swal.fire).toHaveBeenCalledWith(
      'Error',
      'Please contact the administrator.',
      'error'
    )
  })

  test('startRegister should work fine', async () => {
    fetchModule.fetchWithoutToken = jest.fn(() => ({
      json() {
        return {
          ok: true,
          uid: '123',
          name: 'chrisloarryn',
          token: 'eywchrisloarryn123'
        }
      }
    }))
    await store.dispatch(startRegister('test@test.com', '123456'))
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: types.authLogin,
      payload: {
        uid: '123',
        name: 'chrisloarryn'
      }
    })
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'token',
      'eywchrisloarryn123'
    )
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'token-init-date',
      expect.any(Number)
    )
  })

  test('startChecking works fine', async () => {
    fetchModule.fetchWithToken = jest.fn(() => ({
      json() {
        return {
          ok: true,
          uid: '123',
          name: 'chrisloarryn',
          token: 'eywchrisloarryn123'
        }
      }
    }))
    await store.dispatch(startChecking())
    const actions = store.getActions()

    expect(actions[0]).toEqual({
      type: types.authLogin,
      payload: {
        uid: '123',
        name: 'chrisloarryn'
      }
    })
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'token',
      'eywchrisloarryn123'
    )
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'token-init-date',
      expect.any(Number)
    )
  })
})
