import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import BarChartIcon from '@mui/icons-material/BarChart';
import BootstrapButton from './signup';
import { Link } from '@mui/material';




const TemporaryDrawer=() => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box 
      sx={{ width: 250 , backgroundColor:'#12161c' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider style={{backgroundColor: '#ffffff1a'}} />
      <List>
        {/* {['Markets', 'Exchange', 'Deposit', 'Withdraw' , 'Mobile App'].map((text, index) => ( */}
          <ListItem button style={{color : 'white'}}>
            <ListItemIcon style={{color:'#848e9c'}}>
              <BarChartIcon />    
            </ListItemIcon>
            <ListItemText primary='Markets' />
          </ListItem>
          <ListItem button style={{color : 'white'}}>
            <ListItemIcon style={{color:'#848e9c'}}>
              <BarChartIcon />
              
            </ListItemIcon>
            <ListItemText primary='Exchange' />
          </ListItem>
          <ListItem button style={{color : 'white'}}>
            <ListItemIcon style={{color:'#848e9c'}}>
              <BarChartIcon />
              
            </ListItemIcon>
            <ListItemText primary='Deposit' />
          </ListItem>
          <ListItem button style={{color : 'white'}}>
            <ListItemIcon style={{color:'#848e9c'}}>
              <BarChartIcon />
              
            </ListItemIcon>
            <ListItemText primary='Withdraw' />
          </ListItem>
          <ListItem button style={{color : 'white'}}>
            <ListItemIcon style={{color:'#848e9c'}}>
              <BarChartIcon />
              
            </ListItemIcon>
            <ListItemText primary='Mobile App' />
          </ListItem>
        
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
            <Box sx={{display: 'flex' , alignItems: 'center' , flexDirection: 'column'}}>
             <Link href='#' button variant="text" sx={{mx: 2, my: 3, color: 'white',textDecoration: 'none'}}>Sign in</Link>      
             <BootstrapButton  sx={{px:7, mb: 3}} variant="contained"  size='small'>
              <Link sx={{color: 'black', textDecoration: 'none'}} href='#'>
               Register
              </Link>    
             </BootstrapButton>
            </Box>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}


export default TemporaryDrawer;

