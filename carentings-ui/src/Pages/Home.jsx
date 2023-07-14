import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box, Grid, Typography } from '@mui/material';
import Getty from "../Assets/Images/Getty.jpg";
import img from "../Assets/Images/bgImg.jpeg";
import InputForm from '../Components/InputForm';
import AppBar from '../Components/AppBar'
/* const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height:800,
})); */


const Container = styled('div')({
  background: `url(${Getty})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh', // Set the height to cover the entire screen
});



export default function ColumnsGrid() {

  return (
    <div>
 <AppBar/>
    <Container>
    {/* Content of your component */}
    <Typography component="div" variant="h4" style={{ paddingTop: '15%',textAlign: 'left'}}>
             Explore, Rent, Enjoy, Repeat
            </Typography>
            <Typography variant="h5" color="text.secondary" component="div" style={{ paddingBottom: '3%', textAlign: 'left',color:"white" }}>
                Play On...
            </Typography>
            <div style={{ textAlign:"left"}}>
            <InputForm/>
           </div>
  </Container>
  </div>
  );
}