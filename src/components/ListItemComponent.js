import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ListItemComponent = ({ listItem, deleteTaskListener }) => {
  // const { id, created, taskName } = listItem;
  return (
    <div className='list-item' key={listItem.id}>
      <div title={listItem.taskName} className='task-name'>
        {listItem.taskName}
      </div>
      <div className='created-date'>{listItem.created}</div>
      <DeleteForeverIcon
        title='delete item'
        className='icon'
        sx={{ cursor: 'pointer', color: '#ff2525' }}
        onClick={() => deleteTaskListener(listItem.id)}></DeleteForeverIcon>
    </div>
  );
};

export default ListItemComponent;
