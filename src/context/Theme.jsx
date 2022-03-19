import { createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import React, { createContext } from "react";

export const ThemeContext = createContext({});

function Theme(props) {
    
    const [Direction, setDirection] = useState('ltr');
    const [Mode,setMode] = useState('light');

    const newTheme = createTheme({
        direction: Direction,
        palette:{
            mode:Mode
        },
        breakpoints: {
            values: {
              xs: 0,
              xsm:400,
              sm: 600,
              md: 900,
              xmd:1000,
              lg: 1200,
              xl: 1536,
            },
        },
        tabs: {
            
            "& .Mui-selected": {
              backgroundColor: "#f5f5f5"
            }
          }
    })

    useEffect(()=>{
        localStorage.setItem('dir', Direction);
    },[Direction])


    return (
        <ThemeContext.Provider value={{
            newTheme,
            Direction,
            setDirection,
            Mode,
            setMode,
           
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default Theme;