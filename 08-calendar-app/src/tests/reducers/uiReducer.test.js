import { uiCloseModal, uiOpenModal } from '../../actions/ui'
import { uiReducer } from '../../reducers/uiReducer'

const initState = {
  modalOpen: false
}
describe('Tests in uiReducer.js', () => {
  test('should work properly', () => {
    const state = uiReducer(initState, {})
    expect(state).toEqual(initState)
  })
  test('should open and close modal', () => {
    const modalOpen = uiOpenModal()
    const state = uiReducer(initState, modalOpen)
    expect(state).toEqual({ modalOpen: true })

    const modalClose = uiCloseModal()
    const stateClose = uiReducer(initState, modalClose)
    expect(stateClose).toEqual({ modalOpen: false })
  })
})
