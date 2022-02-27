import React from 'react';
import HomeBg from '../pictures/home-bg.png';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import BootstrapButton from '../components/signup';
import { Link } from '@mui/material';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../components/responsiveTheme';
import homeImgOne from '../pictures/homeImgOne.png';
import homeImgTwo from '../pictures/homeImgTwo.png';
import homeImgThree from '../pictures/homeImgThree.png';
import homeImgFour from '../pictures/homeImgFour.jpg';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';




const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:'none',
  }));
    return(
      <>
      
      <Box sx={{bgcolor:'#0b0e11'}} >
        <Container>
          <img src={HomeBg} alt='homeBg' width='100%'></img>
       </Container>
      </Box>
      <Box>
        <Container>
        <Grid container sx={{my:3 ,p:1}}>
          <Grid item xs={8}>
            <ThemeProvider theme={theme}>
            <Typography sx={{color:'black'}}>
            Banka transferi ile Türk Lirası yatır. Bitcoin, Ethereum, Ripple ve diğer kriptoparaları kolayca satın al.
            </Typography> 
            </ThemeProvider>
          </Grid>
          <Grid item xs={4} sx={{textAlign:'end'}}>
            <Link>
            <BootstrapButton>
              Trade now
            </BootstrapButton>
            </Link>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={3} xs={12}>
            <Item>
            <img src={homeImgOne} width='100%' alt='homeimg1'></img>
            </Item>
          </Grid>
          <Grid item md={3} xs={12}>
          <Item>
           <img src={homeImgTwo} width='100%' alt='homeimg1'></img>
           </Item>
          </Grid>
          <Grid item md={3} xs={12}>
          <Item>
           <img src={homeImgThree} width='100%' alt='homeimg1'></img>
           </Item>
          </Grid>
          <Grid item md={3} xs={12}>
          <Item>
           <img src={homeImgFour} width='100%' alt='homeimg1'></img>
           </Item>
          </Grid>
        </Grid>
        </Container>
      </Box>
     
      </>
    )
  };
  
  export default Home;