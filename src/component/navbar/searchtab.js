import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
      display:'contents',
    width: '10%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,

  },
  List :{
    display: 'flex'

  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List aria-label="main mailbox folders" className='List'>
        <ListItem button>
         
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
         </div>
  );
}
