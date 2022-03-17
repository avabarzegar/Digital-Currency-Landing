import * as React from 'react';
import '../context/i18n';
import { useTranslation } from "react-i18next";
import { Formik, useField } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/VisibilityOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';



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



export default function LabTabs() {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
      
    
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
          .required('Must be at least 8 characters and contain at least one uppercase, one lowercase letter and one number.'),
        number: yup.string()
          .required('Please enter a valid number.')
          .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          'Please enter a valid number'
        )
        
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
     

  const {t}=useTranslation();


  return (
    <Box sx={{bgcolor:'#fafafa', width: '100%', typography: 'body1', paddingBottom: '7rem',paddingTop: '4rem' }}>
      <Box className='register-first-container' sx={{pt:5,mx:'auto',width: '400px',display:'flex',alignItems:'start',flexDirection:'column'}}>
          <Typography sx={{mb:'.5rem',fontSize:'1.5rem',fontWeight:'600'}}>{t('register-create-account')}</Typography>
          <Typography sx={{mb:'3rem',color:'#848e9c',fontSize:'.88rem'}}>{t('register-create-account-txt')}</Typography>
        
      
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
        <Button component={Link} to='/RegisterSecond' className='sign-btn' variant="contained" fullWidth type="submit">
         {t('register-create-account')}
        </Button>
        
      </form>
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

      <form>
        <FormControl fullWidth variant="standard">
        <MyTextInput
          type='tel'                    
          name='number'
          label='phone number'
          id='number'
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
        <Button component={Link} to='/RegisterSecond' className='sign-btn' variant="contained" fullWidth type="submit">
         {t('register-create-account')}
        </Button>
        
      </form>
        </Formik>
        </TabPanel>
        
        </TabsUnstyled>
      
      </Box>
    </Box>
  );
}

