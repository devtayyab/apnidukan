import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {searchaction} from '../../store/action/product'
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {useDispatch} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,

  },
  List :{
    display: 'flex',
    justifyContent: 'space-around'

  }
}));


export default function SimpleList() {
  const dispatch = useDispatch();
  const classes = useStyles();
const tabsearch = (category)=>{
dispatch(searchaction(category))

}
  return (
    <div className={classes.root}>
      <List aria-label="main mailbox folders" className={classes.List}>
        <ListItem button onClick={()=>tabsearch("electronics")}>
         
          <ListItemText primary="Electronics" />
        </ListItem>
        <ListItem button  onClick={()=>tabsearch("dress")}>
          
          <ListItemText primary="Dress" />
        </ListItem>
        <ListItem button  onClick={()=>tabsearch("Grocery")}>
          
          <ListItemText primary="Grocery" />
        </ListItem>
        <ListItem button  onClick={()=>tabsearch("houses")}>
          
          <ListItemText primary="Houses" />
        </ListItem>
      </List>
      <Divider />
         </div>
  );
}
