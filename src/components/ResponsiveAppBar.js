import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import StyledLink from './linkstyle';
import logo from '../pictures/logo.png';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import BarChartIcon from '@mui/icons-material/BarChart';
import { ThemeProvider } from '@mui/private-theming';
import {createTheme} from '@mui/system';

import BootstrapButton from './signup';

const pages = ['Markets', 'Exchange', 'Deposite','Withdraw','Mobile App'];


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);



  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const TemporaryDrawer=() => {
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const drawerTheme = createTheme({
      palette: {
          background: {
              paper: '#fff',
          },
          text: {
              light: '#fff',
              dark: '#0000',
              gray: '#848e9c'
          },
          action: {
              active: '#001E3C',
          },
          success: {
              dark: '#009688',
          },
      },
  });

    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <ThemeProvider theme={drawerTheme}>
      <Box 
        sx={{ width: 250 , backgroundColor:'#12161c' }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Divider style={{backgroundColor: '#ffffff1a'}} />
        <List>
          {['Markets', 'Exchange', 'Deposit', 'Withdraw' , 'Mobile App'].map((text, index) => (
            <ListItem button key={text} style={{color : 'white'}}>
              <ListItemIcon style={{color:'#848e9c'}}>
                {index === 0 ? <BarChartIcon /> : null}
                {index === 1 ? <CurrencyExchangeIcon /> : null}
                {index === 2 ? <AccountBalanceWalletOutlinedIcon /> : null}
                {index === 3 ? <AccountBalanceWalletOutlinedIcon /> : null}
                {index === 4 ? <TipsAndUpdatesIcon /> : null}

              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider style={{backgroundColor: '#ffffff1a'}} />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text} style={{color : 'white'}}>
              <ListItemIcon style={{color:'#848e9c'}}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
      </ThemeProvider>
    );
  
    return (
      <div sx={{backgroundColor:'#12161c'}}>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            
            <Button onClick={toggleDrawer(anchor, true)}>
              <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
               <MenuIcon style={{color:'white'}} />
              </IconButton>
            </Button>
            <Drawer
           
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
  }


  return (
    <AppBar position="static" className='navbar'>
      <Container maxWidth="xl">
        <Toolbar sx={{display: 'flex' , justifyContent:{xs:'space-between' , md: 'flex-start'}}} disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: "flex" }}
          >         
      <img
        src={logo} 
        alt="logo"     
        style={{
          width:150, 
          borderRadius: 40 / 2,
          marginLeft: 15,
        }}
      />
          </Typography>
          
          <Box sx={{display: 'flex', justifyContent:{ md: 'space-between' , xs: 'end'} , flexDirection:{md: 'row-reverse'}}} >
            <Box sx={{display:{xs: 'flex' , md: 'none'} , alignItems: 'center'}}>
            <BootstrapButton variant="contained"  size='small'>
        Register
      </BootstrapButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' },justifyContent:'end'}}>           
            <TemporaryDrawer />
            <Menu 
            textAlign="end"
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </Box>
            
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:'start' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{display:{xs: 'none' , md: 'flex'} , alignItems: 'center' , flexDirection: 'row'}}>
        <StyledLink href='#' button variant="text" sx={{mx: 2, color: 'white',textDecoration: 'none'}}>Sign in</StyledLink>      
        <BootstrapButton variant="contained"  size='small'>
         <StyledLink sx={{color: 'black'}} href='#'>
           Register
         </StyledLink>    
        </BootstrapButton>
    </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
