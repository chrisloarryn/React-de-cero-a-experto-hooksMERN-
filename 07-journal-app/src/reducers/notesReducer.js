import { types } from '../types/types';

const initialState = {
  notes: [],
  active: null
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NOTES_ACTIVE:
      return {
        ...state,
        active: {
          ...action.payload
        }
      };
    case types.NOTES_LOAD:
      return {
        ...state,
        notes: [...action.payload]
      };

    default:
      return state;
  }
};
