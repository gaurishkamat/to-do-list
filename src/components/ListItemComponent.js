import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useEffect } from 'react';
import ListComponent from './ListComponent';
import PropTypes from 'prop-types';
import { ListItem, TaskName, CreatedDate } from '../styled';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

const ListItemComponent = ({
  id,
  taskName = 'Alpha',
  dateCreated,
  deleteTaskListener,
}) => {
  // const { id, created, taskName } = listItem;
  const { theme } = useContext(AppContext);

  useEffect(() => {
    return () => {
      console.log('Component Will Unmount List Component');
    };
  }, []);

  return (
    <ListItem key={id} theme={theme}>
      <TaskName title={taskName}>{taskName}</TaskName>
      <CreatedDate>{dateCreated}</CreatedDate>
      <DeleteForeverIcon
        title='delete item'
        className='icon'
        sx={{ cursor: 'pointer', color: '#ff2525' }}
        onClick={() => deleteTaskListener(id)}></DeleteForeverIcon>
    </ListItem>
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
