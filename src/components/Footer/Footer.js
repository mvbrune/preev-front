import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

import InstitutionalSection from './Institutional/Institutional';
import SocialSection from './Social/Social';
import AboutSection from './About/About';
import CopyrightSection from './Copyright/Copyright';

import './Footer.css';

function Footer() {
  return (
    <div>
      <AppBar position="static" className="custom-footer">
        <Toolbar className="footer-toolbar">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} style={{ display: 'flex', justifyContent: 'center', }}>
              <InstitutionalSection />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SocialSection />
            </Grid>
            <Grid item xs={12} sm={4}>
              <AboutSection />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <CopyrightSection />
    </div>
  );
}

export default Footer;
