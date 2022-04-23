import * as React from 'react';
import "./Card.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ClassNames } from '@emotion/react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>--
        <Grid item xs>
          <Item className='Card1' sx={{ margin: 5}}>
            <h1 style={{fontSize: 40}}>Social Media</h1>
            <h3 style={{fontSize: 20}}>Ullamco laboris nisi ut aliquip ex</h3>
          </Item>
        </Grid>
        <Grid item xs>
          <Item className='Card2' sx={{ margin: 5 }}>
            <h1 style={{fontSize: 40}}>Web Marketing</h1>
            <h3 style={{fontSize: 20}}>Psum officia anim id est laborum</h3>
          </Item>
        </Grid>
        <Grid item xs>
          <Item className='Card3' sx={{ margin: 5}}>
            <h1 style={{fontSize: 40}}>R & D</h1>
            <h3 style={{fontSize: 20}}>Sum dolor sit consencutur</h3>
          </Item>
        </Grid>
      </Grid>
      <Grid container spacing>
        <Grid item xs>
          <Item className='Card4' sx={{ margin: 5 }}>
            <h1 style={{fontSize: 40}}>Public Relation</h1>
            <h3 style={{fontSize: 20}}>Lorem ipsum dolor sit amet</h3>
          </Item>
        </Grid>
        <Grid item xs>
          <Item className='Card5' sx={{ margin: 5 }}>
            <h1 style={{fontSize: 40}}>Branding</h1>
            <h3 style={{fontSize: 20}}>Put enim ad  minim veniam </h3>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className='Card6' sx={{ margin: 5 }}>
            <h1 style={{fontSize: 40}}>Creative Design</h1>
            <h3 style={{fontSize: 20}}>Mollit anim id est laborum</h3>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}