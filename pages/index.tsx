import React from 'react';
import type { NextPage } from 'next';
import { Typography } from '@mui/material';

const HomePage: NextPage = () => {
  return (
    <>
      <Typography variant='h1' color='primary'>
        Hello Next
      </Typography>
    </>
  );
};

export default HomePage;
