import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import logoo from '../assets/images/pngtree-3d-body-builder-gym-logo-image-png-image_11437963.png';

const Navbar = () => {
  return (
    <Stack 
      direction="row" 
      justifyContent="space-around" 
      sx={{
        gap: { sm: '122px', xs: '40px' }, 
        mt: "0", 
        justifyContent: 'none'
      }} 
      px="20px"
    >
      <Link to="/">
        <img 
          src={logoo} 
          alt="logo" 
          style={{
            width: '48px', 
            height: '48px', 
            margin: '0 20px', 
            backgroundColor: 'transparent'
          }} 
        />
      </Link> 
      <Stack 
        direction="row" 
        gap="40px" 
        fontSize="24px" 
        alignItems="flex-end"
      >
        <Link 
          to="/" 
          style={{
            textDecoration: 'none', 
            color: '#FFBF00', 
            borderBottom: '3px solid #FFBF00'
          }}
        >
          Home
        </Link>
        <a 
          href="#exercises" 
          style={{
            textDecoration: 'none', 
            color: '#FFBF00'
          }}
        >
          Exercises
        </a>
      </Stack>  
    </Stack>
  );
};

export default Navbar;
