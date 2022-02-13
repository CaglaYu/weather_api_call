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
import { Link } from "react-router-dom";
import './nav.css';
import { makeStyles } from "@mui/styles";

const pages = ['Today', 'Hot Topics', 'Categories'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
        color: "#f88d13"
      }
    },
    addIcon: {
      "&:hover": {
        color: "#f88d13"
      }
    }
  });
  const classes = useStyles();
  return (
    <AppBar position="static"  style={{ background: '#21222A' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            onClick={handleHome}
            component={Link} to={"/"}
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
                <MenuItem key={page} onClick={handleCloseNavMenu}  
                style={{ color: '#13483E' }}
                className={classes.addIcon} 
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            component={Link} to={"/"} 
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
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#BAA89B', display: 'block',fontFamily: 'Nanum Gothic',fontWeight: 600,fontSize:"1rem"   }}
                className={classes.addButton} 
              >
                {page}
              </Button>
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <div className='grid0'>
								<SocialIcon className="nav--social" url="https://twitter.com/jaketrent" 
								style={{ height: 28, width: 28 }} bgColor="#f88d13" />
								<SocialIcon className="nav--social" url="https://facebook.com/jaketrent" 
								style={{ height: 28, width: 28 }}  bgColor="#f88d13" />
								<SocialIcon className="nav--social" url="https://instagram.com/jaketrent" 
								style={{ height: 28, width: 28 }}  bgColor="#f88d13" />	
								<SocialIcon className="nav--social" url="https://youtube.com/jaketrent" 
								style={{ height: 28, width: 28 }}  bgColor="#f88d13" />															
					</div>	
          <Search style={{ backgroundColor: '#21222A',
          border:'0.1em solid #13483E'}} >
            <SearchIconWrapper>
              <SearchIcon style={{ color: '#13483E'}} />
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
