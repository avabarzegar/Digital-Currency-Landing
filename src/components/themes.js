import * as React from 'react';
import {
    createTheme
} from '@mui/system';

const drawerTheme = createTheme({
    palette: {
        background: {
            paper: '#fff',
        },
        text: {
            light: '#fff',
            dark: '#0000',
            gray: '#848e9c'
        },
        action: {
            active: '#001E3C',
        },
        success: {
            dark: '#009688',
        },
    },
});

export default drawerTheme;