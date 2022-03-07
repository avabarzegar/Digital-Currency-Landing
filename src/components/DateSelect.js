import React from 'react';
import Select from 'react-select';
import { Grid } from '@mui/material';


const customStyles = {
 option: (styles, { isFocused, isSelected }) => {
    return {
        ...styles,
        backgroundColor: isFocused || isSelected ? "#f5f5f5" : null,
        color:  isSelected ? "#F1B80A" : "#333333",
      };
 },
    menu: (provided, state) => ({
      ...provided,
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
  
    control: (_, { selectProps: { width }},base) => ({
      ...base,
      width: {width},
      display:'flex',
      flexDirection:'row',
      backgroundColor:'#f5f5f5',
      alignItems:'center',
      padding:'2px 0px',
      
    }),
    
    indicatorsContainer:(_, { selectProps: { width }}) => ({
        width:'15px',
        padding:'0px',
        borderLeft:'none',
    }),
    indicatorSeparator:(_, { selectProps: { width }}) => ({
        width:'100%',
        backgroundColor:'transparent'
    }),
    
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      const textAlign='start';
  
      return { ...provided, opacity, transition,textAlign };
    }
}

const Dayoptions = [
    { value: '01', label: '01' },
    { value: '02', label: '02' },
    { value: '03', label: '04' },
    { value: '04', label: '04' },
    { value: '05', label: '05' },
    { value: '06', label: '06' },
    { value: '07', label: '07' },
    { value: '08', label: '08' },
    { value: '09', label: '09' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' },
    { value: '14', label: '14' },
    { value: '15', label: '15' },
    { value: '16', label: '16' },
    { value: '17', label: '17' },
    { value: '18', label: '18' },
    { value: '19', label: '19' },
    { value: '20', label: '20' },
    { value: '21', label: '21' },
    { value: '22', label: '22' },
    { value: '23', label: '23' },
    { value: '24', label: '24' },
    { value: '25', label: '25' },
    { value: '26', label: '26' },
    { value: '27', label: '27' },
    { value: '28', label: '28' },
    { value: '29', label: '29' },
    { value: '30', label: '30' },
    { value: '31', label: '31' },
  ];

const Monthoptions = [
    { value: '01', label: '01' },
    { value: '02', label: '02' },
    { value: '03', label: '04' },
    { value: '04', label: '04' },
    { value: '05', label: '05' },
    { value: '06', label: '06' },
    { value: '07', label: '07' },
    { value: '08', label: '08' },
    { value: '09', label: '09' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' }
]

const Yearoptions = [
    { value: '01', label: '01' },
    { value: '02', label: '02' },
    { value: '03', label: '04' },
    { value: '04', label: '04' },
    { value: '05', label: '05' },
    { value: '06', label: '06' },
    { value: '07', label: '07' },
    { value: '08', label: '08' },
    { value: '09', label: '09' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' }
]
export default function DateSelect() {
    const [DayselectedOption, DaysetSelectedOption] = React.useState(null);

    const [MonthselectedOption, MonthsetSelectedOption] = React.useState(null);

    const [YearselectedOption, YearsetSelectedOption] = React.useState(null);
  
    return (
        <Grid container className="App">
          <Grid xs={4} item sx={{px:'1px'}}>
            <Select
             defaultValue={DayselectedOption}
             onChange={DaysetSelectedOption}
             options={Dayoptions}
             styles={customStyles}
             placeholder='Day'
            />
                    
          </Grid>
          <Grid xs={4} item sx={{px:'1px'}}>
            <Select
             defaultValue={MonthselectedOption}
             onChange={MonthsetSelectedOption}
             options={Monthoptions}
             styles={customStyles}
             placeholder='Month'
            />
          </Grid>
          <Grid xs={4} item sx={{px:'1px'}}>
          <Select
             defaultValue={YearselectedOption}
             onChange={YearsetSelectedOption}
             options={Yearoptions}
             styles={customStyles}
             placeholder='Year'
            />
          </Grid>
        </Grid>
     
    );
  }