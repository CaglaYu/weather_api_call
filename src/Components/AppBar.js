import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import myLogo from "../images/butter1.png"
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {SocialIcon}  from 'react-social-icons';
import { Route, BrowserRouter, Routes, NavLink } from "react-router-dom";
import './nav.css';
import { makeStyles } from "@mui/styles";

const pages = ['Today', 'Hot Topics', 'Categories'];
const settings = ['Login', 'Account', 'Dashboard', 'Logout'];

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

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleHome = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const useStyles = makeStyles({
    addButton: {
      
      "&:hover": {
        color: "#f88d13",
        background: '#15584C',
      },
    },
    addIcon: {
      "&:hover": {
        color: "#f88d13",
        background: '#15584C',
      },
    }
  });
  const classes = useStyles();
  return (
    <AppBar position="static"  style={{ background: '#17181C' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            onClick={handleHome}
            component={NavLink} to={"/"}
            style={{ textDecoration: 'none' }}
          >
            <img src={myLogo}  className="nav--icon"/>
            <div className="grid">
				      <h3 className="nav--logo_text elegantshadow">TRANSFORMATIONS </h3>
				      <h4 className="nav--subtitle">BEFORE & AFTER PHOTOS</h4>  
			      </div>
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton 
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <NavLink to={"/" + page} key={page}  style={{ textDecoration: 'none',color: '#15584C'  }} >
                 
                <MenuItem key={page} onClick={handleCloseNavMenu}  
                
                className={classes.addIcon} 
               
               
                >
                  <Typography key={page} textAlign="center">{page}</Typography>
                </MenuItem>  </NavLink>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            component={NavLink} to={"/"} 
            style={{ textDecoration: 'none' }}
        
          >
            <img src={myLogo}  className="nav--icon"/>
            <div className="grid">
				<h3 className="nav--logo_text elegantshadow">TRANSFORMATIONS </h3>
				<h4 className="nav--subtitle">BEFORE & AFTER PHOTOS</h4>  
			</div>            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink to={"/" + page} key={page}  style={{ textDecoration: 'none',color: '#15584C'  }} >
              
              <Button
                key={page}
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#BAA89B', textDecoration: 'none', display: 'block',fontFamily: 'Nanum Gothic',fontWeight: 600,fontSize:"1rem"   }}
                className={classes.addButton} 
              >
                {page}
              </Button>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
             
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                 <NavLink to={"/"+setting} key={setting}  style={{ textDecoration: 'none',color: '#15584C'  }} >
                 
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography key={setting} textAlign="center">{setting}</Typography>
                </MenuItem></NavLink>
              ))}
            </Menu>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
