import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CwLogo from '../assets/cw.jpeg'
import { useAuth } from '../context/AuthContextProvider';
import {Link, useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none", fontFamily: "Girassol",[theme.breakpoints.up("sm")]: {display: "block",  },
    "& span": {fontSize: 30,color: "wheat"},    
  },
  
  menuButton: { marginRight: theme.spacing(2),  
  },
  appbar: {
    backgroundColor:'#046582'
  },
  logo:{
    width: 40,
  },
  linkStyle: {
    textDecoration: "none",
    color: "black",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  let {currentUser, logout} = useAuth();
  const history = useHistory();


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setAnchorEl(null);
    logout();
  }
  const handleDashBoard = () => {
    setAnchorEl(null);
    history.push("/");
  }
  const handleNewBlog = () => {
    setAnchorEl(null);
    history.push("/new-blog");
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDashBoard}>
            <a href="www.clarusway.com"><img src={CwLogo} alt="" className={classes.logo} /></a>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           <a href="https://github.com/szrbrhm" style={{textDecoration:"none"}}><span>{'< Sezer /> BLOG'}</span></a> 
          </Typography>
          
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle  style={{fontSize:'40px'}}/>
              </IconButton>
              {currentUser ?.email? (<Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="/profile" className={classes.linkStyle}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <Link to="/new-blog" className={classes.linkStyle}>
                <MenuItem onClick={handleNewBlog}>New Blog</MenuItem> 
                
                </Link>
                <Link to="/login" className={classes.linkStyle}>
                <MenuItem onClick={handleLogOut}>Logout</MenuItem> 
                
                </Link>
              </Menu>) : ( 
                <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="/login" className={classes.linkStyle}>
                <MenuItem onClick={handleClose}>Login</MenuItem>
                </Link>
                <Link to="/register" className={classes.linkStyle}>
                <MenuItem onClick={handleClose}>Register</MenuItem>
                
                </Link>
              </Menu>)}
             
            </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

