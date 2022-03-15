import '../index.css'
import React, { useContext } from 'react';
import HomeBg from '../pictures/home-bg.png';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import BootstrapButton from '../components/signup';
import { Button, Link, useMediaQuery, useTheme } from '@mui/material';
import theme from '../context/Theme';
import homeImgOne from '../pictures/homeImgOne.png';
import homeImgTwo from '../pictures/homeImgTwo.png';
import homeImgThree from '../pictures/homeImgThree.png';
import homeImgFour from '../pictures/homeImgFour.jpg';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import PriceTable from '../components/HomeTable';
import SwiperCore,{Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import FAQAccordions from '../components/FAQHome';
import InTouch from '../components/InTouch';
import BuyCrypto from '../components/BuyCrypto';
import HomeUpFooter from '../components/HomeUpFooter';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Horn from '../pictures/horn.png';
import '../context/i18n';
import { useTranslation } from "react-i18next";
// import { ThemeContext } from '../context/Theme';
// import { makeStyles } from '@material-ui/styles';


// const useStyle = makeStyles(theme=>({
//   root:{
//     color: 'red',
//     "&:hover": {
//       color: 'yellow'
//     }
//   }
// }))


class Slider extends React.Component {

  
  render() { 
    SwiperCore.use([Autoplay])
    const params = {
      container: ".container",
      slidesPerView: 1,
      centeredSlides:true, 
      loop: true,
      direction:'vertical',
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    };
   
    return (
      <Swiper {...params}
      modules={[Autoplay, Pagination]}
      pagination={{clickable: true}}
      autoplay={{delay: 2000}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      sx={{textAign:'center'}}
      >
        <SwiperSlide>
          <a href='#'>
            <Typography className='slider-title'>Trade with Binance, Don't Pay Transfer Fees</Typography>
            <Typography className='time'>16/07</Typography>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#'>
            <Typography className='slider-title'>0 Fee Turkish Lira Withdrawal Campaign Extended Again!</Typography>
            <Typography className='time'>17/01</Typography>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#'>
            <Typography className='slider-title'>O Maker Fees for BUSD Trading Pairs Extended!</Typography>
            <Typography className='time'>17/01</Typography>
          </a>
        </SwiperSlide>
        
      </Swiper>
    );
  }
}

const Home = () => {

  // const {
  //   Direction,
  //   setDirection,
  //   Mode,
  //   setMode
  // } = useContext(ThemeContext);

  // const theme = useTheme();
  // const isMd = useMediaQuery(theme.breakpoints.down('md'));

//  const cls = useStyle();

const { t } = useTranslation();

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
      
      <Box sx={{bgcolor:'#0e0c16'}}>
        <Grid container sx={{display:'flex',justifyContent:'right'}}>
          <Grid xs={12} md={6}>
            <img src={HomeBg} alt='homeBg' width='100%' height={360}></img>
          </Grid>
          <Grid xs={12} md={6} sx={{display:'flex',direction:'rtl',justifyContent:'right',flexDirection:'column'}}>
            <Typography sx={{fontSize:'2rem',color:'white'}}>{t('Header-Topic')}</Typography>
            <Typography sx={{fontSize:'1.2rem',}}>{t('Header-Sub-Topic')}</Typography>
            <Link to='SignIn' sx={{display:'inline-block',p:'5px 1rem', bgcolor:'#c2a356'}} >{t('Header-Button')}</Link>
          </Grid>

       </Grid>
      </Box>
      {/* <Button onClick={()=>setDirection(prev => prev ==  'ltr' ? 'rtl' : 'ltr')}>
        Change Direction {Direction}
      </Button>
      <Button classes={{
        root: cls.root,
      
      }} onClick={()=>setMode(prev => prev == 'dark' ? 'light': 'dark')}>
        Change Mode
      </Button> */}
      <Box sx={{bgcolor:'#fafafa',pb:'3rem'}}>
        <Container>
        <Grid container sx={{py:3,alignItems:'start' ,px:1}}>
          <Grid item xs={8}>
            <Typography sx={{color:'black',fontSize:'.9rem'}}>
            Banka transferi ile Türk Lirası yatır. Bitcoin, Ethereum, Ripple ve diğer kriptoparaları kolayca satın al.
            </Typography> 
          </Grid>
          <Grid item xs={4} sx={{textAlign:'end'}}>
            <Link>
            <BootstrapButton sx={{padding:'.6rem 1rem'}}>
              Trade now
            </BootstrapButton>
            </Link>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={3} sm={6} xs={12}>
            <Item>
            <img src={homeImgOne} width='100%' style={{borderRadius:'4px'}} alt='homeimg1'></img>
            </Item>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
          <Item>
           <img src={homeImgTwo} width='100%' style={{borderRadius:'4px'}} alt='homeimg1'></img>
           </Item>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
          <Item>
           <img src={homeImgThree} width='100%' style={{borderRadius:'4px'}} alt='homeimg1'></img>
           </Item>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
          <Item>
           <img src={homeImgFour} width='100%' style={{borderRadius:'4px'}} alt='homeimg1'></img>
           </Item>
          </Grid>
        </Grid>
        {/* slider  */}
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',my:4,px:1}}>
          <Box width='30px' height='30px'>
            <img src={Horn} width={20} height={20} alt='horn'></img>  
          </Box>
          <Slider />
          <Box>
            <a href='#' className='slider-more'>
              <Typography>More</Typography>
              <ArrowForwardIosIcon sx={{p:1,fontSize:'.9rem'}} />
            </a>
          </Box>
        </Box>
        {/* /slider  */}
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
