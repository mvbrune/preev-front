import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const FixedAlert = ({ message, severity }) => {
  return (
    <Snackbar open={true}>
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
};

export default FixedAlert;
