import React from 'react';

import { TextField, Grid } from '@mui/material';

import EmailButton from './EmailButton';

class EmailInput extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={10}>
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            color="success"
            defaultValue=""
            InputProps={{
              style: { color: '#fff' },
            }}
            InputLabelProps={{
              style: { color: '#fff' },
            }}
            sx={{
              width: '100%',
              height: '100%',
              color: 'white',
              backgroundColor: 'rgb(255 255 255 / 30%)',
              borderBottomColor: '#4BB543',
              borderBottomWidth: '2px',
              borderBottomStyle: 'solid',
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <EmailButton
            text={'تایید'}
            txtColor={'#FFFFFF'}
            bgColor={'#4BB543'}
            bgOver={'#4BB543'}
            fontSize={'0.8rem'}
          ></EmailButton>
        </Grid>
      </Grid>
    );
  }
}

export default EmailInput;
