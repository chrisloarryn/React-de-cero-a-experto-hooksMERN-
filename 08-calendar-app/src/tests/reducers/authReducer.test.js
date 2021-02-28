import { authReducer } from '../../reducers/authReducer'
import { types } from '../../types/types'

const initState = {
  checking: true
  // uid: null,
  // name: null
}
describe('Tests in authReducer.js', () => {
  test('should return default status', () => {
    const action = {}
    const state = authReducer(initState, action)
    expect(state).toEqual(initState)
  })
  test('should auth the user', () => {
    const action = {
      type: types.authLogin,
      payload: {
        uid: '123',
        name: 'chrisloarryn'
      }
    }
    const state = authReducer(
      {
        checking: false,
        uid: '123',
        name: 'chrisloarryn'
      },
      action
    )
    expect(state).toEqual({
      checking: false,
      uid: '123',
      name: 'chrisloarryn'
    })
  })
})
