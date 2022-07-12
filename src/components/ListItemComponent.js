import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useEffect } from 'react';
import ListComponent from './ListComponent';
import PropTypes from 'prop-types';

const ListItemComponent = ({
  id,
  taskName = 'Alpha',
  dateCreated,
  deleteTaskListener,
}) => {
  // const { id, created, taskName } = listItem;
  useEffect(() => {
    return () => {
      console.log('Component Will Unmount List Component');
    };
  }, []);

  return (
    <div className='list-item' key={id}>
      <div title={taskName} className='task-name'>
        {taskName}
      </div>
      <div className='created-date'>{dateCreated}</div>
      <>
        <DeleteForeverIcon
          title='delete item'
          className='icon'
          sx={{ cursor: 'pointer', color: '#ff2525' }}
          onClick={() => deleteTaskListener(id)}></DeleteForeverIcon>
      </>
    </div>
  );
};

/* ListComponent.propTypes = {
  id: PropTypes.string,
  taskName: PropTypes.string,
  dateCreated: PropTypes.string,
  addEventListener: PropTypes.function,
}; 

  ListComponent.defaultProps = {
  id: '10',
  taskName: 'Alpha',
  dateCreated: '',
  addEventListener: () => {},
}; */

export default ListItemComponent;
