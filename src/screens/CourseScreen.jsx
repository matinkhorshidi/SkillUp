import React, { Component } from 'react';

import CourseContainer from '../components/course/CourseContainer';
import SimpleBanner from './../components/common/SimpleBanner';

class CourseScreen extends Component {
  state = {};

  render() {
    return (
      <div>
        <SimpleBanner
          name={'آموزش React JS جامع و پروژه محور (پروژه توییتر)'}
          menu={'آموزش >  برنامه نویسی وب'}
          number={20}
          filter={false}
          backgrColor={'#4895EF'}
          textColor={'#fff'}
        />
        <CourseContainer />
      </div>
    );
  }
}

export default CourseScreen;
