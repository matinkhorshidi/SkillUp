import React from 'react';
import { useLocation } from 'react-router-dom';

import CourseContainer from '../components/course/CourseContainer';
import SimpleBanner from './../components/common/SimpleBanner';

const CourseScreen = (props) => {
  let location = useLocation();
  const { name, TagColor, tag, url } = location.state;
  console.log(url);
  return (
    <div>
      <SimpleBanner
        name={name}
        menu={'آموزش'}
        menuUrl={'/Courses'}
        tag={tag}
        url={url}
        number={20}
        filter={false}
        backgrColor={TagColor}
        textColor={'#fff'}
      />
      <CourseContainer />
    </div>
  );
};

export default CourseScreen;
