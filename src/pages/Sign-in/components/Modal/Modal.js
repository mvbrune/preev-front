import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';

const ModalComponent = ({ open, onClose }) => {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle style={{ textTransform: 'uppercase', }}>
        Password Recovery
      </DialogTitle>
      <DialogContent>
        <form>
          <TextField
            label="Email"
            variant="filled"
            fullWidth
            value={email}
            onChange={handleChange}
          />
          <Button 
            type="button" 
            variant="contained" 
            color="primary" 
            endIcon={<SendIcon />}  
            sx={{ mt: 2 }}
          >
            Send 
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ModalComponent;
