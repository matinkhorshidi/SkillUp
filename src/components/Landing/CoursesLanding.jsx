import React from 'react';

import { Container, Grid } from '@mui/material';

import CourseBox from '../common/CourseBox';
import DeviderWithName from '../common/DeviderWithName';

class CoursesLanding extends React.Component {
  render() {
    return (
      <Container id="courses" maxWidth="lg">
        <DeviderWithName name="کورس ها" />
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
          pb={5}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CourseBox />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default CoursesLanding;
