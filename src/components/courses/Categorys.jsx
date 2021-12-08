import React from 'react';

import { Container, Grid } from '@mui/material';

import CSS from '../../assets/css modules/weblog/Categorys.module.css';

import CategoryBox from './CategoryBox';

import { ReactComponent as frontDevIll } from '../../assets/image/Illustraitors/frontdeveloper.svg';
import { ReactComponent as programmingIll } from '../../assets/image/Illustraitors/programming.svg';
import { ReactComponent as seoIll } from '../../assets/image/Illustraitors/seo.svg';
import { ReactComponent as designIll } from '../../assets/image/Illustraitors/design.svg';
class Categorys extends React.Component {
  render() {
    return (
      <Container maxWidth="lg" className={CSS.container}>
        <Grid container py={'2rem'}>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            justifyContent="center"
            alignItems="center"
            px={1}
          >
            <CategoryBox
              backColor={'#4895EF'}
              height={'32rem'}
              name={'فرانت دولوپرز'}
              number={15}
              svg={frontDevIll}
              svgPadding={'3rem'}
              namePadding={'3rem 3rem 0 3rem'}
              numPadding={'1rem 3rem 3rem 3rem'}
              url={'FrontDevs'}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Grid container>
              <Grid item xs={12} sm={6} md={6} lg={6} px={1}>
                <CategoryBox
                  backColor={'#FF9C1D'}
                  height={'17rem'}
                  name={'برنامه نویسی'}
                  number={100}
                  svg={programmingIll}
                  svgPadding={'0'}
                  namePadding={'1rem 1.5rem 0 0rem'}
                  numPadding={'0.5rem 2rem 0 3rem'}
                  url={'Programing'}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} px={1}>
                <CategoryBox
                  backColor={'#8FD01D'}
                  height={'17rem'}
                  name={'تولید محتوی و سئو'}
                  number={25}
                  svg={seoIll}
                  svgPadding={'0'}
                  namePadding={'1rem 1.5rem 0 0rem'}
                  numPadding={'0.5rem 2rem 0 3rem'}
                  url={'CcSeo'}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} py={2} px={1}>
              <CategoryBox
                backColor={'#DA3033'}
                height={'14rem'}
                name={'طراحی و یو آی'}
                number={10}
                svg={designIll}
                marginTop={'-120px'}
                namePadding={'2rem 1.5rem 0 0rem'}
                numPadding={'0.5rem 2rem 0 3rem'}
                url={'UiUx'}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Categorys;
