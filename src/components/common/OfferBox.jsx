import React from 'react';

import { Container, Grid } from '@mui/material';

import CSS from '../../assets/css modules/weblog/Banner.module.css';
import SvgIcon from './SvgIcon';
import { ReactComponent as offer } from '../../assets/image/Illustraitors/offer.svg';

class OfferBox extends React.Component {
  render() {
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
          direction="row-reverse"
          justifyContent="flex-start"
          alignItems="center"
          height={'5rem'}
          mb={2}
        >
          {' '}
          <Grid
            container
            item
            xs={4}
            sm={4}
            md={4}
            direction="column"
            justifyContent="flex-end"
            alignItems="start"
            pr={5}
          >
            <SvgIcon Icon={offer} size="90px" bgColor={'#DA3033'} />
          </Grid>
          <Grid
            container
            item
            xs={4}
            sm={4}
            md={4}
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
            textAlign="center"
            pr={5}
          >
            <h5> {name}</h5>
            <h5>20%</h5>
          </Grid>
          <Grid
            container
            item
            xs={4}
            sm={4}
            md={4}
            direction="column"
            justifyContent="flex-end"
            alignItems="end"
            pr={5}
          >
            <SvgIcon Icon={offer} size="90px" bgColor={'#DA3033'} />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default OfferBox;
