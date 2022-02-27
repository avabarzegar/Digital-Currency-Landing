import React  from 'react';
import { Routes, Route, Link } from "react-router-dom"
import logo from '../pictures/logo.png';
import Typography from '@mui/material/Typography';
import BootstrapButton from "../components/signup";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Home from './Home';
import Exchange from './Exchange';
import Mobile from './Mobile';
import Withdraw from './Withdraw';
import Deposit from './Deposit';
import Market from './Market';
import NotFound from './NotFound';
import Register from './Register';
import CustomizedDialogs from '../components/nav-lan-currency';
import SignIn from '../components/signup';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import BarChartIcon from '@mui/icons-material/BarChart';
import DownloadIcon from '@mui/icons-material/Download';
import LanguageIcon from '@mui/icons-material/Language';



const App = () => {
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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
       <List>
          <ListItem button variant="text" component={Link} to="SignIn" style={{color : 'white'}}>
            <ListItemText sx={{textAlign:'center'}} primary='Sign in' />
          </ListItem>
      
          <ListItem to='Register' component={Link} className='CustomBtn' variant="contained"  size='small'>
            <ListItemText sx={{color: 'black',textAlign:'center'}} primary='Register' />
          </ListItem>
          <Divider style={{backgroundColor: '#ffffff1a'}} />
          <ListItem button component={Link} to="Market" style={{color : 'white'}}>
            <ListItemIcon style={{color:'#848e9c'}}>
              <BarChartIcon />    
            </ListItemIcon>
            <ListItemText primary='Markets' />
          </ListItem>
         
          
          <ListItem button component={Link} to="Exchange" style={{color : 'white'}}>
            <ListItemIcon style={{color:'#848e9c'}}>
              <CurrencyExchangeIcon />
            </ListItemIcon>
            <ListItemText primary='Exchange' />
          </ListItem>
         
          <ListItem button component={Link} to="Deposit" style={{color : 'white'}}>
            <ListItemIcon style={{color:'#848e9c'}}>
              <AccountBalanceWalletOutlinedIcon />
              
            </ListItemIcon>
            <ListItemText primary='Deposit' />
          
          </ListItem>
          
          <ListItem button component={Link} to="Withdraw" style={{color : 'white'}}>
            <ListItemIcon style={{color:'#848e9c'}}>
              <AccountBalanceWalletOutlinedIcon />
              
            </ListItemIcon>
            <ListItemText primary='Withdraw' />
          
          </ListItem>
          
          <ListItem button component={Link} to="Mobile" style={{color : 'white'}}>
            <ListItemIcon style={{color:'#848e9c'}}>
              <TipsAndUpdatesIcon />
              
            </ListItemIcon>
            <ListItemText primary='Mobile App' />
          
          </ListItem>
       
      </List>
      <Divider style={{backgroundColor: '#ffffff1a'}} />
      <List>
      <ListItem button component={Link} to="Download" style={{color : 'white'}}>
            <ListItemIcon style={{color:'#848e9c'}}>
              <DownloadIcon />
            </ListItemIcon>
            <ListItemText primary='Download' />
          </ListItem>
          <ListItem button component={Link} to="LanguageIcon" style={{color : 'white'}}>
            <ListItemIcon style={{color:'#848e9c'}}>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText primary='English | TRY' />
          </ListItem>
      </List>
    </Box>
  );

    return (     
    <div className='App'>
      <nav>
        <Grid container className='MenuContainer'>
          <Grid item xs={2} sx={{display:'flex', alignItems: 'center',justifyContent:'start'}}>
            <Link to="/" activeClassName="active" end>
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
            </Link>
          </Grid>
          <Grid className='MenuContainer' item xs={6} sx={{justifyContent: 'start', display:{xs: 'none' , md: 'flex'} , alignItems: 'center' , flexDirection: 'row'}}>
          <Grid item >
            <Link to="Market" activeClassName="active">
              Markets
            </Link>
          </Grid>
          <Grid item >
            <Link to="Exchange" activeClassName="active">
            Exchange
            </Link>
          </Grid>
          <Grid item >
            <Link to="Deposit" activeClassName="active">
            Deposit
            </Link>
          </Grid>
          <Grid item >
            <Link to="Withdraw" activeClassName="active">
            Withdraw
            </Link>
          </Grid>
          <Grid item >
            <Link to="Mobile" activeClassName="active">
            Mobile App
            </Link>
          </Grid>
          </Grid>
          <Grid item xs={4} sx={{justifyContent: 'end', display:{xs: 'none' , md: 'flex'} , alignItems: 'center' , flexDirection: 'row'}}>
            <Link to="SignIn" button variant="text" sx={{mx: 2, color: 'white',textDecoration: 'none'}}>Sign in</Link>      
              <Link to="Register"> 
              <BootstrapButton variant="contained"  size='small'>
               Register  
              </BootstrapButton>
             </Link>
             <CustomizedDialogs />  
          </Grid>
         
        </Grid>
             <Grid item xs={4} sx={{justifyContent: 'end', display:{xs: 'flex' , md: 'none'} , alignItems: 'center' , flexDirection: 'row'}}>
          <Link to="Register"> 
              <BootstrapButton variant="contained"  size='small'>
               Register  
              </BootstrapButton>
             </Link>
            <div sx={{ display: { xs: 'flex', md: 'none' },justifyContent:'end'}}>           
              {/* <TemporaryDrawer /> */}
              <div>
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
    </div>             
    </Grid>
    </nav>
      <div className="main">
          <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Market" element={<Market />}></Route>
          <Route path="Exchange" element={<Exchange />}></Route>
          <Route path="Deposit" element={<Deposit />}></Route>
          <Route path="Withdraw" element={<Withdraw />}></Route>
          <Route path="Mobile" element={<Mobile />}></Route>
          <Route path="Register" element={<Register />}></Route>
          <Route path="SignIn" element={<SignIn />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          </Routes>
      </div>
       
      {/* <AppBar position="static" className='navbar'>
        <Container maxWidth="xl">
          <Toolbar sx={{display: 'flex' , justifyContent:{xs:'space-between' , md: 'flex-start'}}} disableGutters>
           <Link underline='none' to="/" activeClassName="active">
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
            
        </Link>
        <Box sx={{display: 'flex', justifyContent:{ md: 'space-between' , xs: 'end'} , flexDirection:{md: 'row-reverse'}}} >
            <Box sx={{display:{xs: 'flex' , md: 'none'} , alignItems: 'center'}}>
              <BootstrapButton variant="contained"  size='small'>
               Register
              </BootstrapButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' },justifyContent:'end'}}>           
              <TemporaryDrawer />
            </Box>            
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:'start' }}>
             <List style={{display:'flex' , flexDirection:'row' }}>
              <listItem>
                <Link button underline='none' to="Market" activeClassName="active">
                  <ListItemButton>
                   <ListItemText sx={{color: 'white'}} primary="Market" />
                  </ListItemButton>              
                  </Link>
              </listItem>
              <listItem>
                <Link button underline='none' to="Exchange" activeClassName="active">
                  <ListItemButton>
                    <ListItemText sx={{color: 'white'}} primary="Exchange" />
                  </ListItemButton>
                  </Link>
              </listItem>
              <listItem>
                <Link button underline='none' to="Deposit" activeClassName="active">
                  <ListItemButton>
                    <ListItemText sx={{color: 'white'}} primary="Deposit" />
                  </ListItemButton>
                  </Link>
              </listItem>
              <listItem>
                <Link button underline='none' to="Withdraw" activeClassName="active">
                  <ListItemButton> 
                    <ListItemText sx={{color: 'white'}} primary="Withdraw" />
                  </ListItemButton>
                 </Link>
              </listItem>
              <listItem>
                <Link button underline='none' to="Mobile" activeClassName="active">
                  <ListItemButton>
                    <ListItemText sx={{color: 'white'}} primary="Mobile App" />
                  </ListItemButton>
                  </Link>
              </listItem>
             </List>
            </Box>
            <Box sx={{display:{xs: 'none' , md: 'flex'} , alignItems: 'center' , flexDirection: 'row'}}>
             <Link href='#' button variant="text" sx={{mx: 2, color: 'white',textDecoration: 'none'}}>Sign in</Link>      
             <BootstrapButton variant="contained"  size='small'>
              <Link sx={{color: 'black', textDecoration: 'none'}} href='#'>
               Register
              </Link>    
             </BootstrapButton>
             <CustomizedDialogs />
            </Box>
          </Toolbar>
        </Container> 
    </AppBar> */}
    </div>
    )
  };

export default App;