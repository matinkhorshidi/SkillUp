import React from 'react';

import { Container, Grid } from '@mui/material';

import CSS from '../../assets/css modules/weblog/Banner.module.css';

class OfferBox extends React.Component {
  render() {
    // const { image , name , details , teacher , time , price , oldPrice } = this.props;
    const { name, backgrColor, textColor } = this.props;

    return (
      <Container
        maxWidth="lg"
        className={CSS.Box}
        style={{ backgroundColor: backgrColor, color: textColor }}
      >
        <Grid
          container
          columns={{ xs: 12, sm: 12, md: 12 }}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          height={'5rem'}
          mb={2}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="end"
            textAlign="right"
            pr={5}
          >
            <h5> {name}</h5>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default OfferBox;
