import Swal from 'sweetalert2';

import { db } from '../firebase/firebase-config';
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    };
    try {
      const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
      dispatch(activeNote(doc.id, newNote));
      dispatch(addNewNote(doc.id, newNote));
    } catch (err) {
      console.log(err);
    }
  };
};

export const activeNote = (id, note) => {
  return {
    type: types.NOTES_ACTIVE,
    payload: {
      id,
      ...note
    }
  };
};

export const addNewNote = (id, note) => ({
  type: types.NOTES_ADD_NEW,
  payload: {
    id,
    ...note
  }
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: types.NOTES_LOAD,
  payload: notes
});

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!note.url) delete note.url;
    const noteToFirestore = { ...note };
    delete noteToFirestore.id;
    try {
      await db
        .doc(`${uid}/journal/notes/${note.id}`)
        .update(noteToFirestore)
        .then(() => {
          dispatch(refreshNote(note.id, noteToFirestore));
          dispatch(activeNote(note.id, noteToFirestore));
          Swal.fire(
            'Saved',
            `Note "${note.title}" has been updated.`,
            'success'
          );
        });
    } catch (err) {
      const errors = () => {
        const title = err.name
          .replace(/([A-Z])/g, ',$1')
          .split(',')
          .filter((f) => f)
          .join(' ');
        return {
          title,
          text: err.toString().includes('No document to update')
            ? 'No document to update.'
            : 'An error has ocurred.'
        };
      };
      errors() &&
        Swal.fire(
          errors().title ? errors().title : 'Error',
          `${errors().text}`,
          'error'
        );
    }
  };
};

export const refreshNote = (id, note) => ({
  type: types.NOTES_UPDATED,
  payload: {
    id,
    note: {
      id,
      ...note
    }
  }
});

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const { active: activeNote } = getState().notes;
    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait...',
      showConfirmButton: false,
      showCancelButton: false,
      allowOutsideClick: false,
      willOpen: () => {
        Swal.showLoading();
      }
      /* onBeforeOpen: () => {
        Swal.showLoading();
      } */
    });
    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;
    dispatch(startSaveNote(activeNote));
    Swal.close();
  };
};

export const startDeleting = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    await db.doc(`${uid}/journal/notes/${id}`).delete();
    dispatch(deleteNote(id));
  };
};

export const deleteNote = (id) => ({
  type: types.NOTES_DELETE,
  payload: id
});

export const noteLogout = () => ({
  type: types.NOTES_LOGOUT_CLEANING
});
