import React, { Component } from 'react';

import { Grid, Container, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@material-ui/core';

import CoursesSlider from '../components/courses/CoursesSlider.jsx';

// import c from '../assets/css modules/courses/CoursesScreen.module.css';
import CoursesContainer from './../components/courses/CoursesContainer';
import Categorys from './../components/courses/Categorys';
import Banner from './../components/common/Banner';

class CoursesScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Categorys />
        <Banner
          name={'همه ی مطالب'}
          menu={'وبلاگ'}
          number={20}
          filter={true}
          backgrColor={'#d3d3d3'}
          textColor={'#000'}
        />

        <CoursesContainer />
      </React.Fragment>
    );
  }
}

export default CoursesScreen;
