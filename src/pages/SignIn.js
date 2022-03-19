
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
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { useTranslation } from 'react-i18next';
import { Form } from 'formik';


const gray = {
  200: '#f5f5f5',
  300:'#707a8a'
 
};

const Tab = styled(TabUnstyled)`
  color: ${gray[300]};
  font-weight: 500;
  font-size: 1rem;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;

  &:hover {
    background-color: ${gray[200]};
  }

  &:focus {
    color: black;
    background-color: ${gray[200]};
    outline-offset: 2px;
    
  }

  &.${tabUnstyledClasses.selected} {
    color: black;
    background-color:${gray[200]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;



const SignIn = () => {

  const {t}=useTranslation();
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
      <Box sx={{display:'flex',flexDirection:'column'}}>
        <Input className={meta.touched && meta.error ? 'RedInput' :'register-input'} {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </Box>
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
            <Typography sx={{fontSize:14,ml:1}}>https://www.pouyam.com</Typography>
          </Box>
        </Box>
      <Box className='form-container'>
        <Typography sx={{color:'#848e9c',fontSize:'.88rem',mb:'3rem'}}>Log in with Pouyam account:</Typography>
        <TabsUnstyled defaultValue={0}>
            <TabsList>
              <Tab sx={{pl:0,m:0}}>{t('email-name')}</Tab>
              <Tab sx={{pl:0,m:0}}>{t('phone-name')}</Tab>
            </TabsList>
        <TabPanel sx={{pl:0}} value={0}>
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

      <Form>
      <InputLabel fullWidth sx={{lineHeight: '30px'}} htmlFor='password'>Email</InputLabel>    
        <MyTextInput
          fullWidth
          type="email"   
          name="email"
          label="Email"
        />
        
        <InputLabel fullWidth sx={{lineHeight: '30px'}} htmlFor='password'>Password</InputLabel>    
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
        
        <Button component={Link} to='/RegisterSecond' sx={{mt:'2rem'}} className='sign-btn' variant="contained" fullWidth type="submit">
         {t('register-create-account')}
        </Button>
        
      </Form>
        </Formik>
        </TabPanel>
        
      
        <TabPanel sx={{pl:0}} value={1}>
        <Formik
        initialValues={{
          phone: '',
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

      <Form>
      <InputLabel fullWidth sx={{lineHeight: '30px'}} htmlFor='confirm'>Phone Number</InputLabel>
        <MyTextInput
          type='tel'                    
          name='number'
          label='phone number'
          id='number'
        />
        
        <InputLabel fullWidth sx={{lineHeight: '30px'}} htmlFor='password'>Password</InputLabel>    
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
        
        <Button component={Link} to='/RegisterSecond' sx={{mt:'2rem'}} className='sign-btn' variant="contained" fullWidth type="submit">
         {t('register-create-account')}
        </Button>
        
      </Form>
        </Formik>
        </TabPanel>
        
        </TabsUnstyled>
      
      </Box>
      </Box>
     
    </Box>
  );
};

export default SignIn;
