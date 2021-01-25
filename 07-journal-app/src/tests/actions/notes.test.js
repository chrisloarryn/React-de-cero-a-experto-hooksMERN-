import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import {
  startLoadingNotes,
  startNewNote,
  startSaveNote,
  startUploading
} from '../../actions/notes';
import { types } from '../../types/types';
import { db } from '../../firebase/firebase-config';
import {} from './../../helpers/fileUpload';

jest.mock('./../../helpers/fileUpload', () => ({
  fileUpload: jest.fn(() => {
    // 'https://hello-world.com/something.jpg'
    return Promise.resolve('https://hello-world.com/something.jpg');
  })
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: 'TESTING'
  },
  notes: {
    active: {
      id: '1A0g2cMOJz9nyfR01cU9',
      title: 'Hello',
      body: 'World'
    }
  }
};

let store = mockStore(initState);

describe('Test with notes actions', () => {
  beforeEach(async () => {
    store = await mockStore(initState);
  });

  test('test with start new note', async () => {
    await store.dispatch(startNewNote());
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.NOTES_ACTIVE,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number)
      }
    });
    expect(actions[1]).toEqual({
      type: types.NOTES_ADD_NEW,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number)
      }
    });
    const docId = actions[0].payload.id;
    await db.doc(`/TESTING/journal/notes/${docId}`).delete();
  });
  test('startLoadingNotes should load the notes at all', async () => {
    await store.dispatch(startLoadingNotes('TESTING'));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.NOTES_LOAD,
      payload: expect.any(Array)
    });
    const expected = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number)
    };
    expect(actions[0].payload[0]).toMatchObject(expected);
  });
  test('startSaveNote should save the note received', async () => {
    const note = {
      id: '1A0g2cMOJz9nyfR01cU9',
      title: 'title',
      body: 'body'
    };
    await store.dispatch(startSaveNote(note));
    const actions = store.getActions();
    expect(actions[0].type).toBe(types.NOTES_UPDATED);
    const docRef = await db.doc(`/TESTING/journal/notes/${note.id}`).get();
    expect(docRef.data().title).toBe(note.title);
  });
  test('startUploading should update url in the entry', async () => {
    const file = new File([], 'photo.jpg');
    await store.dispatch(startUploading(file));
    const {
      notes: {
        active: { id }
      }
    } = initState;
    const docRef = await db.doc(`/TESTING/journal/notes/${id}`).get();
    expect(docRef.data().url).toBe('https://hello-world.com/something.jpg');
  });
});
