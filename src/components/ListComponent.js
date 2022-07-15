import React from 'react';
import { ListContainer } from '../styled';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import ListItemComponent from './ListItemComponent';

function ListComponent({ list, deleteTaskListener }) {
  const { theme } = useContext(AppContext);

  return (
    <ListContainer theme={theme}>
      {list.map((listItem) => (
        <ListItemComponent
          key={listItem.id}
          taskName={listItem.taskName}
          id={listItem.id}
          dateCreated={listItem.created}
          deleteTaskListener={deleteTaskListener}
        />
      ))}
    </ListContainer>
  );
}

export default ListComponent;
