import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Typography, Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel'; // Import the carousel component
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import Getty from "../Assets/Images/Getty.jpg";
import Tugofwar from "../Assets/Images/Tugofwar.jpg";
import Outdoorgames from "../Assets/Images/Outdoor-games.jpg";
import test from "../Assets/Images/test.png";
import InputForm from '../Components/InputForm';
import AppBar from '../Components/AppBar';
import Stack from '@mui/material/Stack';

const Container = styled('div')({
  position: 'relative',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // Remove the backgroundImage from here
});

const CarouselContainer = styled(Carousel)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  backdropFilter: 'blur(5px)', // Apply the blur effect
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledStack = styled(Stack)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
});

export default function ColumnsGrid() {
  return (
    <Container>
      <CarouselContainer autoPlay infiniteLoop showStatus={false} showThumbs={false}>
      
        <div>
          <img src={Getty} alt="Getty" />
        </div>
        <div>
          <img src={Tugofwar} alt="Tugofwar" />
        </div>
        <div>
          <img src={Outdoorgames} alt="Outdoorgames" />
        </div>
      </CarouselContainer>
      <AppBar />
      <FormContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <StyledStack spacing={2}>
              <Typography variant="h4">
                Explore, Rent, Enjoy, Repeat
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Play On...
              </Typography>
              <InputForm />
            </StyledStack>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Your image or content on the right side */}
          </Grid>
        </Grid>
      </FormContainer>
    </Container>
  );
}
