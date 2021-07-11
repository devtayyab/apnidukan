import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Detailaction } from '../../store/action/product'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {useHistory} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import { Card, Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 15,
    display: 'flex',
    maxWidth: '100%'
  },
list: {

  listStyle: 'none'
},
  control: {
    padding: theme.spacing(2),
    maxWidth: '100%'

  },
}));
export default function Detail() {
  const [spacing, setSpacing] = React.useState(2);
  const history = useHistory();
  const classes = useStyles();
  const params = useParams();
  // const productId = props.match?.params.id;
  const id = params?.id
  const dispatch = useDispatch();
  const state = useSelector(state => state.product)
  const [qty, setQty] = useState(1);
  useEffect(() => {
    dispatch(Detailaction(id))

  })
  const addToCartHandler = () => {
    history.push(`/cart/${id}?qty=${qty}`);
  };
  return (
    <div className={classes.control}>
      {state.map((item) =>

        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={4} className={classes.control}>
            <img src={item?.image} alt="NO Image"  style={{maxWidth: '400px'}}/>

          </Grid>
          <Grid item xs={4} sclassName={classes.control}>
            <h1>{item?.name}</h1>
            <h5>{item?.category}</h5>
            <h6>{item?.price}</h6>
            <p>{item?.description}</p>
            <pre>Rating  {item?.rating}</pre>
          </Grid>
          <Grid item xs={4} className={classes.control}>


            <Card>
              <List className="classes.list">
                <ListItem>
                <ListItemText primary="Price" secondary={item.price} />
                </ListItem>
                <ListItem>
                  <div className='row'>
                    <ListItemText>Status </ListItemText>
                    <div>
                      {
                        item.countInStock > 0 ? <span className='success'> In Stock</span> :
                          <span variant='danger' style={{color: 'red'}}> Unavailable</span>
                      }
                    </div>
                  </div>
                </ListItem>
                {/* Check product quantity first */}
                {
                  item.countInStock > 0 && (
                    <>
                      <ListItem>
                        <div className='row'>
                          <ListItemText>Qty</ListItemText>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {
                                [...Array(item.countInStock)].map((x, i) => (
                                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))
                              }
                            </select>
                          </div>
                        </div>
                      </ListItem>
                      <ListItem>
                        <Button 
                        variant="contained"
                          onClick={addToCartHandler}
                        >
                          Add to Cart
                        </Button>
                      </ListItem>
                    </>
                  )
                }

              </List>
            </Card>

     
          </Grid>
        </Grid>
      )}

    </div>
  )
}
