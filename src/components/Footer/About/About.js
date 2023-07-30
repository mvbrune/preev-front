import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const useStyles = styled((theme) => ({
  aboutSectionContainer: {
    padding: '25px',
    marginBottom: '5px',
  },
  title: {
    color: '#fff',
    fontSize: '15px',
    marginBottom: '8px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '15px',
      width: '20vh',
    },
  },
}));

function AboutSection() {
  const classes = useStyles();

  const description =
    'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' +
    'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' +
    'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum';

  return (
    <div className={classes.aboutSectionContainer}>
      <Typography variant="h6" className={classes.title}>
        About us
      </Typography>
      <Typography variant="body1" style={{ paddingTop: '16px', }}>
        {description}
      </Typography>
    </div>
  );
}

export default AboutSection;
