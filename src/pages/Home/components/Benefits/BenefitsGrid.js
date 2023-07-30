import React from 'react';
import { Grid, Box } from '@mui/material';

import SecurityIcon from '@mui/icons-material/Security';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import DraftsIcon from '@mui/icons-material/Drafts';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';

import './BenefitsGrid.css'; 

function BenefitsGrid() {
  const features = [
    {
      icon:  <SecurityIcon />, 
      title: 'Título 1',
      description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum, Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    },
    {
      icon: <AssignmentIndIcon />, 
      title: 'Título 2',
      description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum, Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    },
    {
      icon: <FingerprintIcon />, 
      title: 'Título 3',
      description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum, Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    },
    {
      icon: <DraftsIcon />, 
      title: 'Título 4',
      description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum, Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    },
    {
      icon: <DonutSmallIcon />, 
      title: 'Título 5',
      description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum, Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    },
    {
      icon: <DonutSmallIcon />, 
      title: 'Título 6',
      description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum, Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    }
  ];

  return (
    <div className="benefits-grid-container" style={{ margin: '50px' }}>
      <Grid container justifyContent="center" spacing={0}>
        {features.map((feature, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} 
          style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              textAlign: 'center',
              //border: '1px solid red',
              background: 'linear-gradient(to right top, #0b666a, #008a7a, #00ae73, #4fcf56, #a8eb12)',
              color: 'white',
              borderRadius: '10px',
              margin: '0px 25px 17px'
            }}> 
             <Box p={3}> 
              <div className="benefit-item">
                {feature.icon}
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default BenefitsGrid;
