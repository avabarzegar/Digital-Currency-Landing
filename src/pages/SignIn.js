import React from 'react';
import { Formik, useField } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import lock from '../pictures/lock.svg';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/VisibilityOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MiniLogo from '../pictures/minilogo.svg';
import { Link } from 'react-router-dom';


const SignIn = () => {

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
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

  
  const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <InputLabel htmlFor={props.id || props.name}>{label}</InputLabel>
        <Input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };
 

  return (
    <Box sx={{bgcolor:'#fafafa'}}>
      <Box sx={{pt:5,mx:'auto',width: '384px',display:'flex',alignItems:'center',flexDirection:'column'}}>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <Typography sx={{mb:'3rem',fontSize:'1.5rem'}}>Sign in</Typography>
          <Typography sx={{color:'#848e9c',fontSize:'.88rem'}}>
            Please check that you are visiting the correct URL:
          </Typography>
          <Box sx={{width:'60%',m:' 16px auto 40px',p: '8px 25px 8px 10px',border:'1px solid #f5f5f5',borderRadius: '23px',display:'flex',flexDirection:'row',alignItems:'center'}}>
            <img src={lock} width={10} height={16} alt='lock'></img>
            <Typography sx={{fontSize:14,ml:1}}>https://www.trbinance.com</Typography>
          </Box>
        </Box>
      <Box className='form-container'>
        <Typography sx={{color:'#848e9c',fontSize:'.88rem',mb:'1rem'}}>Log in with Binance.com account:</Typography>
        <a style={{textAlign:'center',width:'90%',margin:'8px auto 30px',padding: '10px 14px',border:'1.5px solid #f0b90b',borderRadius: '4px',display:'flex',flexDirection:'row',justifyContent:'center'}}>
            <img src={MiniLogo} style={{marginRight:'5px'}}  alt='MiniLogo'></img>
            <Typography>Log in with Binance.com</Typography>
        </a>
        <Typography sx={{color:'#848e9c',fontSize:'.88rem',mb:'3rem'}}>Log in with Binance TR account:</Typography>
        <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          console.log(values);
        }}
      >

      <form>
      <FormControl fullWidth variant="standard">
        <MyTextInput
          fullWidth
          type="email"   
          name="email"
          label="Email"
        />
        </FormControl>
        <FormControl fullWidth sx={{ my: '3rem'}} variant="standard">
        <MyTextInput 
          label="password"
          name="password"
          type={values.showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility sx={{fontSize:'.95rem',color:'#9c9c9c'}} /> : <VisibilityOff sx={{fontSize:'.95rem',color:'#9c9c9c'}} />}
              </IconButton>
            </InputAdornment>
          }
        />
        </FormControl>
        <Button className='sign-btn' variant="contained" fullWidth type="submit">
          Sign in
        </Button>
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',mt:'2rem'}}>
          <Link to='/ForgetPassword'><Typography sx={{color:'#F1B80A',fontWeight:600,fontSize:'.85rem'}}>Forgot password?</Typography></Link>
          <Link to='/Register'><Typography sx={{color:'#F1B80A',fontWeight:600,fontSize:'.85rem'}}>Register</Typography></Link>
        </Box>
      </form>
      </Formik>
      </Box>
      </Box>
     
    </Box>
  );
};

export default SignIn;
