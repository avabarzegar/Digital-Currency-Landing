import React from 'react';
import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/VisibilityOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';

const Register = () => {


const [values, setValues] = React.useState({
    password: '',
    conform: '',
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

  
  const handleClickShowConfirm = () => {
    setValues({
      ...values,
      showConfirm: !values.showConfirm,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  
  const handleMouseDownConfirm = (event) => {
    event.preventDefault();
  };


const RegisterSchema=Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter a valid email'),
  password: Yup.string()
    .min(8, 'Must be 8 characters at least')
    .max(16, 'Must be 16 characters or less')
    .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$')
    .required('Must be at least 8 characters and contain at least one uppercase, one lowercase letter and one number.'),
  number: Yup.string()
    .required('Please enter a valid number')
    .matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    'Please enter a valid number'
  ),
  confirm:Yup.string()
  .when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      'The two passwords are different.'
    )
    })
})


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
    <>
      <h1>Create a free account</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          number:'',
          color: 'red',
          // acceptedTerms: false, 
          // jobType: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          console.log(values);
        }}
      >
     
        <Form>
  
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            
          />
          
          <MyTextInput
            type='tel'
            name='number'
            label='phone number'
          />
         
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
   
          <MyTextInput 
            
            label="confirm password"
            name="confirm"
            type={values.showConfirm ? 'text' : 'password'}
            
           
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirm}
                  onMouseDown={handleMouseDownConfirm}
                >
                  {values.showConfirm ? <Visibility sx={{fontSize:'.95rem',color:'#9c9c9c'}} /> : <VisibilityOff sx={{fontSize:'.95rem',color:'#9c9c9c'}} />}
                </IconButton>
              </InputAdornment>
            }
          />
  
          <button type="submit">Submit</button>
        </Form>
     
      </Formik>
    </>
  );
  
};

export default Register;