import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/system';

import GitHubIcon from '@mui/icons-material/GitHub';
import DataArrayIcon from '@mui/icons-material/DataArray';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ComputerIcon from '@mui/icons-material/Computer';

const useStyles = styled((theme) => ({
  mediaSectionContainer: {
    padding: '25px',
    marginBottom: '5px',
    [theme.breakpoints.down('sm')]: {
      
    },
  },
  title: {
    color: '#fff',
    marginBottom: '8px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '15px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '20vh',
    },
  },
  listItem: {
    '&:hover': {
      color: '#fff',
    },
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItemText: {
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
      fontSize: '14px',
    },
  },
}));

function SocialSection() {
  const classes = useStyles();

  return (
    <div className={classes.mediaSectionContainer}>
      <Typography variant="h6" noWrap className={classes.title}>
        Social Media
      </Typography>
      <List component="ul">
        <ListItem component="li" disableGutters className={classes.listItem}>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary={<a href="https://github.com/mvbrune" target="_blank" rel="noopener noreferrer">Github</a>} className={classes.listItemText} />
        </ListItem>
        <ListItem component="li" disableGutters className={classes.listItem}>
          <ListItemIcon>
            <DataArrayIcon />
          </ListItemIcon>
          <ListItemText primary={<a href="https://www.hackerrank.com/marcusbrune?hr_r=1" target="_blank" rel="noopener noreferrer">HackerRank</a>} className={classes.listItemText} />
        </ListItem>
        <ListItem component="li" disableGutters className={classes.listItem}>
          <ListItemIcon>
            <LinkedInIcon />
          </ListItemIcon>
          <ListItemText primary={<a href="https://www.linkedin.com/in/marcus-vinicius-brune-205bb8124/" target="_blank" rel="noopener noreferrer">
            Linkedin</a>} className={classes.listItemText} />
        </ListItem>
        <ListItem component="li" disableGutters className={classes.listItem}>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary={<a href="https://www.upwork.com/freelancers/marcusviniciusb2" target="_blank" rel="noopener noreferrer">
            Upwork</a>} className={classes.listItemText} />
        </ListItem>
      </List>
    </div>
  );
}

export default SocialSection;
