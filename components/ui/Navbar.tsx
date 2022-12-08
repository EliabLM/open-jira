import React, { FC } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useUIContext } from '../../hooks/useUIContext';

export const Navbar: FC = () => {
  const { openSideMenu } = useUIContext();

  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar>
        <IconButton size='large' edge='start' onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant='h6'>OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
