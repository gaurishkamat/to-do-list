import styled, { keyframes } from 'styled-components';

export const show = keyframes`
    0% {
        opacity: 0;
      }
      100% {
        opacity: 100;
      }
}`;

export const ListContainer = styled('div')({
  width: '60%',
  margin: '10px',
  padding: '10px',
});

export const ListItem = styled('div')(
  {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    fontWeight: 600,
    margin: '10px 0px',
    padding: '10px 15px',
    animation: 'show 2s',
  },
  ({ theme }) => ({
    backgroundColor: theme === 'dark' ? 'white' : 'black',
    border: theme === 'dark' ? '1px solid #df4848' : '1px solid #ff2525',
    backgroundColor: theme === 'dark' ? '#e7c987' : '#ffc03d',
    color: theme === 'dark' ? '#432344' : '#432344',
  })
);

export const TaskName = styled('div')({
  flex: 4,
  margin: '0px 10px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textTransform: 'capitalize',
});

export const CreatedDate = styled('div')({
  flex: 2,
});
