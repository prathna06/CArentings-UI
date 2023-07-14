import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import Getty from "../Assets/Images/Getty.jpg";
// import tow from "../Assets/Images/tow.jpg"
import Tugofwar from "../Assets/Images/Tugofwar.jpg"
import lukas from "../Assets/Images/lukas.jpg"
import test from "../Assets/Images/test.png";
// import img from "../Assets/Images/bgImg.jpeg";
import InputForm from '../Components/InputForm';
import { Stack } from '@mui/system';
// import Card from '@mui/material';
// import CardMedia from '@mui/material';
// import { makeStyles } from '@mui/styles';



/* const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height:800,
})); */


const Container = styled('div')({
  //prathna
  // background: `url(${Getty})`,
  // backgroundSize: 'cover',
  // backgroundPosition: 'center',
  // backgroundRepeat: 'no-repeat',
  // height: '100vh', // Set the height to cover the entire screen

  // shruti
  margin: 0,
  padding: 0,
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  // minHeight: '100vh',
  backgroundImage: `url(${test})`,
  backgroundSize: 'cover',

});

const Box = styled('div')({
  position: 'relative',
  backgroundColor: 'rgba(255, 255, 255, 0.0)',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export default function ColumnsGrid() {

  return (
    //-------------------------Shruti-------------------------

  /*   <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={16}>
        <Grid item xs={8} >
          <Item style={{paddingLeft:'70px'}}>
            <Typography component="div" variant="h4" style={{ paddingTop: '25%',textAlign: 'left',color:"black"}}>
             Explore, Rent, Enjoy, Repeat
            </Typography>
            <Typography variant="h5" color="text.secondary" component="div" style={{ paddingBottom: '3%', textAlign: 'left',color:"black" }}>
                Play On...
            </Typography>
            <div style={{ textAlign:"left"}}>
            <InputForm/>
           </div>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
          <img src={Getty} alt="getty" style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
          </Item>
        </Grid>
      </Grid>
    </Box> */
    
    
    //-------------------------Prathna-------------------------

    // <Container>
    // {/* Content of your component */}
    //     <Typography component="div" variant="h4" style={{ paddingTop: '15%',textAlign: 'left'}}>
    //       Explore, Rent, Enjoy, Repeat
    //     </Typography>
    //     <Typography variant="h5" color="text.secondary" component="div" style={{ paddingBottom: '3%', textAlign: 'left',color:"white" }}>
    //       Play On...
    //     </Typography>
    //     <div style={{ textAlign:"left"}}>
    //       <InputForm/>
    //     </div>
    // </Container>

    //-------------------------Shruti-------------------------    
    <Container>
      <Box >
        <Stack>
          <Typography component="div" variant="h4">
            Explore, Rent, Enjoy, Repeat
          </Typography>
          <Typography variant="h5" color="text.secondary" component="div" style={{ paddingBottom: '1%' }}>
            Play On...
          </Typography>
          <div >
            <InputForm/>
          </div>
        </Stack>
      </Box>

    </Container>


  );
}