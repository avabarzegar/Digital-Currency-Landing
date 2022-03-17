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
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import currencyChart from '../pictures/BTCTRY.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function createData(name, lastPrice, changes, markets) {
  return { name, lastPrice, changes, markets };
}
function BTCLogo(){
    return(
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Box sx={{width:'15%',mr:2}}>
               <img src={BTC} alt='BTC' width='100%'></img>
            </Box>
            <Typography style={{marginRight:10}}>BTC</Typography>
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
            <Typography style={{marginRight:10}}>ETH</Typography>
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
            <Typography style={{marginRight:10}}>BNB</Typography>
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
            <Typography style={{marginRight:10}}>USDT</Typography>
            <Typography style={{color:'#848e9c'}}>ThetherUS</Typography>
        </Box>
    )
}


const rows = [
  createData(<BTCLogo />,
  <Typography className='last-price' >€ 552,117</Typography>, 
  <Typography className='fall-loss'>1.29%</Typography>,
  <div sx={{width:'100px',display:{xs:'none',sm:'flex'}}}>
  <img src={currencyChart} alt='chart1'></img>
  </div> ),
  createData(<ETHLogo />,
  <Typography className='last-price' >€ 39,084</Typography>, 
  <Typography className='rise-gain'>1.09%</Typography>,
  <div sx={{width:'100px',display:{xs:'none',sm:'flex'}}}>
  <img src={currencyChart} alt='chart2'></img>
  </div> ),
  createData(<BNBLogo />,
  <Typography className='last-price' >€ 5,269</Typography>,
   <Typography className='rise-gain'>0.80%</Typography>,
   <div sx={{width:'100px',display:{xs:'none',sm:'flex'}}}>
   <img src={currencyChart} alt='chart3'></img>
   </div> ),
  createData(<USDTLogo />,
  <Typography className='last-price' >€ 13.92</Typography>,
   <Typography className='fall-loss'>1.13%</Typography>,
   <div sx={{width:'100px',display:{xs:'none',sm:'flex'}}}>
   <img src={currencyChart} alt='chart4'></img>
   </div> ),
];

export default function PriceTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >Last Price</TableCell>
            <TableCell>24h Change</TableCell>
            <TableCell sx={{display:{xs:'none',sm:'flex'}}}>Markets</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              component={Link} to='signIn'
            >
              <TableCell scope="row" sx={{width:{xs:'30%',sm:'25%'}}}>
                {row.name}
              </TableCell>
              <TableCell sx={{width:{xs:'30%',sm:'25%'}}}>{row.lastPrice}</TableCell>
              <TableCell sx={{width:{xs:'30%',sm:'25%'}}}>{row.changes}</TableCell>
              <TableCell sx={{display:{xs:'none',sm:'flex'}}}>{row.markets}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box className='view-link-container'>
        <Link to='#' className='view-link'>
          <Typography>view more</Typography>
          <ArrowForwardIosIcon sx={{p:1}} fontSize='small'/>
        </Link>
      </Box>
    </TableContainer>
  );
}
