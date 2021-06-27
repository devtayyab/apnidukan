import React, {useState, useEffect} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {Button} from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {searchaction} from '../../store/action/product'
import {logoutaction} from '../../store/action/useraction'
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
     
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',    
    },
   
  },
  links:{
    marginRight: theme.spacing(3),
    color: 'white'
  }
}));

export default function Navbar() {

  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const state = useSelector(state=> state)
const [search, setsearch] = useState();
const [user, setuser] =useState(JSON.parse(localStorage.getItem("user")))
useEffect(() => {
  setuser(user)
}, [dispatch,state])
console.log(user?.result)

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
const Logout =()=>{
  console.log("logout")
dispatch(logoutaction)

}
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleSearch =()=>{
    search.trim()
    dispatch(searchaction(search))
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>{user?.result?.name}</MenuItem>
      {/* <MenuItem onClick={()=>
        handleMenuClose
        }>logout</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
       
      <MenuItem>
     {!user ? 
        <IconButton aria-label="show 4 new mails" color="inherit" >
         <Link to="/signup">
        <p>Signup</p>
        </Link>
        </IconButton>
        
       : null }
      </MenuItem>
      {!user ?
      <MenuItem>
         <IconButton aria-label="show 11 new notifications" color="inherit">
          <Link to="/signin">
          <p>Signin</p>
          </Link>
        </IconButton> 
       
     </MenuItem> 
     :null }
      <MenuItem>
      {user ?
              
              <Link to="/add">
              <h4>SELL</h4>
              </Link>: null }
              </MenuItem>
              <MenuItem>
      {user ?
              <Button onClick={()=>Logout()}>

              Logout
              </Button>
              
              : null }
              </MenuItem>
     
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>{user?.result?.name}</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
         <Link to="/">
          <Typography className={classes.title} variant="h6" noWrap>
            Dukkan
          </Typography>
          </Link>
          </IconButton>
         
          <div className={classes.search}>
           
            <InputBase
              placeholder="Search…"
              onChange={(e)=>setsearch(e.target.value)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton onClick={handleSearch}>
            <SearchIcon />
              </IconButton>
           </div>
           
           <div className={classes.grow} />
           
          <div className={classes.sectionDesktop}>
            {!user ? 
             
                <Link to="/signup" >
                <h3 className={classes.links}>Register</h3>
                </Link>
              :null }
          
           {!user  ? 
              <Link to="/signin" >
              <h3 className={classes.links}>Signin</h3>
              </Link>
              :null }
              {user ?
              
              <Link to="/add">
              <h4 className={classes.links}>SELL</h4>
              </Link>: null }
              {user ?
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
             </IconButton>

             : null}
           
             
          </div>
          

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
