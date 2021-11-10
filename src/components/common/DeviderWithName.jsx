import React from 'react';

import Grid from '@mui/material/Grid';

import CSS from '../../assets/css modules/Devider.module.css';

class DeviderWithName extends React.Component {
  render() {
    return (
      <Grid container my={3.5} mt={10}>
        <Grid item xs className={CSS.line}>
          <hr className={CSS.hr} />
        </Grid>
        <Grid item sm={3} xs={4} className={CSS.name}>
          {this.props.name}
        </Grid>
        <Grid item xs>
          <hr className={CSS.hr} />
        </Grid>
      </Grid>
    );
  }
}

export default DeviderWithName;
