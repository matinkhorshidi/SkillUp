import React, { Component } from 'react';

import { useParams, useLocation } from 'react-router-dom';

// import c from '../assets/css modules/courses/CoursesScreen.module.css';
import CoursesContainer from './../components/courses/CoursesContainer';
import Banner from './../components/common/Banner';

const CoursesCatScreen = (props) => {
  let location = useLocation();
  const { name, color, url } = location.state;
  return (
    <React.Fragment>
      <Banner
        name={name}
        url={url}
        number={20}
        filter={true}
        backgrColor={color}
        textColor={'#000'}
      />

      <CoursesContainer />
    </React.Fragment>
  );
};

export default CoursesCatScreen;
