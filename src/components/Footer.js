import React from 'react';
import { Box, Typography } from '@mui/material';
import logoo from '../assets/images/pngtree-3d-body-builder-gym-logo-image-png-image_11437963.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4" px="20px" py="40px" textAlign="center">
    <img src={logoo} alt="logo" style={{ width: '100px', height: '100px', marginBottom: '20px' }} />
    <Typography variant="body1" color="textSecondary" mb={2}>
      © {new Date().getFullYear()} Gym Name. All rights reserved.
    </Typography>
    <Typography variant="body2" color="textSecondary">
      Developed by Adel Mohamed
    </Typography>
  </Box>
);

export default Footer;
