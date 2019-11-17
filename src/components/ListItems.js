import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core/';
import { Dashboard, Store, Group } from '@material-ui/icons/';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button component={Link} to='/dashboard'>
      <ListItemIcon>
        <Dashboard style={{ color: '#1a237e' }} />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} style={{ color: '#1a237e' }} to='/products'>
      <ListItemIcon>
        <Store style={{ color: '#3e2723' }} />
      </ListItemIcon>
      <ListItemText primary="Produtos" style={{ color: '#3e2723' }} />
    </ListItem>
    <ListItem button component={Link} to='/users'>
      <ListItemIcon>
        <Group style={{ color: '#3e2723' }} />
      </ListItemIcon>
      <ListItemText primary="Usuários" style={{ color: '#3e2723' }} />
    </ListItem>
    <ListItem>
      <ListItemText primary="" />
    </ListItem>
    <ListItem>
      <ListItemText primary="" />
    </ListItem>
    <ListItem>
      <ListItemText primary="" />
    </ListItem>
    <ListItem>
      <ListItemText primary="" />
    </ListItem>
    <ListItem>
      <ListItemText primary="" />
    </ListItem>
    <ListItem>
      <ListItemText primary="" />
    </ListItem>
    <ListItem>
      <ListItemText primary="" />
    </ListItem>
    <ListItem>
      <ListItemText primary="" />
    </ListItem>
    <ListItem>
      <ListItemText primary="" />
    </ListItem>
    <ListItem>
      <ListItemText primary="" />
    </ListItem>
    <ListItem>
      <ListItemText primary="" />
    </ListItem>
    <ListItem>
      <ListItemText primary="" />
    </ListItem>
    <ListItem>
      <ListItemText primary="" />
    </ListItem>
    <ListItem>
      <ListItemText primary="" />
    </ListItem>
    <ListItem>
      <ListItemText primary="" />
    </ListItem>
  </div>
);