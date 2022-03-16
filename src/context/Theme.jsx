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
            setMode
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default Theme;