import React from 'react';

import { Grid } from '@mui/material';

import CSS from '../../assets/css modules/course/ShareBox.module.css';

import ShareIcons from './ShareIcons';

class ShareBox extends React.Component {
  render() {
    // const { image , name , details , teacher , time , price , oldPrice } = this.props;

    return (
      <Grid className={CSS.Box} ml={1}>
        <Grid container xs={12} sm={12} md={12} lg={12} direction="row">
          <Grid
            xs={8}
            sm={8}
            md={8}
            lg={8}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            mt={1}
            py={1}
            px={2}
          >
            <ShareIcons />
          </Grid>
          <Grid
            xs={4}
            sm={4}
            md={4}
            lg={4}
            direction="row"
            justifyContent="center"
            alignItems="center"
            mt={1.5}
            pt={1}
            pr={2}
          >
            <h6>اشتراک گذاری در : </h6>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default ShareBox;
