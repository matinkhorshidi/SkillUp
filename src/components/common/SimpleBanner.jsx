import React from 'react';

import { Container, Grid } from '@mui/material';

import CSS from '../../assets/css modules/weblog/Banner.module.css';

class SimpleBanner extends React.Component {
  render() {
    // const { image , name , details , teacher , time , price , oldPrice } = this.props;
    const { name, menu, backgrColor, textColor } = this.props;

    return (
      <Container
        maxWidth="lg"
        className={CSS.Box}
        style={{ backgroundColor: backgrColor, color: textColor }}
      >
        <Grid
          container
          // columns={{ xs: 12, sm: 12, md: 12 }}
          direction="row-reverse"
          justifyContent="flex-start"
          alignItems="center"
          my={3}
          height={'8rem'}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="end"
            textAlign="right"
            pr={5}
          >
            <h3> {name}</h3>
            <h6> {menu}</h6>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default SimpleBanner;
