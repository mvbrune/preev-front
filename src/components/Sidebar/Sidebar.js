import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { Inbox as InboxIcon, ExpandLess, ExpandMore } from '@mui/icons-material';
import { styled } from '@mui/system';

const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    width: 270,
    boxSizing: 'border-box',
    backgroundColor: '#2C3333', 
  },
});

const StyledListItemText = styled(ListItemText)({
  color: 'white', 
});

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <StyledDrawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
      }}
    >
      <List>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <StyledListItemText primary="Item 1" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <StyledListItemText primary="Subitem 1" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <StyledListItemText primary="Subitem 2" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <StyledListItemText primary="Item 2" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <StyledListItemText primary="Item 3" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <StyledListItemText primary="Item 4" />
        </ListItem>
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;
