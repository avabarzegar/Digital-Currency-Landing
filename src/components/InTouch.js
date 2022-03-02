import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import support from '../pictures/support.svg';
import FAQ from '../pictures/FAQ.svg';



export default function InTouch(){
    return(
      <Box>
        <Container sx={{px:1}}>
        <Typography sx={{textAlign:'center',fontSize:'2.2rem',fontWeight:'500',pt:'5rem'}}>
        Get in touch. Stay in touch.
        </Typography>
        <Grid container sx={{padding:{sm:'0 104px'}}} spacing={0}>
          <Grid component={Link} to='Register' item sm={6} xs={12} className='inTouch-grid-container'>
            <Box className='crypto-img-container'>
              <img src={support} alt='cryptoPic' width='100%'></img>
            </Box>
            <Typography sx={{color:'#212833' ,fontSize:'1.5rem',mb:2,fontWeight:'500'}}>24/7 Support</Typography>
            <Typography sx={{color:'#48515d' ,fontSize:'.9rem',mb:7}}>Got a problem? Just get in touch. Our support team is available 24/7.</Typography>
          </Grid>
          <Grid component={Link} to='Register' item sm={6} xs={12} className='inTouch-grid-container'>
            <Box className='crypto-img-container'>
              <img src={FAQ} alt='cryptoPic' width='100%'></img>
            </Box>
            <Typography sx={{color:'#212833' ,fontSize:'1.5rem',mb:2,fontWeight:'500'}}>FAQ</Typography>
            <Typography sx={{color:'#48515d' ,fontSize:'.9rem',mb:7}}>Got a question? We've probably got the answer for you here.</Typography>
          </Grid>
        </Grid>
        </Container>
      </Box>
      )
    }