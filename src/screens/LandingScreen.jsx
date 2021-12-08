import React, { Component } from 'react';

import CoursesLanding from '../components/Landing/CoursesLanding';
import BlogsLanding from '../components/Landing/BlogsLanding';
import FirstSlider from '../components/Landing/FirstSlider';
import MastersSlider from '../components/Landing/MastersSlider';
import CoursesSlider from './../components/courses/CoursesSlider';

class LandingScreen extends Component {
  render() {
    return (
      <div>
        <FirstSlider />
        {/* <CoursesSlider /> */}

        <CoursesLanding />
        <MastersSlider />
        <BlogsLanding />
      </div>
    );
  }
}

export default LandingScreen;
