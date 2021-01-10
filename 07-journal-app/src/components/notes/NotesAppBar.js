import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const handleSave = () => {
    dispatch(startSaveNote(active));
  };
  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click();
  };
  const handleFileChange = (e) => {
    const [file] = e.target.files;
    if (file) {
      dispatch(startUploading(file));
    }
  };
  const activeDate = moment(active.date);
  return (
    <div className='notes__appbar animate__animated animate__fadeIn animate__faster'>
      <span>{activeDate && activeDate.format('MMMM DD, YYYY')}</span>

      <input
        id='fileSelector'
        type='file'
        name='file'
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div>
        <button className='btn' onClick={handlePictureClick}>
          Picture
        </button>

        <button className='btn' onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
