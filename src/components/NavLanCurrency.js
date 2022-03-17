import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/system';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from '@mui/material/Tabs';
import { ThemeContext } from '../context/Theme';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Cookies from 'js-cookie';



const BootstrapButton = styled(Button)({
    color:'white',
    textTransform:'unset',
    padding:'6px 0',
    '&:hover': {
        color:'#f0b90b',
    }
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0,pb:0,color:'#1e2026'}} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {

  const Languages =[
    {
      code:'en',
      name:'English',
      countryCode:'gb',
      dir:'ltr'
    },
    {
      code:'tr',
      name:'Türkçe',
      countryCode:'tr',
      dir:'ltr'
    },
    {
      code:'fa',
      name:'فارسی',
      countryCode:'ir',
      dir:'rtl'
    }
  ]
  const {t}=useTranslation();
  
  const CurrentLanguageCode=Cookies.get('i18next') || 'en';
  const CurrentLanguage=Languages.find( l => l.code === CurrentLanguageCode)
 
  

  React.useEffect(()=>{
    document.body.dir=CurrentLanguage.dir || 'ltr'
  },[CurrentLanguage])

  // tabsLan 
  const [valueLan, setValueLan] = React.useState('1');

  const handleChangeLan = (event, newValue) => {
    setValueLan(newValue);
  };
  // /tabsLan 

  // tabsCur 
  const [valueCur, setValueCur] = React.useState('2');

  const handleChangeCur = (event, newValue) => {
    setValueCur(newValue);
  };
  // /tabsCur 

  // language 
  const [openLan, setOpenLan] = React.useState(false);

  const handleClickOpenLan = () => {
    setOpenLan(true);
  };
  const handleCloseLan = () => {
    setOpenLan(false);
  };
  // /language 
  // currency 
  const [openCur, setOpenCur] = React.useState(false);

  const handleClickOpenCur = () => {
    setOpenCur(true);
  };
  const handleCloseCur = () => {
    setOpenCur(false);
  };
  // /currency 

  return (
    <div>
        <Box 
        sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            
            borderColor:'white',
            borderRadius: 1,
            bgcolor: 'transparent',
            color: 'text.secondary',
            '& svg': {
              m: 1.5,
            },
            '& hr': {
              mx: 0.2,
            },
          }}
        >
      <BootstrapButton variant="text"  onClick={handleClickOpenLan}>
        {CurrentLanguage.name}
      </BootstrapButton>
      <Divider className='ln-currency-divider' orientation="vertical" variant="middle" flexItem />
      <BootstrapButton variant="text"  onClick={handleClickOpenCur}>
        USD
      </BootstrapButton>
      </Box>
      {/* language  */}
      <BootstrapDialog
        onClose={handleCloseLan}
        aria-labelledby="customized-dialog-title"
        open={openLan}
        sx={{width:'100%'}}
      >
        <TabContext value={valueLan}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseLan}>
         
          <Tabs
           value={valueLan}
           onChange={handleChangeLan}
           TabIndicatorProps={{
            style: {
              backgroundColor: "#F1B80A"
            }
           }}
          textColor='inherit'
          aria-label="tabs example"
          sx={{borderBottom:'1px solid #eaecef'}}
          >
            <Tab sx={{pl:0}} label="Language" value="1" />
            <Tab label="Currency" value="2" />
          </Tabs>
        </BootstrapDialogTitle>
        <DialogContent>
  
        <TabPanel sx={{pl:'7px'}} value="1">
          <Box sx={{display:'flex',flexDirection:'row'}}>
            {Languages.map(({code,name,countryCode})=>(
              <Button onClick={()=> i18next.changeLanguage(code)} sx={{color:'#1e2026',mr:2,py:'.3rem',pl:'.5rem',pr:'4rem',borderRadius: '4px'}}>
                {name}
              </Button>
            ))}

          </Box>
        </TabPanel>
        <TabPanel value="2" sx={{pl:'7px'}}>
          <Box sx={{display:'flex',flexDirection:'row'}}>
            <a href=''>
              <Button sx={{color:'#1e2026',mr:2,py:'.3rem',pl:'.5rem',pr:'4rem',borderRadius: '4px',border:'1px solid #f0b90b'}}>
              EUR-€
              </Button>
            </a>
            <a href=''>
              <Button sx={{color:'#1e2026',mr:2,py:'.3rem',pl:'.5rem',pr:'4rem',borderRadius: '4px'}}>
                USD-$
              </Button>
            </a>
            <a href=''>
              <Button sx={{color:'#1e2026',mr:2,py:'.3rem',pl:'.5rem',pr:'4rem',borderRadius: '4px'}}>
                TRY-₺
              </Button>
            </a>
          </Box>
        </TabPanel>
    
        </DialogContent>
        </TabContext>
      </BootstrapDialog>
      {/* /language  */}
      {/* currency */}
     
      <BootstrapDialog
        onClose={handleCloseCur}
        aria-labelledby="customized-dialog-title"
        open={openCur}
        sx={{width:'100%'}}
      >
        <TabContext value={valueCur}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseCur}>
         
          <Tabs
           value={valueCur}
           onChange={handleChangeCur}
           TabIndicatorProps={{
            style: {
              backgroundColor: "#F1B80A"
            }
           }}
          textColor='inherit'
          aria-label="tabs example"
          sx={{borderBottom:'1px solid #eaecef'}}
          >
            <Tab sx={{pl:0}} label="Language" value="1" />
            <Tab label="Currency" value="2" />
          </Tabs>
        </BootstrapDialogTitle>
        <DialogContent>
  
        <TabPanel sx={{pl:'7px'}} value="1">
          <Box sx={{display:'flex',flexDirection:'row'}}>
          {Languages.map(({code,name,countryCode})=>(
              <Button onClick={()=> i18next.changeLanguage(code)} sx={{color:'#1e2026',mr:2,py:'.3rem',pl:'.5rem',pr:'4rem',borderRadius: '4px'}}>
                {name}
              </Button>
            ))}
          </Box>
        </TabPanel>
        <TabPanel value="2" sx={{pl:'7px'}}>
          <Box sx={{display:'flex',flexDirection:'row'}}>
            <a href=''>
              <Button sx={{color:'#1e2026',mr:2,py:'.3rem',pl:'.5rem',pr:'4rem',borderRadius: '4px',border:'1px solid #f0b90b'}}>
              EUR-€
              </Button>
            </a>
            <a href=''>
              <Button sx={{color:'#1e2026',mr:2,py:'.3rem',pl:'.5rem',pr:'4rem',borderRadius: '4px'}}>
                USD-$
              </Button>
            </a>
            <a href=''>
              <Button sx={{color:'#1e2026',mr:2,py:'.3rem',pl:'.5rem',pr:'4rem',borderRadius: '4px'}}>
                TRY-₺
              </Button>
            </a>
          </Box>
        </TabPanel>
    
        </DialogContent>
        </TabContext>
      </BootstrapDialog>

      {/* /currency */}
    </div>
    
  );
}