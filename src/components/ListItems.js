import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core/';
import { Dashboard, Store, Group } from '@material-ui/icons/';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button component={Link} to='/dashboard'>
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to='/products'>
      <ListItemIcon>
        <Store />
      </ListItemIcon>
      <ListItemText primary="Produtos" />
    </ListItem>
    <ListItem button component={Link} to='/users'>
      <ListItemIcon>
        <Group />
      </ListItemIcon>
      <ListItemText primary="Usuários" />
    </ListItem>
  </div>
);