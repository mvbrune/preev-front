import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  backgroundColor: '#22A699',
  '& .MuiList-root': {
    display: 'flex',
    gap: '6px',
    marginLeft: 'auto',
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
      display: 'flex',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      fontSize: 'clamp(14px, 2.5vw, 16px)',
    }
  },
  [theme.breakpoints.down('sm')]: { 
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .MuiList-root': {
      marginTop: '8px',
      textTransform: 'uppercase',
    },
    '& h6': {
      display: 'none'
    },
  },
}));


function Header() {
  return (
    <CustomAppBar position="static">
      <Toolbar style={{ justifyContent: 'space-between', width: '100%', '@media (max-width: 600px)': { display: 'none' } }}>
        <Typography variant="h6" noWrap>PREEV FRONT</Typography>
        <Box>
          <List component="nav">
            <Link to="/sign-up">
              <ListItem button>
                <ListItemIcon>
                  <GroupAddIcon />
                </ListItemIcon>
                <ListItemText primary="Sign up" />
              </ListItem>
            </Link>
            <Link to="/sign-in">
              <ListItem button>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Sign in" />
              </ListItem>
            </Link>
          </List>
        </Box>
      </Toolbar>
    </CustomAppBar>
  );
}

export default Header;
