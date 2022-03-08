import React from 'react';
import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/VisibilityOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined';
import InputLabel from '@mui/material/InputLabel';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import turkFlag from '../pictures/turkflag.png';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import DateSelect from '../components/DateSelect';
import Select from 'react-select';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';




const selectCustomStyles = {

  option: (styles, { isFocused, isSelected }) => {
    return {
        ...styles,
        backgroundColor: isFocused || isSelected ? "#f5f5f5" : null,
        color: isFocused || isSelected ? "#F1B80A" : "#333333",
        textAlign:'start'
      };
 },

  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: '1px dotted pink',
    color: state.selectProps.menuColor,
    paddingTop:'0px',
    transition:'height .2s',
    marginTop: 0
  }),
  
  menuList: (base) => ({
    ...base,

    overflowY:'scroll',
    height:'156px',

    "::-webkit-scrollbar": {
      width: "8px",
      height: "0px",
      display: "none",
      transition:'.1s'
    },
    '&:hover':{
        '&::-webkit-scrollbar': {
          display:'block',
          transition:'.1s'
        },
     },
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1"
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: '10px',
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555"
    }
  }),

  control: (_, { selectProps: { width }}) => ({
    width: {width},
    display:'flex',
    flexDirection:'row',
    backgroundColor:'#f5f5f5',
    alignItems:'center',
    padding:'2px 0px'
    
  }),
  indicatorsContainer:(_, { selectProps: { width }}) => ({
      width:'15px',
      padding:'0px',
      borderLeft:'none',
  }),
  indicatorSeparator:(_, { selectProps: { width }}) => ({
      width:'100%',
      backgroundColor:'transparent',
      color:'rgba(0,0,0,.5)'
  }),
  menu: base => ({
    ...base,
    "&:hover": {
      borderColor: "red"
    }
  }),
  
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const textAlign='start';

    return { ...provided, opacity, transition,textAlign };
  }
}
  // selector 

const Citizenoptions = [
  { value: 'Foreigner', label: 'Foreigner' },
  { value: 'Turkish', label: 'Turkish Citizen' },
];


const Nationalityoptions = [
  { value: 'Afghanistan', label: 'Afghanistan(افغانستان)' },
  { value: 'َAmerican', label: 'َAmerican Samoa' },
  { value: 'Andorran', label: 'Andorran' },
  { value: 'Angula', label: 'Angula' },
  { value: 'Brazil', label: 'Brazil' },
  { value: 'Canada', label: 'Canada' },
  { value: 'China', label: 'China' },
  { value: 'Iranian', label: 'Iranian' },
  { value: 'Nigeria', label: 'Nigeria' },
  { value: 'Spain', label: 'Spain' },
];
  // /selector 


const Register = () => {
  // checkbox 
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  // /checkbox 
  
  // selector 
  const [CitizenselectedOption, CitizensetSelectedOption] = React.useState(null);
  const [NationalityselectedOption, NationalitysetSelectedOption] = React.useState(null);
  // /selector 
  
  // password 
  const [values, setValues] = React.useState({
    password: '',
    conform: '',
    showPassword: false,
  });


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

  // /password 
  // validation 
const RegisterSchema=Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address.')
    .required('Please enter a valid email.'),
  password: Yup.string()
    .min(8, 'Must be 8 characters at least.')
    .max(16, 'Must be 16 characters or less.')
    .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$')
    .required('Must be at least 8 characters and contain at least one uppercase, one lowercase letter and one number.'),
  confirm:Yup.string()
  .when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      'The two passwords are different.'
    )
    })
    .required('Must be at least 8 characters and contain at least one uppercase, one lowercase letter and one number.'),
  number: Yup.string()
    .required('Please enter a valid number.')
    .matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    'Please enter a valid number'
  ),
  referral:Yup.string()
    .min(8, 'Please enter correct refferal ID.'),
  firstName:Yup.string()
    .required('Please enter your firstr name.'),
  lastName:Yup.string()
    .required('Please enter your last name.'),
  turkish:Yup.string()
    .min(8, 'Please enter a valid National ID Number.')
    .required('Please enter National ID Number.'),

})

  // /validation 
  
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
 
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:'none',
  }));

 
  return (
    
    <Box sx={{bgcolor:'#fafafa'}}>
      <Box className='register-container'>
        <Typography sx={{fontSize:'1.5rem',fontWeight:600,mb:{xs:'.3rem',sm:'24px'}}}>Create a free account</Typography>
        <Box sx={{display:{xs:'block',sm:'none',marginBottom:'2rem'}}}>
            <Typography sx={{fontSize:'.85rem',fontWeight:600}}>
              Already registered?
              <Link to='/SignIn' className='alreadyLink'> Sign In.</Link>
            </Typography>
        </Box>
        
        <Formik
        initialValues={{
          email: '',
          password: '',
          number:'',
         
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
          <Item><Typography sx={{fontSize:'.85rem',color:'#707a8a',borderBottom: '1px solid #eaecef',pb: '5px',px:1,textAlign:{xs:'left',sm:'center'}}}>Account Information</Typography></Item>
          <Grid container sx={{justifyContent:'space-between',mb:'24px'}}>
            <Grid sm={6} xs={12} item sx={{mb:'40px'}}>
              <Item>
              <InputLabel sx={{lineHeight: '30px'}} htmlFor='email'>Email</InputLabel>
              <MyTextInput
               type='email'
               name='email'
               label='Email'
               id='email'
              />
              </Item>
            </Grid>
            <Grid sm={6} xs={12} item  sx={{mb:'40px',display:'flex', flexDirection:'column'}}>
            <Item>
              <InputLabel sx={{lineHeight: '30px'}} htmlFor='number'>phone number</InputLabel>
              <Grid container sx={{mb:'2rem',display:'flex', flexDirection:'row',alignItems:'start',justifyContent:'space-between'}}>
                <Grid sm={3} xs={2} sx={{display:'flex',flexDirection:'row',alignItems:'start',mt:'.3rem'}}>
                  <img src={turkFlag} style={{width: '24px',height:'24px',marginRight: '5px'}} alt='turk-flag'></img>
                  <Typography sx={{marginRight: '5px',color:'black'}}>+90 </Typography>
                </Grid>
                <Grid sm={9} xs={10}>
                  <MyTextInput
                   type='tel'
                   name='number'
                   label='phone number'
                  id='number'
                  />
                </Grid>
               </Grid>
              </Item>
            </Grid>
            <Grid sm={6} xs={12} item sx={{mb:'40px'}}>
              <Item>
              <InputLabel sx={{lineHeight: '30px'}} htmlFor='password'>password</InputLabel>    
              <MyTextInput 
               label="password"
               name="password"
               id='password'
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
              </Item>
            </Grid>
            <Grid sm={6} xs={12} item sx={{mb:'40px'}}>
              <Item>
              <InputLabel sx={{lineHeight: '30px'}} htmlFor='confirm'>confirm password</InputLabel>
              <MyTextInput 
               name="confirm"
               id='confirm'
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
              </Item>
            </Grid>
            <Grid sm={6} xs={12} item sx={{mb:'40px'}}>
              <Item>
              <InputLabel sx={{lineHeight: '30px'}} htmlFor='referral'>Referral ID (Optional)</InputLabel>
              <MyTextInput
               type='text'
               name='referral'
               id='referral'
              />
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={12}>
              <Item>
              <Typography sx={{color:'#707a8a',fontSize:'.85rem',borderBottom:'1px solid #eaecef',textAlign:{xs:'left',sm:'center'}}}>Personal Information</Typography>
              </Item>
            </Grid>
            <Grid container>
              <Grid sm={4} xs={12} sx={{mb:'40px'}}>
                <Item>
                <InputLabel sx={{textAlign:{xs:'start',sm:'center'},lineHeight: '30px'}} htmlFor='firstName'>Name</InputLabel>
                  <MyTextInput
                   type='text'
                   name='firstName'
                   id='firstName'
                  />
                </Item>
              </Grid>
              <Grid sm={4} xs={12} sx={{mb:'40px'}}>
                <Item>
                <InputLabel sx={{textAlign:{xs:'start',sm:'center'},lineHeight: '30px'}} htmlFor='lastName'>Surname</InputLabel>
                  <MyTextInput
                   type='text'
                   name='lastName'
                   id='lastName'
                  />
                </Item>
              </Grid>
              <Grid sm={4} xs={12} sx={{mb:'40px'}}>
                <Item>
                  <InputLabel sx={{textAlign:{xs:'start',sm:'center'},lineHeight: '30px'}} >Date of Birth</InputLabel>
                </Item>
                <Item sx={{display:'flex',flexDirection:'row',py:0,position:'relative'}}>
                  <DateSelect />
                </Item>
              </Grid>
              <Grid sm={4} xs={12} sx={{mb:'40px'}}>
                <Item>
                <InputLabel sx={{textAlign:{xs:'start',sm:'center'},lineHeight: '30px'}} >Citizenship</InputLabel>
                  <Select
                   defaultValue={CitizenselectedOption}
                   onChange={CitizensetSelectedOption}
                   options={Citizenoptions}
                   placeholder='Select'
                   styles={selectCustomStyles}
                  />
                </Item>
              </Grid>
              <Grid sm={4} xs={12} sx={{mb:'40px'}}>
                <Item>
                <InputLabel sx={{textAlign:{xs:'start',sm:'center'},lineHeight: '30px'}} >Nationality</InputLabel>
                  <Select
                   defaultValue={NationalityselectedOption}
                   onChange={NationalitysetSelectedOption}
                   options={Nationalityoptions}
                   placeholder='Select'
                   styles={selectCustomStyles}
                  />
                </Item>
              </Grid>
              <Grid sm={4} xs={12} sx={{mb:'40px'}}>
                <Item>
                <InputLabel sx={{lineHeight: '30px'}} htmlFor='turkish'>Turkish ID Number</InputLabel>
                <MyTextInput
                 type='text'
                 name='turkish'
                 label='turkish'
                 id='turkish'
                />
                </Item>
              </Grid>
            </Grid>

          </Grid>
          <Box sx={{display:'flex',flexDirection:'column',px:2}}>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'start',textAlign:'start'}}>
              <Checkbox size='small' {...label} 
              sx={{
                '&.Mui-checked': {
                  color: '#F1B80A',
                },
                padding:'0 .5rem 0 0',
              }}
               />
              <Typography sx={{fontSize:'.85rem'}}>I consent to receive commercial messages and the processing of my personal data within the scope of
               <a style={{fontWeight:'500',color:'#F1B80A',fontSize:'.85rem'}}> Explicit Consent Statement</a>
              </Typography>
            </Box>
            <Typography sx={{fontSize:'.85rem',mt:'1rem',textAlign:'start',pl:'1.55rem'}}>By clicking the [Register] button, You agree the Binance TR
               <a style={{fontWeight:'500',color:'#F1B80A',fontSize:'.85rem'}}> User Agreement</a>,
               <a style={{fontWeight:'500',color:'#F1B80A',fontSize:'.85rem'}}> Risk Disclaimer</a>,
               <a style={{fontWeight:'500',color:'#F1B80A',fontSize:'.85rem'}}> Confidentiality</a> and
               <a style={{fontWeight:'500',color:'#F1B80A',fontSize:'.85rem'}}> KVKK</a> policies. 
            </Typography>
          </Box>
          <Button component={Link} to='/Home' type="submit" className='registerSubmit registerLinkSubmit'>Register</Button>
          <Box sx={{display:{xs:'none',sm:'block'}}}>
            <Typography sx={{fontSize:'.85rem'}}>
              Already registered?
              <Link to='/SignIn' className='alreadyLink'> Sign In.</Link>
            </Typography>
          </Box>
        </Form>
     
        </Formik>
      </Box>
    </Box>
  );
  
};

export default Register;