import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';


const Register = () => {
  
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
        <label htmlFor={props.id || props.name}>{label}</label>
        <Field className="text-input" {...field} {...props} />
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
        {({ errors, touched }) => (
        <Form>
  
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            
          />
          {errors.email && touched.email ? (
 -            <div>{errors.email}</div>
 -          ) : null}
 +         <ErrorMessage name="email" />
          
            
          
          <MyTextInput
            type='tel'
            name='number'
            label='phone number'
          />
          {errors.number && touched.number ? (
 -            <div>{errors.number}</div>
 -          ) : null}
 +         <ErrorMessage name="number" />

         
          <MyTextInput
            label="password"
            name="password"
            type={values.showPassword ? 'text' : 'password'}
            
          />
          {errors.password && touched.password ? (
 -            <div>{errors.password}</div>
 -          ) : null}
 +         <ErrorMessage name="password" />


          <MyTextInput
            label="confirm password"
            name="confirm"
            type={values.showPassword ? 'text' : 'password'}
            
          />
          {errors.confirm && touched.confirm ? (
 -            <div>{errors.confirm}</div>
 -          ) : null}
 +         <ErrorMessage name="confirm" />
          <button type="submit">Submit</button>
        </Form>
        )}
      </Formik>
    </>
  );
  
};

export default Register;