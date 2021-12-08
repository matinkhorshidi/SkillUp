import React, { Component } from 'react';

import SvgIcon from '../common/SvgIcon';
import { ReactComponent as MasterIcon } from '../../assets/image/Icons/Master3.svg';
import { ReactComponent as weblogIcon } from '../../assets/image/Icons/weblog.svg';
// import { ReactComponent as weblogIcon2 } from '../../assets/image/Icons/weblog2.svg';
import { ReactComponent as courseIcon } from '../../assets/image/Icons/course.svg';

import CSS from '../../assets/css modules/ThreeDivs.module.css';
import CallToAction from './CallToAction';
import { Grid } from '@material-ui/core';

class ThreeDivs extends Component {
  handleScroll = (element) => {
    const mastersSlider = document.getElementById(element);
    const rect = mastersSlider.getBoundingClientRect();
    const position = rect.top + window.scrollY;
    window.scrollTo(0, position - 100);
  };
  render() {
    return (
      <Grid
        container
        className={CSS.threeDivs}
        textAlign={'center'}
        justifyContent={'center'}
      >
        <Grid item xs={12} sm={12} md={4} my={1}>
          <CallToAction
            name={'اساتید'}
            icon={MasterIcon}
            onClick={() => this.handleScroll('masters-slider')}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} my={1}>
          <CallToAction
            name={'خبرنامه'}
            icon={weblogIcon}
            onClick={() => this.handleScroll('blog')}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} my={1}>
          <CallToAction
            name={'دوره ها'}
            icon={courseIcon}
            onClick={() => this.handleScroll('courses')}
          />
        </Grid>
      </Grid>
    );
  }
}

export default ThreeDivs;
