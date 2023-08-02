import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/system';
//import { Container, Grid, Typography } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(to right bottom, #1c2025, #283c48, #2b5c6b, #2b7e89, #35a29f)',
  height: '35vh',
  color: 'white',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: theme.spacing(),
  borderRadius: '0 !important',
  '& .css-zow5z4-MuiGrid-root': {
    marginLeft: '0 !important',
    marginTop: '0 !important',
  }
}));


const CustomCard = () => {
  return (
    <StyledCard>
    </StyledCard>
  );
};

export default CustomCard;
