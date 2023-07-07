import * as React from 'react';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Button, FormControl, TextField, Autocomplete} from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '40%',
    },
  }));

  const categories = [
    {title: 'Cornhole'},
    {title: 'Ladder Toss'},
    {title: 'Jenga'},
    {title: 'Tag'},
    {title: 'spikeball'},
];

function InputForm() {
    const [eventDate, setEventDate] = useState(dayjs().add(0, 'day'));
    const [Zipcode, setZipcode] = useState('');
    const [Category, setCategory] = useState([]);
    const [eventDateError, setEventDateError] = useState(false);
    const [ZipcodeError, setZipcodeError] = useState(false);
    // const [CategoryError, setCategoryError] = useState(false);

    const handleEventDateChange = (date) => {
        setEventDateError(false);
        setEventDate(date);
    };

    const validateZipcode = () => {
    // debugger;
    if (Zipcode.trim() === '') {
        setZipcodeError(true);
    } else if (!/^\d{5}(?:[-\s]\d{4})?$/.test(Zipcode)) {
        setZipcodeError(true);
    } else {
        setZipcodeError(false);
        return true;
    }
    };

    const handleZipcodeChange = (e) => {
        setZipcodeError(false);
        setZipcode(e.target.value);
    
    };
    
    const handleCategoryChange = (e, value) => {
        // setCategoryError(false);
        setCategory(value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      if (!Zipcode) {
        setZipcodeError(true);
        return;
      }
      else if (validateZipcode()){
        console.log('eventDate:', eventDate.$d);
        console.log('Zipcode:', Zipcode);
        console.log('Category:', Category);
      }
    };

    const classes = useStyles();
    
  return (
    <FormControl component='form' onSubmit={handleSubmit} className={classes.formControl}>     
    <div> 
      
        <LocalizationProvider dateAdapter={AdapterDayjs} >
       
            <DatePicker
                label="Event Date"
                value={eventDate}
                defaultValue={dayjs().add(0, 'day')}
                onChange={handleEventDateChange}
                disablePast
                error={eventDateError}
            />
        </LocalizationProvider>

        {eventDateError && !eventDate && (
          <Typography variant="body2" color="error" style={{ marginBottom: '1rem' }}>
            Event Date is required
          </Typography>
        )}
        <TextField
            label="Zipcode"
            value={Zipcode}
            onChange={handleZipcodeChange}
            id="filled-hidden-label-Normal"
            variant="outlined"
            size="Normal"
            autoComplete="off"
            style={{ marginTop: '1rem' }}
            error={ZipcodeError}
        />
        {/* <TextField
            label="Category"
            id="filled-hidden-label-normal"
            value={Category}
            onChange={handleCategoryChange}
            variant="outlined"
            autoComplete="off"
            style={{ marginTop: '1rem' }}
            error={CategoryError}
        /> */}
        <Autocomplete
            multiple
            id="tags-outlined"
            options={categories}
            value={Category}
            getOptionLabel={(option) => option.title}
            onChange={handleCategoryChange}
            // defaultValue={[Category]}
            filterSelectedOptions
            style={{ marginTop: '1rem' }}
            renderInput={(params) => (
            <TextField
                {...params}
                label="Items"
                placeholder="Categories"
            />
            )}
        />
        <Button variant="contained" color="inherit" type="submit" 
            style={{ marginTop: '1rem',background:"#1C76D2", color:"white" }}>
            Submit
        </Button>
        </div>
    </FormControl>
    
  );
}

export default InputForm;