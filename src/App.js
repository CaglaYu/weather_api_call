import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Routes, Route } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Profile from "./Components/Profile";


import { history } from './helpers/history';
import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import myLogo from "./images/butter1.png"
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {SocialIcon}  from 'react-social-icons';
import './Components/nav.css';
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

const pages = ['Today', 'Hot Topics', 'Categories'];
const settings1 = ['Account', 'Logout'];
const settings2 = ['Login', 'Register'];
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const dispatch = useDispatch();
 
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);

    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    console.log("bakburada")
    AuthService.logout();
    setCurrentUser(undefined);
  };

    
  const CustomRouter = ({
    basename,
    children,
    history,
  }) => {
    const [state, setState] = React.useState({
      action: history.action,
      location: history.location,
    });
  
    React.useLayoutEffect(() => history.listen(setState), [history]);
  
    return (
      <Router
        basename={basename}
        children={children}
        location={state.location}
        navigationType={state.action}
        navigator={history}
      />
    );
  };



 
  
  const useStyles = makeStyles({
    addButton: {
      "&:hover": {
        color: "#f88d13",
        background: '#15584C',
      },
    }
  });
  const classes = useStyles();

  useEffect(() => {


    EventBus.on("logout", () => {
      logOut();
    });
   
    
    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
      <CustomRouter history={history}>
        <div>
          <div>
           








          <AppBar position="static"  style={{ background: '#17181C' }}>
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}

                    style={{ textDecoration: 'none' }}
                  >
                  
                    <Link component={RouterLink} to="/" underline="none" color="inherit" >
                    <div className="grid1">
                      <img src={myLogo}  className="nav--icon"/>
                      <div className="grid">
                        <h3 className="nav--logo_text elegantshadow">TRANSFORMATIONS </h3>
                        <h4 className="nav--subtitle">BEFORE & AFTER PHOTOS</h4>  
                      </div>
                    </div>
                    </Link>
                  </Typography>
                  
             
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                      
                      <Button
                        key={page}
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        component={RouterLink} to={"/" + page}
                        sx={{ my: 2, color: '#BAA89B', textDecoration: 'none', display: 'block',fontFamily: 'Nanum Gothic',fontWeight: 600,fontSize:"1rem"   }}
                        className={classes.addButton} 
                        
                      >
                        {page}
                      </Button>
                      
                    ))}
                  </Box>


                  <div className='grid0'>
                        <SocialIcon className="nav--social" url="https://twitter.com/jaketrent" 
                        style={{ height: 28, width: 28 }} bgColor="#f88d13"  />
                        <SocialIcon className="nav--social" url="https://facebook.com/jaketrent" 
                        style={{ height: 28, width: 28 }}  bgColor="#f88d13" />
                        <SocialIcon className="nav--social" url="https://instagram.com/jaketrent" 
                        style={{ height: 28, width: 28 }}  bgColor="#f88d13" />	
                        <SocialIcon className="nav--social" url="https://youtube.com/jaketrent" 
                        style={{ height: 28, width: 28 }}  bgColor="#f88d13" />															
                  </div>	

                  <Search style={{ backgroundColor: '#17181C', color: '#BAA89B',
                  border:'0.1em solid #15584C'}} >
                    <SearchIconWrapper>
                      <SearchIcon style={{ color: '#15584C'}} />
                    </SearchIconWrapper>
                    <StyledInputBase
                      
                      
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                  {currentUser ? (

                    <CurrentUserBox cuName={currentUser.username}/>
            ) : (
                    <NotCurrentUserBox/> 
            )}
                </Toolbar>
                
              </Container>
            </AppBar>










           
          </div>
       
          
          <div className="containerm">
            
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/logout" element={<Logout />} />

              <Route exact path="/register" element={<Register />} />
              <Route exact path="/profile" element={<Profile />} />
      
            </Routes>
          </div>
          <AuthVerify logOut={this.logOut}/>
        </div>
      </CustomRouter>
    );
  }


  export function CurrentUserBox(cuName) {
    const [anchorEl, setAnchorEl] = useState(null);
  
    return (
      <Box sx={{ flexGrow: 0 }}>

    <IconButton onClick={(event) => setAnchorEl(event.currentTarget)} sx={{ p: 0 }}>
  
      <Avatar alt={cuName} src="/static/images/avatar/2.jpg" />
    
    </IconButton>
  <Menu
    sx={{ mt: '45px' }}
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
    open={Boolean(anchorEl)}
    onClose={() => setAnchorEl(null)}
  >
    {settings1.map((setting) => (
     
      <MenuItem key={setting} 
        component={RouterLink} to={"/" + setting}
        onClick={() => setAnchorEl(null)}
      >
        <Typography key={setting} textAlign="center">{setting}</Typography>
      </MenuItem>
    ))}
  </Menu>
</Box>

 
    )
  }

  export function NotCurrentUserBox() {
    const [anchorEl, setAnchorEl] = useState(null);
  
    return (
      <Box sx={{ flexGrow: 0 }}>

      <Button id="btnDen" onClick={(event) => setAnchorEl(event.currentTarget)} sx={{ p: 0 }}
        aria-label="account of current user"
        aria-controls="menu-appbar2"
        aria-haspopup="true"
      >
        <AccountCircleIcon className="accIcon"/>&nbsp;
        <p  
        
        style={{ my: 2, color: '#BAA89B', textDecoration: 'none', display: 'block',
        fontFamily: 'Poppins',fontWeight: 600,fontSize:"0.8rem",marginTop:'1em',textTransform:'lowercase'   }} >My Account </p>
      
      </Button>
  
      <Menu
      
        id="menu-appbar2"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        
    >
      {settings2.map((setting) => (
       
        <MenuItem key={setting}  
          component={RouterLink} to={"/" + setting}
          onClick={() => setAnchorEl(null)}
        >
          <Typography key={setting} textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
    
    
  </Box>
 
    )
  }














  

export default App;