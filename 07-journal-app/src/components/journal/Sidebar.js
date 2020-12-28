import React from 'react';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {
  return (
    <aside className='journal__sidebar'>
      <div className='journal__sidebar-navbar'>
        <h3 className='mt-4'>
          <i className='far fa-moon'></i>
          <span> Cristobal</span>
        </h3>
        <button className='btn'>Logout</button>
      </div>
      <div className='journal__new-entry'>
        <i className='far fa-calendar-plus fa-5x mt-4'></i>
        <p>New entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};
