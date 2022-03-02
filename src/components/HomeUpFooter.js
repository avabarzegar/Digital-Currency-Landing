import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';




export default function HomeUpFooter(){
    return(
      <Box className='home-up-footer'>
        <Container>
          <Box sx={{display:'flex', flexDirection:'column',textAlign:'center'}}>
            <Typography sx={{color:'white',fontSize:'2rem',fontWeight:'300'}}>Start trading now</Typography>
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',mt:3}}>
              <Link className='home-footer-btn' button to='Register'>        
                Registation    
              </Link>
              <Link className='home-footer-btn' button to='SignIn'>
                Log-in
              </Link>
            </Box>
          </Box>
        </Container>  
      </Box>    

    )
}