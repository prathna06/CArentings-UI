import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box, Grid, Typography } from '@mui/material';
import Getty from "../Assets/Images/Getty.jpg";
import InputForm from '../Components/InputForm';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height:800,
}));

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={16}>
        <Grid item xs={8} >
          <Item style={{paddingLeft:'70px'}}>
            <Typography component="div" variant="h4" style={{ paddingTop: '25%',textAlign: 'left' }}>
                Unlocking adventure, One rental at a Time!
            </Typography>
            <Typography variant="h5" color="text.secondary" component="div" style={{ paddingBottom: '3%', textAlign: 'left' }}>
                Play On...
            </Typography>
            <InputForm/>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
          <img src={Getty} alt="getty" style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}