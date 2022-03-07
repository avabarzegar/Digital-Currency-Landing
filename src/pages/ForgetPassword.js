import React from 'react';
import { Formik, useField } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';
import forgetLamp from '../pictures/forgetlamp.svg';


const ForgetPassword = () => {

  const validationSchema = yup.object({
    email: yup.string('Enter your email')
      .email('Enter a valid email')
      .required('Please enter a valid email'),
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
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}}>
          <Typography sx={{mb:'2rem',fontSize:'1.2rem',mx:'auto'}}>Reset password</Typography>
          <Box sx={{width:'90%',m:' 16px auto 40px',p: '8px 18px',color:'#dca90a',bgcolor:'rgba(240,185,11,.18824)',borderRadius:'4px',display:'flex',flexDirection:'row',alignItems:'start'}}>
            <img src={forgetLamp} width={22} height={27} alt='lamp'></img>
            <Typography sx={{fontSize:14,ml:1}}>After you reset your password, the withdrawal function may be suspended for 24 hours by the risk system. For your security, please do not share your password with anyone.</Typography>
          </Box>
        </Box>
      <Box className='form-container'>
        
        <Formik
        initialValues={{
          email: '',
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
      <FormControl fullWidth sx={{ my: '3rem'}} variant="standard">
        <MyTextInput
          fullWidth
          type="email"   
          name="email"
          label="Email"
        />
        </FormControl>
        
        <Button className='sign-btn' variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
      </Formik>
      </Box>
      </Box>
     
    </Box>
  );
};

export default ForgetPassword;
