import React, { useState } from 'react';

import { AvatarButton } from '../Buttons';
import { Menu, MenuItem } from '../Menu';
import { useUIContext } from '../hooks';

function UserMenu({ user, className }) {
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null);
  const { darkMode, setDarkMode } = useUIContext();

  function handleClose() {
    setUserMenuAnchorEl(null);
  }

  return (
    <>
      <AvatarButton
        src="https://randomuser.me/api/portraits/men/1.jpg"
        onClick={e => setUserMenuAnchorEl(e.currentTarget)}
        active={!!userMenuAnchorEl}
        className={className}
      />
      <Menu
        anchorEl={userMenuAnchorEl}
        open={!!userMenuAnchorEl}
        onClose={() => setUserMenuAnchorEl(null)}
        anchorOrigin={{ y: 'bottom', x: 'right' }}
      >
        <MenuItem
          icon="moon"
          selected={darkMode}
          onClick={() => {
            setDarkMode(!darkMode);
            handleClose();
          }}
        >
          Dark Mode
        </MenuItem>
        <MenuItem
          icon="help-circle"
          onClick={() => {
            window.open('https://www.decapcms.org/community/');
            handleClose();
          }}
        >
          Help
        </MenuItem>
        <MenuItem
          icon="file-text"
          onClick={() => {
            window.open('https://www.decapcms.org/docs/');
            handleClose();
          }}
        >
          Documentation
        </MenuItem>
        <MenuItem
          icon="alert-triangle"
          onClick={() => {
            window.open('https://github.com/decaporg/decap-cms/issues');
            handleClose();
          }}
        >
          Report an issue
        </MenuItem>
        <MenuItem icon="log-out" onClick={handleClose}>
          Log out
        </MenuItem>
      </Menu>
    </>
  );
}

export default UserMenu;
