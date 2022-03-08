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
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



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
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
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
  // tabs 
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // /tabs 
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
            width: 'fit-content',
            border: (theme) => `2px solid ${theme.palette.divider}`,
            borderColor:'white',
            borderRadius: 1,
            bgcolor: 'background.paper',
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
        English
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
      ><TabContext value={value}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseLan}>
         
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </BootstrapDialogTitle>
        <DialogContent dividers>
        
      
        
        
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      
    
        </DialogContent>
        </TabContext>
      </BootstrapDialog>
      {/* /language  */}
      {/* currency */}
      <BootstrapDialog
        onClose={handleCloseCur}
        aria-labelledby="customized-dialog-title"
        open={openCur}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseCur}>
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
        </DialogContent>
      </BootstrapDialog>
      {/* /currency */}
    </div>
    
  );
}