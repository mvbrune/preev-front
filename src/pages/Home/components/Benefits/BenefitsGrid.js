import React from 'react';
import { Grid, Box } from '@mui/material';

import BackupTableIcon from '@mui/icons-material/BackupTable';
import SettingsIcon from '@mui/icons-material/Settings';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import StorageIcon from '@mui/icons-material/Storage';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import BugReportIcon from '@mui/icons-material/BugReport';

import './BenefitsGrid.css'; 

function BenefitsGrid() {
  const features = [
    {
      icon:  <BackupTableIcon />, 
      title: 'Front-end',
      description: 'Building beautiful and complex layouts using the best technologies.',
    },
    {
      icon: <SettingsIcon />, 
      title: 'Back-end',
      description: 'Developing web applications with scalable solutions and adhering to best practices.',
    },
    {
      icon: <MobileFriendlyIcon />, 
      title: 'Mobile',
      description: 'Developing complex and intuitive mobile apps that provide seamless user experiences.',
    },
    {
      icon: <StorageIcon />, 
      title: 'Deploy',
      description: 'Providing app deployment services on cloud platforms.',
    },
    {
      icon: <InsertChartIcon />, 
      title: 'Consultancy',
      description: 'Providing expert evaluation and tailored solutions for your business.',
    },
    {
      icon: <BugReportIcon />, 
      title: 'solve problems',
      description: 'Fix minor errors related to web technologies, such as PHP, JavaScript, and more...',
    }
  ];

  return (
    <div style={{ margin: '50px' }}>
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
                <h3 style={{ textTransform: 'uppercase',  }}>{feature.title}</h3>
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
