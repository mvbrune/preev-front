import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const CopyrightSectionContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    backgroundColor: '#DDE6ED',
    width:'100%',
});

function CopyrightSection() {
  return (
    <CopyrightSectionContainer>
      <Typography align="center" color="textSecondary">
        © {new Date().getFullYear()} Marcus Brune. All rights reserved.
      </Typography>
    </CopyrightSectionContainer>
  );
}

export default CopyrightSection;
