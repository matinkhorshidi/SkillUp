import React from 'react';

import { Container, FormControl, Grid, MenuItem, Select } from '@mui/material';

import CSS from '../../assets/css modules/course/CourseInfo.module.css';

import Image from './../common/Image';

import CourseImage from '../../assets/image/Footer5.jpg';
import Courses from './Courses';

class CourseInfo extends React.Component {
  render() {
    // const { image , name , details , teacher , time , price , oldPrice } = this.props;
    const { name, text, filter, number, backgrColor, textColor } = this.props;

    return (
      <Container
        maxWidth="lg"
        className={CSS.Box}
        style={{ backgroundColor: backgrColor, color: textColor }}
        mb={2}
      >
        <Grid
          container
          columns={{ xs: 12, sm: 12, md: 12 }}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="end"
            textAlign="right"
            p={2}
            pt={4}
          >
            <Courses />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default CourseInfo;
