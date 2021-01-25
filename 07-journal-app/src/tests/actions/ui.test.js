import '@testing-library/jest-dom';

import {
  finishLoading,
  removeError,
  setError,
  startLoading
} from '../../actions/ui';
import { types } from '../../types/types';

describe('Tests un ui-actions', () => {
  test('all actions should work', () => {
    const action = setError('Help!');
    expect(action).toEqual({
      type: types.UI_SET_ERROR,
      payload: 'Help!'
    });

    const removeErrorAction = removeError();
    const startLoadingAction = startLoading();
    const finishLoadingAction = finishLoading();
    expect(removeErrorAction).toEqual({
      type: types.UI_REMOVE_ERROR
    });

    expect(startLoadingAction).toEqual({
      type: types.UI_START_LOADING
    });

    expect(finishLoadingAction).toEqual({
      type: types.UI_FINISH_LOADING
    });
  });
});
