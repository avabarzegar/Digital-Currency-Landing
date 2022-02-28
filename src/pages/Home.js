import '../index.css'
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
import PriceTable from '../components/homeTable';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import account from '../pictures/account.png';
import coin from '../pictures/coin.png';
import global from '../pictures/global.png';
import wallet from '../pictures/wallet.png';



class Example extends React.Component {
  
  render() {
    const params = {
      container: ".container",
      slidesPerView: 1,
      centeredSlides:true,
      paginationClickable: true,
      direction: "vertical",
      autoplay:true,
      autoplay:2000,  
      loop: true
    };
    
    return (
      <Swiper {...params}
      modules={[Autoplay, Pagination, Scrollbar, A11y]}
      autoplay={{ delay: 1000 }}
      
     
      
     
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    );
  }
}

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
      <Box sx={{bgcolor:'#fafafa',pb:'3rem'}}>
        <Container>
        <Grid container sx={{py:3 ,px:1}}>
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
        <Example />
        {/* <Box>
        <Swiper
          modules={[Autoplay, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          autoplay={true}
         
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        </Box> */}
        {/* <Box className='swiper'>
          <Box class="swiper-wrapper">
            <Box class="swiper-slide">0 Fee Turkish Lira Withdrawal Campaign Extended Again!<Typography>17/01</Typography></Box>
            <Box class="swiper-slide">Trade with Binance, Don't Pay Transfer Fees<Typography>15/03</Typography></Box>
            <Box class="swiper-slide">Now you can connect to the crypto world with a sin...<Typography>16/07</Typography></Box>
         </Box>
        </Box> */}
        <Box sx={{px:1}}>
          <PriceTable />
        </Box>
        </Container>
      </Box>
      <Box sx={{bgcolor:'white'}}>
      <container sx={{px:1}}>
        <Typography sx={{textAlign:'center',fontSize:'2.2rem',fontWeight:'500',py:5}}>
        You Can Start Buying Crypto Easily in 4 Steps
        </Typography>
        <Grid container sx={{mt:5}}>
          <Grid item md={3} sm={6} xs={12} className='crypto-grid-container'>
            <Box className='crypto-img-container'>
              <img src={global} alt='cryptoPic' width='100%'></img>
            </Box>
            <Typography sx={{fontSize:'1.1rem',mb:2}}>Step 1</Typography>
            <Typography sx={{fontSize:'1rem',mb:7}}>Sign up for binance</Typography>
          </Grid>
          <Grid item md={3} sm={6} xs={12} className='crypto-grid-container'>
            <Box className='crypto-img-container'>
              <img src={account} alt='cryptoPic' width='100%'></img>
            </Box>
            <Typography sx={{fontSize:'1.1rem',mb:2}}>Step 2</Typography>
            <Typography sx={{fontSize:'1rem',mb:7}}>Verify Your account</Typography>
          </Grid>
          <Grid item md={3} sm={6} xs={12} className='crypto-grid-container'>
            <Box className='crypto-img-container'>
              <img src={wallet} alt='cryptoPic' width='100%'></img>
            </Box>
            <Typography sx={{fontSize:'1.1rem',mb:2}}>Step 3</Typography>
            <Typography sx={{fontSize:'1rem',mb:7}}>Fund your account</Typography>
          </Grid>
          <Grid item md={3} sm={6} xs={12} className='crypto-grid-container'>
            <Box className='crypto-img-container'>
              <img src={coin} alt='cryptoPic' width='100%'></img>
            </Box>
            <Typography sx={{fontSize:'1.1rem',mb:2}}>Step 4</Typography>
            <Typography sx={{fontSize:'1rem',mb:7}}>Select coin</Typography>
          </Grid>
        </Grid>
      </container>
      </Box>
     
      </>
    )
  };
  
  export default Home;