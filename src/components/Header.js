import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Header({ theme, setTheme }) {
  return (
    <div className='header'>
      <div class='logo'></div>
      <div class='title'>
        <h3>To Do List</h3>
      </div>
      <div class='icons'>
        {theme === 'dark' ? (
          <LightModeIcon onClick={() => setTheme('light')} />
        ) : (
          <DarkModeIcon onClick={() => setTheme('dark')} />
        )}
      </div>
    </div>
  );
}

export default Header;
