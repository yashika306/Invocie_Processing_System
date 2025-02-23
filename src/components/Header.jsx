
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar color="secondary" position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Invoice Processing System
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
