import React from 'react';

import { Grid } from '@mui/material';
import { useTheme, useMediaQuery } from '@material-ui/core';

import CSS from '../../assets/css modules/header/UpperHeader.module.css';

import Search from './Search';
import Date from './Date';
import HeaderSocial from './HeaderSocial';
import HeaderCall from './HeaderCall';

const UpperHeader = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <React.Fragment>
      {!isMobile ? (
        <Grid
          className={CSS.maincontainer}
          container
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid
            item
            container
            md={6}
            sm={6}
            xs={6}
            textAlign={'center'}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid
              item
              md={4}
              sm={4}
              xs={4}
              container
              justifyContent={'flex-start'}
              textAlign={'center'}
              justifyItems={'center'}
              ml={2}
            >
              <HeaderCall number={'09017711751'} />
            </Grid>
            <Grid
              item
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              md={6}
              sm={8}
              xs={8}
            >
              <Search />
            </Grid>
          </Grid>
          <Grid
            item
            container
            md={6}
            sm={6}
            xs={6}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid
              item
              container
              md={6}
              sm={8}
              xs={8}
              justifyContent={'flex-end'}
              textAlign={'center'}
              justifyItems={'center'}
            >
              <HeaderSocial />
            </Grid>
            <Grid
              item
              container
              md={3}
              sm={4}
              xs={4}
              justifyContent={'center'}
              textAlign={'end'}
              justifyItems={'center'}
            >
              <Date date={'تاریخ امروز'} />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
};

export default UpperHeader;
