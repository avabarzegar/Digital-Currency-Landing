import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import footerApple from '../pictures/footer-apple.png';
import footerGooglePlay from '../pictures/footer-google-play.png'



export default function Footer(){
    return(
        <Box sx={{bgcolor:'#0b0e11'}}>
            <Container>
                <Grid container>
                    <Grid xs={5} md={12}>
                        <Grid container>
                          <Grid sx={12}></Grid>
                          <Grid sx={12}></Grid>
                          <Grid sx={12} sx={{flexDirection:'row'}}>
                              <Link>
                              <img src={footerApple} alt='app store'></img>
                              </Link>
                              <Link>
                              <img src={footerGooglePlay} alt='google play'></img>
                              </Link>
                          </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={7} md={12}></Grid>
                </Grid>
            </Container>
        </Box>
    )
}