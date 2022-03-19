import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import Collapse from '../pictures/collapse.png';
import Expand from '../pictures/expand.png';
import { Box } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: 'none',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  backgroundColor:'#fafafa'
}));

const CustomExpandIcon = () => {
    return (
      <Box
      sx={{
        '.Mui-expanded & > .collapsIconWrapper': {
          display: 'none',
        },
        '.expandIconWrapper': {
          display: 'none',
        },
        '.Mui-expanded & > .expandIconWrapper': {
          display: 'block',
        },
      }}
      >
        <div className="expandIconWrapper">
          <img src={Expand} alt='expand' width='100%'></img>
        </div>
        <div className="collapsIconWrapper">
        <img src={Collapse} alt='Collapse' width='100%'></img>
        </div>
      </Box>
    )
  }

const AccordionSummary = styled((props) => (

  <MuiAccordionSummary
  expandIcon={<CustomExpandIcon/>}
    {...props}
  />
))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === 'dark'
//       ? 'rgba(255, 255, 255, .05)'
//       : 'rgba(0, 0, 0, .03)',
backgroundColor:'#fafafa',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function FAQAccordions() {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
      <Grid container>
          <Grid item xs={12} md={6}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>How can I deposit TRY?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Go to the Wallet Deposit Turkish Lira (TRY) page after you login to your Pouyam account via website or mobile app and then pick the bank you wish to use. You can deposit TRY using the bank account details shown on the page using a bank account that is owned by you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>My TRY deposit transaction did not succeed, what can I do?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Please note that while wire and FAST transfers may be completed 24/7, EFT (Electronic Fund Transfer) transfers may only be completed during banking hours (09.00 - 16.45 TSİ). Also note that only the transfers made via bank accounts that you own will succeed. Deposits via ATM and credit cards are not supported.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>I deposited TRY for the first time and cannot transfer crypto.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          For security purposes, you will be subjected to a cryptocurrency transfer limitation for the next 48 hours following your first Turkish Lira deposit. Cryptocurrency transfers and pouyam Transfer method are limited by this measure and it cannot be lifted due to security reasons.
          Turkish Lira withdrawals are not affected by this limitation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>I encounter an error that says “You cannot proceed with the registration process with the information provided”</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Please note that, in accordance with the security prerequisites imposed by legal regulations, a user may only have one account that is verified with their KYC information. Similarly, KYC information may not be removed from one account or transferred to the other. In this case, we advise using our platform by logging in with the email address with which you completed the Identity Verification. You can find out which email address you completed the Identity Verification first by using the search functionality of your currently used email account and searching for Pouyam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>My TRY withdrawal did not succeed, what can I do about it?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          EFT transfers that you make between 09.00 - 16.45 (TSİ) using any bank account other than Ziraat Bankası and Vakıfbank will go through on the same day, otherwise, transfers made after the specified time window or on weekends and national holidays will go through the following business day.
          If you made your Turkish Lira withdrawal request during the timeframe and days mentioned above using a personal transactional account, the transaction will be completed within 2 hours.
          The withdrawal requests shown as “Completed” by the system are sent out by Pouyam.
          If your funds have not been delivered to you yet due to the delays on the banking system, please wait for the transaction to be completed. The bank will go through with the transaction within banking hours.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>My Buy/Sell order did not succeed</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Please check whether you made a limit order or market order first.
          When you make a limit order, the trade is executed only when the market meets your price limit (or above).
          For example; if you make a buy order at 10,450 TRY for a certain coin that is trading at 10.500 TRY, your order will be executed once the coin drops to 10,449 TRY.
          If you wish your trading orders immediately, you can cancel your open orders and put in a market order in that case.
          You can see your orders in the open orders page.
          </Typography>
        </AccordionDetails>
      </Accordion>
          </Grid>
          <Grid item xs={12} md={6}>
          <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>What is Pouyam Transfer and how to use it?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          By using the Pouyam Transfer functionality, you can quickly transfer crypto between Pouyam and Pouyam Global platforms. You can monitor your transfers from the “Transaction History” section of your account later.
You can connect your Pouyam Global account from the “Pouyam Transfer” section of your Pouyam profile and then use this function. (Please make sure you connect the correct account that you wish to transfer with)
Pouyam Transfer page: https://www.pouyam.com/en/usercenter/wallet/pouyam-transfer

          </Typography>
        </AccordionDetails>
      </Accordion>
          <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>What is Identity Verification and why is it required?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Identity Verification, also known as KYC (Know Your Customer), is one of the common security standards of the cryptocurrency industry. The reason for KYC obligation is to prevent suspicious transactions from happening. This system closely resembles the anti-money laundering (AML) procedures used by banks. You may think of KYC procedure as a trust building practice between Pouyam and the user.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography>How to complete Identity Verification?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          List of valid identification documents;
Old Identification Certificate,
New Identification Card,
New Driver’s License. 
You cannot complete the identity verification with the Old Driver’s License and Blue Card.
You can use the following link and follow the steps therein to complete identity verification.
How to Complete the Identity Verification?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
          <Typography>Fees</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A 0.1% fee is charged in trading transactions. The 18% VAT is included in this fee and no other additional fees are charged.
A 3 TRY fee is deducted from Turkish Lira withdrawals via EFT and Wire Transfer (free of charge until the end of 2021) and Turkish Lira deposits are free of charge.
Cryptocurrency deposit and withdrawal fees depend on the current state of the network and are subject to change.
You can find the current information here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
          <Typography>Limits</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          For verified accounts, the limits for TRY and Cryptocurrency deposit/withdrawals are as follows: 
Daily TRY Deposit: 1,000,000 TRY
Monthly TRY Deposit: 5,000,000 TRY
Daily TRY Withdrawal: 1,000,000 TRY
Monthly TRY Withdrawal: 5,000,000 TRY
Daily Cryptocurrency Deposit: No Limit
Monthly Cryptocurrency Deposit: No Limit
Daily Cryptocurrency Withdrawal: 50 BTC
          </Typography>
        </AccordionDetails>
      </Accordion>
          </Grid>
      </Grid>
   
      
    
  );
}
