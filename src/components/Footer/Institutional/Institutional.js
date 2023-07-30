import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/system';

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
        Governance
      </Typography>
      <List component="ul">
        <ListItem component="li" disableGutters className={classes.listItem}>
          <ListItemText primary={<a href="/">Lorem Ipsum</a>} className={classes.listItemText} />
        </ListItem>
        <ListItem component="li" disableGutters className={classes.listItem}>
          <ListItemText primary={<a href="/">Lorem Ipsum</a>} className={classes.listItemText} />
        </ListItem>
        <ListItem component="li" disableGutters className={classes.listItem}>
          <ListItemText primary={<a href="/">Lorem Ipsum</a>} className={classes.listItemText} />
        </ListItem>
        <ListItem component="li" disableGutters className={classes.listItem}>
          <ListItemText primary={<a href="/">Lorem Ipsum</a>} className={classes.listItemText} />
        </ListItem>
      </List>
    </div>
  );
}

export default InstitutionalSection;
