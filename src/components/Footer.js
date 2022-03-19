import React  from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@material-ui/core/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import footerApple from '../pictures/footer-apple.png';
import footerGooglePlay from '../pictures/footer-googleplay.png';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import LanguageIcon from '@mui/icons-material/Language';
import { Box } from '@mui/material';
import { t } from 'i18next';



export default function Footer(){

    
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) { 

    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }
  
    return(
        <>
        <footer>
            <Container>
                <Grid container sx={{justifyContent:'space-between'}}>
                    <Grid container xs={12} md={5}>  
                          <Grid xs={12}>
                              <Typography>
                              Pouyam Office address
                              <br/>
                              BN TEKNOLOJİ A.Ş.
                              <br/>
                              Esentepe Mah. Büyükdere Cad. Ferko Apt. No:175/7
                              <br/>
                              Şişli İstanbul
                              </Typography>
                          </Grid>
                          <Grid xs={12}>
                            <Typography>
                            <br/>
                            Email
                            <br/>
                            destek@pouyam.com
                            <br/>
                            <br/>
                            </Typography>
                          </Grid>
                          <Grid xs={12} sx={{flexDirection:'row'}}>
                              <Link to='SignIn' sx={{mr:2}}>
                              <img src={footerApple} className='footer-googleplay' style={{marginRight:'.5rem',mb:1}} alt='app store'></img>
                              </Link>
                              <Link to='SignIn'>
                              <img src={footerGooglePlay} className='footer-googleplay' style={{mb:1}} alt='google play'></img>
                              </Link>
                          </Grid>
                    </Grid>
                    <Grid container xs={12} md={6}>
                      <Grid xs={12} sm={4}>
                        <List>
                          <ListItem>
                            <ListItemText className='first-footer-item' primary={t('footer-about')} />
                          </ListItem>
                          <ListItem component={Link} to=''>
                            <ListItemText primary={t('footer-about-about')} />
                          </ListItem>
                          <ListItem component={Link} to=''>
                            <ListItemText primary={t('footer-about-contact')} />
                          </ListItem>
                          <ListItem component={Link} to=''>
                            <ListItemText primary={t('footer-about-faq')} />
                          </ListItem>
                          <ListItem component={Link} to=''>
                            <ListItemText primary={t('footer-about-privacy')} />
                          </ListItem>
                        </List>
                      </Grid>
                      <Grid xs={12} sm={4}>
                        <List>
                          <ListItem component={Link} to=''>
                            <ListItemText className='first-footer-item' primary={t('footer-features')} />
                          </ListItem>
                          <ListItem component={Link} to=''>
                            <ListItemText primary={t('footer-feature-coins')} />
                          </ListItem>
                          <ListItem component={Link} to=''>
                            <ListItemText primary={t('footer-features-blogs')} />
                          </ListItem>
                          <ListItem component={Link} to=''>
                            <ListItemText primary={t('footer-features-shop')} />
                          </ListItem>
                        </List>
                      </Grid>
                      <Grid xs={12} sm={4}>
                        <List className='footer-last-list'>
                        <ListItem>
                            <ListItemText className='first-footer-item' primary='Community' />
                          </ListItem>
                          <ListItem sx={{display:'flex',flexDirection:'row',pl:0,justifyContent:'start'}}>
                            <ListItemIcon component={Link}>
                              <TelegramIcon className='social-icons' />
                            </ListItemIcon>
                            <ListItemIcon component={Link}>
                              <FacebookRoundedIcon className='social-icons' />
                            </ListItemIcon>
                            <ListItemIcon component={Link}>
                              <TwitterIcon className='social-icons' />
                            </ListItemIcon>
                            <ListItemIcon component={Link}>
                              <InstagramIcon className='social-icons' />
                            </ListItemIcon>
                          </ListItem>
                          <ListItem
                          onMouseLeave={handleClose}
                          >
                          <Button
                          className='footer-lan-btn'
                          ref={anchorRef}
                          id="composition-button"
                          aria-controls={open ? 'composition-menu' : undefined}
                          aria-expanded={open ? 'true' : undefined}
                          aria-haspopup="true"
                          onMouseEnter={handleToggle}
                          onClick={handleToggle}
                        >
                          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}} color='white'>
                              <LanguageIcon fontSize='small' />
                              <Typography sx={{fontSize:'.8rem',textTransform:'none',ml:1}}>English</Typography>
                          </Box>
                        </Button>
                        <Popper
                          open={open}
                          anchorEl={anchorRef.current}
                          role={undefined}
                          placement="top-start"
                          transition
                          disablePortal
                          
                        >
                          {({ TransitionProps, placement }) => (
                            <Grow
                              {...TransitionProps}
                              style={{
                                transformOrigin:
                                  placement === 'left top',
                              }}
                            >
                              <Paper sx={{bgcolor:'#373737'}}>
                                <ClickAwayListener
                                 onKeyDown={handleClose}
                                 
                                 >
                                  <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                    sx={{display:'flex',flexDirection:'row',bgcolor:'1e2126'}}
                                  >
                                    <MenuItem component={Link} to='' className='lan-menu-item' onClick={handleClose}>English</MenuItem>
                                    <MenuItem component={Link} to='' className='lan-menu-item' onClick={handleClose}>Türkçe</MenuItem>
                                  </MenuList>
                                </ClickAwayListener>
                              </Paper>
                            </Grow>
                          )}
                          </Popper>
                        </ListItem>

                        </List>
                      </Grid>
                    </Grid>
                    </Grid>
                
            </Container>
            
            </footer>
            <Box className='footer-copyRight'>
                <Typography>
                    Copyright © 2022 https://www.pouyam.com All rights reserved.
                </Typography>
            </Box>
            </>
    )
}