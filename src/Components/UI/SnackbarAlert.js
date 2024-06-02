import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SnackbarAlert({ open, handleClose, message }) {

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={message.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          { message.text }
        </Alert>
      </Snackbar>
    </div>
  );
}
