import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../common/ButtonLEO';
import ThreeDivs from './ThreeDivs';

import CSS from '../../assets/css modules/FirstSlider.module.css';

import FirstSlider1 from '../../assets/images/FirstSlider1.jpg';
import FirstSlider2 from '../../assets/images/FirstSlider2.jpg';
import NextArrow from '../../assets/images/Arrow.png';

class FirstSlider extends Component {
  state = {
    nextIconClicked: true,
    h1Animation: false,
    pAnimation: false,
    btnAnimation: false,
    interval: '',
  };

  componentDidMount() {
    this.animation();
    const interval = setInterval(() => {
      this.handleNext();
    }, 9000);
    this.setState({ interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  resetInterval = () => {
    // this function is used in handleNext method.
    clearInterval(this.state.interval);
    const interval = setInterval(() => {
      this.handleNext();
    }, 9000);
    this.setState({ interval });
  };

  animation = () => {
    setTimeout(() => {
      this.setState({ h1Animation: true });
    }, 1);

    setTimeout(() => {
      this.setState({ pAnimation: true });
    }, 700);

    setTimeout(() => {
      this.setState({ btnAnimation: true });
    }, 1400);
  };

  handleNext = () => {
    this.resetInterval();
    const nextIconClicked = !this.state.nextIconClicked;
    this.setState({
      nextIconClicked,
      h1Animation: false,
      pAnimation: false,
      btnAnimation: false,
    });
    setTimeout(() => {
      this.animation();
    }, 1200);
  };

  selectClass = (bool) => {
    const { nextIconClicked } = this.state;
    if (bool) return nextIconClicked ? CSS.opacity1 : CSS.opacity0;
    else return nextIconClicked ? CSS.opacity0 : CSS.opacity1;
  };

  render() {
    const { h1Animation, pAnimation, btnAnimation } = this.state;
    return (
      <React.Fragment>
        <div className={CSS.slider}>
          <div className={`${CSS.item} ${this.selectClass(true)}`}>
            <img src={FirstSlider1} alt="FirstSlider1" />
          </div>

          <div className={`${CSS.item} ${this.selectClass(false)}`}>
            <img src={FirstSlider2} alt="FirstSlider2" />
          </div>

          <div className={`${CSS.nextArrow}`} onClick={this.handleNext}>
            <img src={NextArrow} alt="Next Arrow"></img>
          </div>
          <div className={`${CSS.backArrow}`} onClick={this.handleNext}>
            <img src={NextArrow} alt="Back Arrow"></img>
          </div>

          {/* description */}
          <div className={`${CSS.description}`}>
            <h1 className={h1Animation ? CSS.hAnim : ''}>
              مهارتهای جدید <br></br>
            </h1>
            <h1 className={h1Animation ? CSS.hAnim : ''}>
              <span>یادگیری</span> آسان
            </h1>

            <p className={pAnimation ? CSS.pAnim : ''}>
              از پلت فرم آنلاین اسکیل آپ با استفاده از روش های اثبات شده ما یاد
              بگیرید<br></br> تا بهترین مهارت ها را برای شغل حال و آینده خودتان
              کسب کنید.
            </p>

            <div className={`${CSS.twoBtns} ${btnAnimation ? CSS.anim : ''}`}>
              <Link
                className={CSS.link}
                to={{
                  pathname: `/Courses`,
                }}
              >
                <Button
                  text="شروع یادگیری"
                  bgColor=""
                  border="2px solid #fff"
                  bgOver="rgba(114, 9, 183)"
                  margin="0 0 0 1rem"
                />
              </Link>
              <Link
                className={CSS.link}
                to={{
                  pathname: `/Courses`,
                }}
              >
                <Button
                  text="چرا اسکیل آپ"
                  bgColor="rgba(114, 9, 183)"
                  border="none"
                  bgOver="rgb(114, 70, 183)"
                  margin="0 0 0 1rem"
                />
              </Link>
            </div>
          </div>

          <ThreeDivs />
        </div>
      </React.Fragment>
    );
  }
}

export default FirstSlider;
