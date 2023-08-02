import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/system';

import EmailIcon from '@mui/icons-material/Email';

const useStyles = styled((theme) => ({
  institutionalSectionContainer: {
    padding: '25px',
    marginBottom: '5px',
  },
  title: {
    color: '#fff',
    fontSize: '15px',
    marginBottom: '8px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
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

function InstitutionalSection() {
  const classes = useStyles();

  return (
    <div className={classes.institutionalSectionContainer}>
      <Typography variant="h6" noWrap className={classes.title}>
        Contact
      </Typography>
      <List component="ul">
        <ListItem component="li" disableGutters className={classes.listItem}>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary={<a href="mailto:marcusssbrune@gmail.com">Email</a>} className={classes.listItemText} />
        </ListItem>
      </List>
    </div>
  );
}

export default InstitutionalSection;
