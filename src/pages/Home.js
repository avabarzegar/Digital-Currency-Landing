import '../index.css'
import React, { useContext } from 'react';
import HomeBg from '../pictures/home-bg.png';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import BootstrapButton from '../components/signup';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import LinkMui from '@mui/material/Link';
import { Link } from 'react-router-dom';
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
import { t } from 'i18next';
import appwallet from '../pictures/appwallet.png';
import phone from '../pictures/phone.png';
import googleplay from '../pictures/googleplay.png';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

import { ThemeContext } from '../context/Theme';
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
            <Typography className='slider-title'>{t('slide-one')}</Typography>
            <Typography className='time'>{t('time-slide-one')}</Typography>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#'>
            <Typography className='slider-title'>{t('slide-two')}</Typography>
            <Typography className='time'>{t('time-slide-two')}</Typography>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#'>
            <Typography className='slider-title'>{t('slide-three')}</Typography>
            <Typography className='time'>{t('time-slide-three')}</Typography>
          </a>
        </SwiperSlide>
      </Swiper>
    );
  }
}

const Home = () => {


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
        <Container>
        <Grid container sx={{display:'flex',justifyContent:'start',alignItems:'center'}}>
          
          <Grid xs={12} md={6} sx={{display:'flex',justifyContent:'start',
             flexDirection:'column',alignItems:{xs:'center',md:'start'}}}>
            <Typography sx={{fontSize:{xs:'2rem',md:'2.5rem'},fontWeight:'700',color:'white',mb:'2rem',
             mt:{xs:'2rem',md:'0'},textAlign:{xs:'center',md:'start'}}}>{t('home-header-topic')}</Typography>
            <Typography sx={{fontSize:'1.2rem',color:'white',
             textAlign:{xs:'center',md:'start'},mb:'2rem'}}>{t('home-header-sub-topic')}</Typography>
            <Link to='SignIn'className='filled-btn'>{t('home-header-button')}</Link>
          </Grid>
          <Grid xs={12} md={6} sx={{display:'flex',justifyContent:'center'}}>
            <img src={HomeBg} alt='homeBg' width='100%' height='auto' style={{maxWidth:'500px',maxHeight:'530px'}}></img>
          </Grid>

       </Grid>
       </Container>
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
        <Grid container sx={{py:3,alignItems:'start' ,px:1,justifyContent:'space-between'}}>
          <Grid item xs={7}>
            <Typography sx={{color:'black',fontSize:'.9rem',}}>
              {t('trade-now-txt')}
            </Typography> 
          </Grid>
          <Grid item xs={4} sx={{textAlign:'end'}}>
            <LinkMui>
            <BootstrapButton sx={{padding:'.6rem 1rem'}}>
              Trade now
            </BootstrapButton>
            </LinkMui>
          </Grid>
        </Grid>
        <Box className='news-box-parent'>
        <Box className='news-box-container'>
          <Box>
            <Item>
            <img src={homeImgOne} width='282px' height='133px' style={{borderRadius:'4px'}} alt='homeimg1'></img>
            </Item>
          </Box>
          <Box>
          <Item>
           <img src={homeImgTwo} width='282px' height='133px' style={{borderRadius:'4px'}} alt='homeimg1'></img>
           </Item>
          </Box>
          <Box>
          <Item>
           <img src={homeImgThree} width='282px' height='133px' style={{borderRadius:'4px'}} alt='homeimg1'></img>
           </Item>
          </Box>
          <Box>
          <Item>
           <img src={homeImgFour} width='282px' height='133px' style={{borderRadius:'4px'}} alt='homeimg1'></img>
           </Item>
          </Box>
        
        
          <Box>
            <Item>
            <img src={homeImgOne} width='282px' height='133px' style={{borderRadius:'4px'}} alt='homeimg1'></img>
            </Item>
          </Box>
          <Box>
          <Item>
           <img src={homeImgTwo} width='282px' height='133px' style={{borderRadius:'4px'}} alt='homeimg1'></img>
           </Item>
          </Box>
          <Box>
          <Item>
           <img src={homeImgThree} width='282px' height='133px' style={{borderRadius:'4px'}} alt='homeimg1'></img>
           </Item>
          </Box>
          <Box>
          <Item>
           <img src={homeImgFour} width='282px' height='133px' style={{borderRadius:'4px'}} alt='homeimg1'></img>
           </Item>
          </Box>
        
        
          <Box>
            <Item>
            <img src={homeImgOne} width='282px' height='133px' style={{borderRadius:'4px'}} alt='homeimg1'></img>
            </Item>
          </Box>
          <Box>
          <Item>
           <img src={homeImgTwo} width='282px' height='133px' style={{borderRadius:'4px'}} alt='homeimg1'></img>
           </Item>
          </Box>
          <Box>
          <Item>
           <img src={homeImgThree} width='282px' height='133px' style={{borderRadius:'4px'}} alt='homeimg1'></img>
           </Item>
          </Box>
          <Box>
          <Item>
           <img src={homeImgFour} width='282px' height='133px' style={{borderRadius:'4px'}} alt='homeimg1'></img>
           </Item>
          </Box>
        </Box>
        </Box>
        {/* slider  */}
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',my:4,px:1}}>
          <Box width='30px' height='30px'>
            <img src={Horn} width={20} height={20} alt='horn'></img>  
          </Box>
          <Slider />
          <Box>
            <a href='#' className='slider-more'>
              <Typography>{t('home-more')}</Typography>
              <ArrowForwardIosIcon sx={{p:1,fontSize:'.9rem'}} />
            </a>
          </Box>
        </Box>
        {/* /slider  */}
        {/* price-table */}
        <Box sx={{px:1}}>
          <Typography sx={{textAlign:'start',fontSize:'2.2rem',fontWeight:'600',my:'2.5rem'}}>Market trend</Typography>
          <PriceTable />
        </Box>
        </Container>
      </Box>
      {/* /price-table */}
      {/* application */}
      <Box sx={{bgcolor:'white',py:'5rem'}}>
        <Container>
            <Grid container> 
            <Grid xs={12} md={5} sx={{display:'flex',justifyContent:'center',flexDirection:'column',mb:'4rem',textAlign:{xs:'center',md:'start'}}}>
              <Typography sx={{fontSize:'2.2rem',fontWeight:'600',lineHeight:'48px'}}>
                {t('pouyam-application')}
              </Typography>
              <Typography sx={{color:'#474D57',fontSize:{xs:'1rem',sm:'20px'},lineHeight:'30px',mt:'10px',mb:'3.5rem',textAlign:{xs:'center',md:'start'}}}>{t('pouyam-application-txt')}</Typography>
              <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',textAlign:'center'}}>
              <a href='' className='application-btn'>
                <span> 
                  <img src={googleplay} style={{px:'5px'}} alt='googleplay' width={23} height={23}></img>
                </span>
                <Typography sx={{fontSize:'.8rem',fontWeight:'500',px:'5px'}}>{t('application-google-play')}</Typography>
              </a>
              <a href='' className='application-btn'>
                <span> 
                  <AndroidIcon style={{px:'5px'}} width={23} height={23} />
                </span>
                <Typography sx={{fontSize:'.8rem',fontWeight:'500',px:'5px'}}>{t('application-app-store')}</Typography>
              </a>
              <a href='' className='application-btn'>
                <span> 
                  <AppleIcon style={{px:'5px'}} width={23} height={23} />
                </span>
                <Typography sx={{fontSize:'.8rem',fontWeight:'500',px:'5px'}}>{t('application-android')}</Typography>
              </a>
              </Box>
            </Grid>
              <Grid container xs={12} md={7} sx={{display:'flex',flexDirection:'row',justifyContent:{sm:'end',xs:'start'}}}>
                <Grid xs={12} sm={6} sx={{textAlign:'center',mb:'2rem'}}>
                  <img src={phone} alt='app-phone'></img>
                </Grid>
                <Grid xs={12} sm={6} sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                  <Box sx={{display:'flex',flexDirection:'row',mb:'2rem'}}>
                  <Typography sx={{bgcolor:'#ddbb6630',mr:'1rem',width:'48px',height:'48px',justifyContent:'center',alignItems:'center',borderRadius:'50%'}}>
                    <img src={appwallet} alt='wallet' width={28} height={28} className='app-wallet-img'></img>
                  </Typography>
                  <Typography sx={{display:'flex',flexDirection:'column'}}>
                    <Typography sx={{fontWeight:'500',fontSize:'20px'}}>
                     {t('application-benefit-title-one')} 
                    </Typography>
                    <Typography sx={{color:'#707A8A'}}>{t('application-benefit-one')}</Typography>
                  </Typography>
                  </Box>
                  <Box sx={{display:'flex',flexDirection:'row',mb:'2rem'}}>
                  <Typography sx={{bgcolor:'#ddbb6630',mr:'1rem',width:'48px',height:'48px',justifyContent:'center',alignItems:'center',borderRadius:'50%'}}>
                     <img src={appwallet} alt='wallet' width={28} height={28} className='app-wallet-img'></img>
                  </Typography>
                  <Typography sx={{display:'flex',flexDirection:'column'}}>
                    <Typography sx={{fontWeight:'500',fontSize:'20px'}}>
                     {t('application-benefit-title-two')} 
                    </Typography>
                    <Typography sx={{color:'#707A8A'}}>{t('application-benefit-two')}</Typography>
                  </Typography>
                  </Box>
                  <Box sx={{display:'flex',flexDirection:'row',mb:'2rem'}}>
                  <Typography sx={{bgcolor:'#ddbb6630',mr:'1rem',width:'48px',height:'48px',justifyContent:'center',alignItems:'center',borderRadius:'50%'}}>
                     <img src={appwallet} alt='wallet' width={28} height={28} className='app-wallet-img'></img>
                  </Typography>
                  <Typography sx={{display:'flex',flexDirection:'column'}}>
                    <Typography sx={{fontWeight:'500',fontSize:'20px'}}>
                     {t('application-benefit-title-three')} 
                    </Typography>
                    <Typography sx={{color:'#707A8A'}}>{t('application-benefit-three')}</Typography>
                  </Typography>
                  </Box>
                </Grid>
              </Grid>
          </Grid>
        </Container>
      </Box>
      {/* application */}

      {/* Buy-crypto */}
      <BuyCrypto />
      {/* /Buy-crypto */}
      {/* FAQ */}
      <Box sx={{bgcolor:'white'}}>
        <Container sx={{px:1,pb:'5rem'}}>
          <Box sx={{pb:5,pt:'5rem'}}>
            <Typography sx={{fontSize:'2.2rem',mb:2,fontWeight:'500'}}>
              {t('faq')}
            </Typography>
            <Typography sx={{fontSize:'.9rem'}}>
              {t('home-faq-txt')}
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
