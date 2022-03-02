import '../index.css'
import React from 'react';
import HomeBg from '../pictures/home-bg.png';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import BootstrapButton from '../components/SignUp';
import { Link } from '@mui/material';
import theme from '../components/ResponsiveTheme';
import homeImgOne from '../pictures/homeImgOne.png';
import homeImgTwo from '../pictures/homeImgTwo.png';
import homeImgThree from '../pictures/homeImgThree.png';
import homeImgFour from '../pictures/homeImgFour.jpg';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import PriceTable from '../components/HomeTable';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import FAQAccordions from '../components/FAQHome';
import InTouch from '../components/InTouch';
import BuyCrypto from '../components/BuyCrypto';
import HomeUpFooter from '../components/HomeUpFooter';


class Example extends React.Component {
  
  render() {
    const params = {
      container: ".container",
      slidesPerView: 1,
      centeredSlides:true, 
      loop: true,
      direction:'vertical',
      autoplay: {
        delay: 500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    };
    
    return (
      <Swiper {...params}
      modules={[Autoplay, Pagination, A11y]}
      autoplay={{ delay: 500 }}
      pagination={{ clickable: true }}
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
        <Grid container sx={{py:3,alignItems:'center' ,px:1}}>
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
            <img src={homeImgOne} width='100%' style={{borderRadius:'4px'}} alt='homeimg1'></img>
            </Item>
          </Grid>
          <Grid item md={3} xs={12}>
          <Item>
           <img src={homeImgTwo} width='100%' style={{borderRadius:'4px'}} alt='homeimg1'></img>
           </Item>
          </Grid>
          <Grid item md={3} xs={12}>
          <Item>
           <img src={homeImgThree} width='100%' style={{borderRadius:'4px'}} alt='homeimg1'></img>
           </Item>
          </Grid>
          <Grid item md={3} xs={12}>
          <Item>
           <img src={homeImgFour} width='100%' style={{borderRadius:'4px'}} alt='homeimg1'></img>
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
        {/* price-table */}
        <Box sx={{px:1}}>
          <PriceTable />
        </Box>
        </Container>
      </Box>
      {/* /price-table */}
      {/* Buy-crypto */}
      <BuyCrypto />
      {/* /Buy-crypto */}
      {/* FAQ */}
      <Box sx={{bgcolor:'#fafafa'}}>
        <Container sx={{px:1,pb:'5rem'}}>
          <Box sx={{pb:5,pt:'5rem'}}>
            <Typography sx={{fontSize:'2.5rem',mb:2,fontWeight:'500'}}>
              FAQ
            </Typography>
            <Typography sx={{fontSize:'.9rem'}}>
              Learn blockchain and cryptocurrency on your schedule and completely free.
            </Typography>
          </Box>
          <FAQAccordions />
        </Container>
      </Box>
      {/* /FAQ */}

      {/* get-in-touch */}
      <InTouch />
      {/* /get-in-touch */}
      {/* footer */}
      <HomeUpFooter />
  
      {/* footer */}

      </>
    )
  };
  
  export default Home;