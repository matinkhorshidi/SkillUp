import React, { Component } from 'react';

import SvgIcon from '../common/SvgIcon';

import { ReactComponent as MasterIcon } from '../../assets/image/Icons/Master3.svg';
import { ReactComponent as weblogIcon } from '../../assets/image/Icons/weblog.svg';
// import { ReactComponent as weblogIcon2 } from '../../assets/image/Icons/weblog2.svg';
import { ReactComponent as courseIcon } from '../../assets/image/Icons/course.svg';

import c from '../../assets/css modules/ThreeDivs.module.css';

class ThreeDivs extends Component {
  handleScroll = (element) => {
    const mastersSlider = document.getElementById(element);
    const rect = mastersSlider.getBoundingClientRect();
    const position = rect.top + window.scrollY;
    window.scrollTo(0, position - 100);
  };
  render() {
    return (
      <div className={c.threeDivs}>
        <div
          className={c.items}
          onClick={() => this.handleScroll('masters-slider')}
        >
          <div className={c.container}>
            <div className={c.sectionBox}>
              <span className={c.span1}>اساتید</span>
              <span className={c.span2}>
                بیشتر‍‍‍‍‍‍ <span>»</span>
              </span>
            </div>
            <div className={c.icon}>
              <SvgIcon
                Icon={MasterIcon}
                size={'85px'}
                bgColor="rgba(0, 0, 0)"
                bgOver="rgb(124, 11, 179)"
              ></SvgIcon>
            </div>
          </div>
        </div>

        <div className={c.items} onClick={() => this.handleScroll('blog')}>
          <div className={c.container}>
            <div className={c.sectionBox}>
              <span className={c.span1}>خبرنامه</span>
              <span className={c.span2}>
                بیشتر‍‍‍‍‍‍ <span>»</span>
              </span>
            </div>
            <div className={c.icon}>
              <SvgIcon
                Icon={weblogIcon}
                size={'90px'}
                bgColor="rgba(0, 0, 0)"
                bgOver="rgb(124, 11, 179)"
              ></SvgIcon>
            </div>
          </div>
        </div>

        <div className={c.items} onClick={() => this.handleScroll('courses')}>
          <div className={c.container}>
            <div className={c.sectionBox}>
              <span className={c.span1}>دوره ها</span>
              <span className={c.span2}>
                بیشتر‍‍‍‍‍‍ <span>»</span>
              </span>
            </div>
            <div className={c.icon}>
              <SvgIcon
                Icon={courseIcon}
                size={'90px'}
                bgColor="rgba(0, 0, 0)"
                bgOver="rgb(124, 11, 179)"
              ></SvgIcon>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThreeDivs;
