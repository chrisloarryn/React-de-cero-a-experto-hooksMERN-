import '@testing-library/jest-dom'
import { types } from '../../types/types'

describe('tests with types', () => {
  test('should have these types', () => {
    expect(types).toEqual({
      LOGIN: '[Auth] Login',
      LOGOUT: '[Auth] Logout',

      UI_SET_ERROR: '[UI] Set Error',
      UI_REMOVE_ERROR: '[UI] Remove Error',
      UI_START_LOADING: '[UI] Start Loading',
      UI_FINISH_LOADING: '[UI] Finish Loading',

      NOTES_ADD_NEW: '[Notes] New Note',
      NOTES_ACTIVE: '[Notes] Set Active Note',
      NOTES_LOAD: '[Notes] Load Notes',
      NOTES_UPDATED: '[Notes] Updated Note',
      NOTES_FILE_URL: '[Notes] Updated Image Url',
      NOTES_DELETE: '[Notes] Delete Note',
      NOTES_LOGOUT_CLEANING: '[Notes] Logout Cleaning'
    })
  })
})
