import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';


const StyledCard = styled(Card)(({ theme }) => ({
  margin: '20px',
  width: '40%',
  height: '50vh',
  background: 'linear-gradient(to right top, #0b666a, #008a7a, #00ae73, #4fcf56, #a8eb12)',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: theme.spacing(2),
  '& .MuiTypography-h5': {
    textTransform: 'uppercase',
    marginBottom: theme.spacing(1),
    color: 'white',
  },
  '& .MuiTypography-body2': {
    color: 'white',
  },
  '@media (max-width: 767px)': { 
    display: 'none',
  },
}));

const SimpleCard = ({ title, description }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default SimpleCard;
