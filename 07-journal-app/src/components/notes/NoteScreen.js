import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formValues;
  const activeId = useRef(note.id);
  const resetValues = useRef(reset);
  useEffect(() => {
    if (note.id !== activeId.current) {
      resetValues.current(note);
      activeId.current = note.id;
    }
  }, [note]);
  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeleting(id));
  };
  return (
    <div className='notes__main-content animate__animated animate__fadeIn animate__faster'>
      <NotesAppBar />

      <div className='notes__content'>
        <input
          type='text'
          name='title'
          placeholder='Some awesome title'
          className='notes__title-input'
          autoComplete='off'
          value={title}
          onChange={handleInputChange}
        />

        <textarea
          name='body'
          placeholder='What happened today'
          className='notes__textarea'
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {note.url && (
          <div className='notes__image animate__animated animate__fadeIn animate__faster'>
            <img
              src={
                note.url
                  ? note.url
                  : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
              }
              alt='imagen'
            />
          </div>
        )}
      </div>
      <button className='btn btn-danger' onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
