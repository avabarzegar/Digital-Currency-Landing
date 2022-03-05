import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import { Box, Typography } from '@mui/material';
import lock from '../pictures/lock.svg';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MiniLogo from '../pictures/minilogo.svg';

const validationSchema = yup.object({
  email: yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Please enter a valid email'),
  password: yup.string('Enter your password')
    .min(8, 'Must be 8 characters at least')
    .max(16, 'Must be 16 characters or less')
    .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$')
    .required('Must be at least 8 characters and contain at least one uppercase, one lowercase letter and one number.')
  
});

const SignIn = () => {

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: {validationSchema},
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{bgcolor:'#fafafa'}}>
      <Box sx={{pt:5,mx:'auto',width: '384px',display:'flex',alignItems:'center',flexDirection:'column'}}>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <Typography sx={{mb:'3rem',fontSize:'1.5rem'}}>Sign in</Typography>
          <Typography sx={{color:'#848e9c',fontSize:'.85rem'}}>
            Please check that you are visiting the correct URL:
          </Typography>
          <Box sx={{width:'60%',m:' 16px auto 40px',p: '8px 25px 8px 10px',border:'1px solid #f5f5f5',borderRadius: '23px',display:'flex',flexDirection:'row',alignItems:'center'}}>
            <img src={lock} width={10} height={16} alt='lock'></img>
            <Typography sx={{fontSize:14,ml:1}}>https://www.trbinance.com</Typography>
          </Box>
        </Box>
      <Box className='form-container'>
        <Typography sx={{color:'#848e9c',fontSize:'.85rem',mb:'1rem'}}>Log in with Binance.com account:</Typography>
        <a style={{textAlign:'center',width:'80%',margin:'8px auto 30px',padding: '10px 14px',border:'1.5px solid #f0b90b',borderRadius: '4px',display:'flex',flexDirection:'row',justifyContent:'center'}}>
            <img src={MiniLogo} style={{marginRight:'5px'}}  alt='MiniLogo'></img>
            <Typography>Log in with Binance.com</Typography>
        </a>
        <Typography sx={{color:'#848e9c',fontSize:'.85rem',mb:'3rem'}}>Log in with Binance TR account:</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
        style={{marginBottom:'3rem'}}
          fullWidth
          type="email"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <FormControl fullWidth style={{ marginBottom: '3rem'}} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
         
          id="standard-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        </FormControl>
        <Button className='sign-btn' variant="contained" fullWidth type="submit">
          Sign in
        </Button>
      </form>
      </Box>
      </Box>
     
    </Box>
  );
};

export default SignIn;
