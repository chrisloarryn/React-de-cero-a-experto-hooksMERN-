import React from 'react';

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://i0.wp.com/www.bitme.gg/wp-content/uploads/2020/03/one-piece-luffy-1106249-1280x0.jpeg?w=1280&ssl=1)'
        }}
      ></div>
      <div className='journal__entry-body'>
        <p className='journal__entry-title'>A new day</p>
        <p className='journal__entry-content'>
          Qui nostrud proident qui proident non id esse sit duis nulla
          adipisicing ex.
        </p>
      </div>
      <div className='journal__entry-date-box'>
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
