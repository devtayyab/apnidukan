import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../store/action/cartaction';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import { Paper, Button } from '@material-ui/core';
// import MessageBox from '../components/MessageBox';


function CartScreen(props) {

    // check if user has already signed in, if not, redirect user to signin 
    const userSignin = useSelector(state => state.user);
    const { result } = userSignin;
    // if (!result) {
    //     props.history.push('/signin');
    // }

    const productId = props.match.params.id;
    ///cart/${productId}?qty={qty}
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();
    //get cart and cartItem from redux store using useSelector
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;


    // on page load, check if productId, if so, dispatch addToCart action 
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    //delete cartItem action
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    //After checkout btn is clicked, go to signin page and then shipping page
    const checkoutHandler = () => {
        props.history.push(`/shipping/${productId}`)
    };

    return (
        <div className='top row'>

            <h1>Shopping Cart </h1>

            {
                cartItems.length === 0 ? (
                    <h1>

                        Cart is empty. <Link to='/'> Go Shopping</Link>
                    </h1>
                ) : (

                    <div>

                        {
                            cartItems.map(item => (
                                <Grid container >

                                    
                                    <Grid sm={4}>
                                        <div>
                                            <img src={item.image} alt={item.name} className='small' />
                                        </div>
                                    </Grid>
                               
                                    <Grid sm={3} spacing={2}>
                                        <div className="min-30">
                                            <Link to={`/product/${item.product}`}>
                                             <h1>   {item.name}</h1>
                                            </Link>
                                        </div>
                                        <div>
                                            <select value={item.qty}
                                                onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                            >
                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <h3>${item.price}</h3>
                                        <div>
                                            <Button
                                            variant="contained"
                                                type="button"
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </Grid>
                                   
                                    <Paper>
                                    <Grid sm={3} spacing={2}>

<List>
    <ListItem>
        <h2>
            Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} itmes)
            : $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
        </h2>
    </ListItem>
    <ListItem>
        <Button type='button'
           variant="contained"
            onClick={checkoutHandler}
            disabled={cartItems.length === 0}
        >
            Checkout
        </Button>
    </ListItem>
</List>


</Grid>
</Paper>
                                </Grid>
                            ))

                        }
                    </div>

                )

            }

       

        </div>


    );


}

export default CartScreen;
