import React from 'react';
import ListItemComponent from './ListItemComponent';

function ListComponent({ list, deleteTaskListener }) {
  return (
    <div className='list-container'>
      {list.map((listItem) => (
        <ListItemComponent
          key={listItem.id}
          taskName={listItem.taskName}
          id={listItem.id}
          dateCreated={listItem.created}
          deleteTaskListener={deleteTaskListener}
        />
      ))}
    </div>
  );
}

export default ListComponent;
