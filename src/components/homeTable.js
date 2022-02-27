import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BTC from '../pictures/BTC.png';
import ETH from '../pictures/ETH.png';
import BNB from '../pictures/BNB.png';
import USDT from '../pictures/USDT.png';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import currencyChart from '../pictures/BTCTRY.svg';




function createData(name, lastPrice, changes, markets, buy) {
  return { name, lastPrice, changes, markets, buy };
}
function BTCLogo(){
    return(
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Box sx={{width:'15%',mr:2}}>
               <img src={BTC} alt='BTC' width='100%'></img>
            </Box>
            <Typography style={{marginRight:5}}>BTC</Typography>
            <Typography style={{color:'#848e9c'}}>Bitcoin</Typography>
        </Box>
        
    )
}
function ETHLogo(){
    return(
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Box sx={{width:'15%',mr:2}}>
               <img src={ETH} alt='ETH' width='100%'></img>
            </Box>
            <Typography style={{marginRight:5}}>ETH</Typography>
            <Typography style={{color:'#848e9c'}}>Ethereum</Typography>
        </Box>
        
    )
}
function BNBLogo(){
    return(
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Box sx={{width:'15%',mr:2}}>
               <img src={BNB} alt='BNB' width='100%'></img>
            </Box>
            <Typography style={{marginRight:5}}>BNB</Typography>
            <Typography style={{color:'#848e9c'}}>BNB</Typography>
        </Box>
        
    )
}
function USDTLogo(){
    return(
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Box sx={{width:'15%',mr:2}}>
               <img src={USDT} alt='USDT' width='100%'></img>
            </Box>
            <Typography style={{marginRight:5}}>USDT</Typography>
            <Typography style={{color:'#848e9c'}}>ThetherUS</Typography>
        </Box>
    )
}


const rows = [
  createData(<BTCLogo />, '₺ 552,117', 
  <Typography className='fall-loss'>1.29%</Typography>,
  <Box >
  <img src={currencyChart} alt='chart' height={50}></img>
  </Box>,
  <Link className='buy-button' to='signIn'>
    buy
  </Link>, ),
  createData(<ETHLogo />, '₺ 39,084', 
  <Typography className='rise-gain'>1.09%</Typography>,
  <Box >
  <img src={currencyChart} alt='chart' height={50}></img>
  </Box>,
  <Link className='buy-button' to='signIn'>
    buy
  </Link> ),
  createData(<BNBLogo />, '₺ 5,269',
   <Typography className='rise-gain'>0.80%</Typography>,
   <Box >
   <img src={currencyChart} alt='chart' height={50}></img>
   </Box>,
   <Link className='buy-button' to='signIn'>
     buy
   </Link> ),
  createData(<USDTLogo />, '₺ 13.92',
   <Typography className='fall-loss'>1.13%</Typography>,
   <Box>
   <img src={currencyChart} alt='chart' height={50}></img>
   </Box>,
   <Link className='buy-button' to='signIn'>
     buy
   </Link> ),
];

export default function PriceTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Last Price</TableCell>
            <TableCell>24h Change</TableCell>
            <TableCell>Markets</TableCell>
            <TableCell>buy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              component={Link} to='signIn'
            >
              <TableCell scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.lastPrice}</TableCell>
              <TableCell>{row.changes}</TableCell>
              <TableCell>{row.markets}</TableCell>
              <TableCell>{row.buy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
