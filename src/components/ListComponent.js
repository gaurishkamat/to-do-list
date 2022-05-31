import React from 'react';
import ListItemComponent from './ListItemComponent';

function ListComponent({ list, deleteTaskListener }) {
  return (
    <div className='list-container'>
      {list.map((listItem) => (
        <ListItemComponent
          listItem={listItem}
          deleteTaskListener={deleteTaskListener}
        />
      ))}
    </div>
  );
}

export default ListComponent;
