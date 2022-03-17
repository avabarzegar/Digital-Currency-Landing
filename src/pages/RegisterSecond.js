import * as React from "react";
import ReactInputVerificationCode from "react-input-verification-code";
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import '../context/i18n';
import { useTranslation } from "react-i18next";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from "react-router-dom";




export default function RegisterSecond(){

  const {t}=useTranslation();
  // Timer 
 
  const [counter, setCounter] = React.useState(59);
  React.useEffect(() => {
      const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
  }, [counter]);
  // /Timer 

    return(
        <Box className="registerSecond-parent">
        <Box className="registerSecond-container">
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}}>
            <Typography sx={{mb:'2rem',fontSize:'1.4rem',fontWeight:'600',mx:'auto'}}>{t('register-account-verification')}</Typography>
            <Box sx={{width:'90%',m:' 16px auto 40px',p:'.8rem',color:'#dca90a',bgcolor:'rgba(240,185,11,.18824)',borderRadius:'4px',display:'flex',flexDirection:'row',alignItems:'start'}}>
              <EmailOutlinedIcon />
              <Typography sx={{fontSize:14,ml:2}}>{t('register-verification-txt')}</Typography>
            </Box>
          </Box>
          <div className="custom-styles">
            <ReactInputVerificationCode placeholder="" onChange={console.log} />
          </div>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Box mt={3} >
                <Typography fontSize=".75rem" align="center" color='gray'>
                {t('resend-code-in')}
                 <span style={{color:"#F1B80A",fontWeight:"bold"}}> 00:{counter}</span>
                </Typography>
            </Box>
            <Button component={Link} to='/RegisterThird' disabled={false} sx={{textAlign:'start',color:'#212833',mt:1}}>
            {t('register-resend-code')}
            </Button>
        </Box>
        </Box>  
        </Box>
      
  );

}