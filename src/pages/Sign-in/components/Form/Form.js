import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';

import LoginIcon from '@mui/icons-material/Login';
import ModalComponent from '../Modal/Modal'

function FormComponent() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%" 
      margin="20px" 
    >
      <form onSubmit={handleSubmit}> 
        <Grid style={{ justifyContent: 'center', }} container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Senha"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Box mt={2}>
          <Button onClick={handleOpenModal} style={{ textTransform: 'none' }} color="primary">
            Esqueci minha senha
          </Button>
          <ModalComponent open={isModalOpen} onClose={handleCloseModal} />

            <span> | </span>
            <Button
              onClick={ (event) => {
                window.location.href = '/sign-up';
              }} 
              style={{ textTransform: 'none' }} 
              color="primary">Criar conta</Button>
          </Box>
          <Grid item xs={12}>
            <Button variant="contained" style={{ backgroundColor: '#7895CB' }} endIcon={<LoginIcon />}>
              login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default FormComponent;
