import React from 'react';


import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const Footer = () => {

  return (
  <footer>
    <Box 
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 3, sm: 10 }}
      bgcolor='text.secondary'
      color='white'
    >
      <Container maxWidth='lg'  position='relative'>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Box borderBottom={1}>help</Box>
          <Box>
            <Link href='/' color='inherit' >
              Contact
            </Link>
          </Box>
          <Box>
            <Link href='/' color='inherit'>
              Support
            </Link>
          </Box>
          <Box>
            <Link href='/' color='inherit'>
              Privacy Policy
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box borderBottom={1}>Account</Box>
          <Box>
            <Link href='/' color='inherit'>
              Login
            </Link>
          </Box>
          <Box>
            <Link href='/' color='inherit'>
              Register
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box borderBottom={1}>help</Box>
          <Box>
            <Link href='/' color='inherit'>
              Contact
            </Link>
          </Box>
          <Box>
            <Link href='/' color='inherit'>
              Support
            </Link>
          </Box>
          <Box>
            <Link href='/' color='inherit'>
              Privacy Policy
            </Link>
          </Box>
        </Grid>    
      </Grid>
      </Container>
    </Box>
  </footer>
  );  
};

export default Footer;


