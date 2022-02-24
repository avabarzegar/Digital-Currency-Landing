import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';


const StyledLink = styled(Link)({
    textDecoration: 'none',

    // &:focus, &:hover, &:visited, &:link, &:active {
    //     text-decoration: none;
    // }
});

export default StyledLink;