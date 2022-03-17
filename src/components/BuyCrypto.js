import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import account from '../pictures/account.png';
import coin from '../pictures/coin.png';
import global from '../pictures/global.png';
import wallet from '../pictures/wallet.png';
import { Link } from 'react-router-dom';




export default function BuyCrypto(){
    return(   
    <Box sx={{bgcolor:'#fafafa'}}>
      <Container sx={{px:1}}>
        <Typography sx={{textAlign:'center',fontSize:'2.2rem',fontWeight:'500',py:5}}>
        You Can Start Buying Crypto Easily in 4 Steps
        </Typography>
        <Grid container sx={{padding:{sm:'0 104px',md:'0'},mt:5}} spacing={0}>
          <Grid item component={Link} to='Register' md={3} sm={6} xs={12} className='crypto-grid-container'>
            <Box className='crypto-img-container'>
              <img src={global} alt='cryptoPic' width='100%'></img>
            </Box>
            <Typography sx={{fontSize:'1.1rem',mb:2}}>Step 1</Typography>
            <Typography sx={{fontSize:'1rem',mb:7}}>Sign up for binance</Typography>
          </Grid>
          <Grid item component={Link} to='#' md={3} sm={6} xs={12} className='crypto-grid-container'>
            <Box className='crypto-img-container'>
              <img src={account} alt='cryptoPic' width='100%'></img>
            </Box>
            <Typography sx={{fontSize:'1.1rem',mb:2}}>Step 2</Typography>
            <Typography sx={{fontSize:'1rem',mb:7}}>Verify Your account</Typography>
          </Grid>
          <Grid item component={Link} to='#' md={3} sm={6} xs={12} className='crypto-grid-container'>
            <Box className='crypto-img-container'>
              <img src={wallet} alt='cryptoPic' width='100%'></img>
            </Box>
            <Typography sx={{fontSize:'1.1rem',mb:2}}>Step 3</Typography>
            <Typography sx={{fontSize:'1rem',mb:7}}>Fund your account</Typography>
          </Grid>
          <Grid item component={Link} to='#' md={3} sm={6} xs={12} className='crypto-grid-container'>
            <Box className='crypto-img-container'>
              <img src={coin} alt='cryptoPic' width='100%'></img>
            </Box>
            <Typography sx={{fontSize:'1.1rem',mb:2}}>Step 4</Typography>
            <Typography sx={{fontSize:'1rem',mb:7}}>Select coin</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    )
}