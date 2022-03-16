import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@mui/lab/TabPanel';
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



export default function LabTabs() {
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
     

  const {t}=useTranslation();

  const [value, setValue] = React.useState('1');

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{bgcolor:'#fafafa', width: '100%', typography: 'body1' }}>
      <Box className='register-first-container' sx={{pt:5,mx:'auto',width: '400px',display:'flex',alignItems:'start',flexDirection:'column'}}>
          <Typography sx={{mb:'3rem',fontSize:'1.5rem'}}>{t('register-create-account')}</Typography>
          <Typography sx={{color:'#848e9c',fontSize:'.88rem'}}>{t('register-create-account-txt')}</Typography>
        <TabContext value={value}>
        <Box>
          <Tabs
          TabIndicatorProps={{
            style: {
              backgroundColor: "#f5f5f5"
            }
           }}
          textColor='inherit'
          inkBarStyle={{background: 'blue'}}
          aria-label="tabs example"
          onChange={handleChangeTabs}
          >
            <Tab sx={{pl:0}} label={t('phone-name')} value="1" />
            <Tab sx={{pl:0}} label={t('email-name')} value="2" />
          </Tabs>
        </Box>
        <TabPanel sx={{pl:0}} value="1">
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
         {t('register-create-account')}
        </Button>
        
      </form>
      </Formik>
        </TabPanel>
        <TabPanel sx={{pl:0}} value="2">Item Two</TabPanel>
        
      </TabContext>
      </Box>
    </Box>
  );
}
