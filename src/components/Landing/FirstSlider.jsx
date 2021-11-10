import React, { Component } from 'react';

import Button from '../common/ButtonLEO';
import ThreeDivs from './ThreeDivs';

import c from '../../assets/css modules/FirstSlider.module.css';

import FirstSlider1 from '../../assets/images/FirstSlider1.jpg';
import FirstSlider2 from '../../assets/images/FirstSlider2.jpg';
import NextArrow from '../../assets/images/15.png';

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
    if (bool) return nextIconClicked ? c.opacity1 : c.opacity0;
    else return nextIconClicked ? c.opacity0 : c.opacity1;
  };

  render() {
    const { h1Animation, pAnimation, btnAnimation } = this.state;
    return (
      <React.Fragment>
        <div className={c.slider}>
          <div className={`${c.item} ${this.selectClass(true)}`}>
            <img src={FirstSlider1} alt="FirstSlider1" />
          </div>

          <div className={`${c.item} ${this.selectClass(false)}`}>
            <img src={FirstSlider2} alt="FirstSlider2" />
          </div>

          <div className={`${c.nextArrow}`} onClick={this.handleNext}>
            <img src={NextArrow} alt="Next Arrow"></img>
          </div>
          <div className={`${c.backArrow}`} onClick={this.handleNext}>
            <img src={NextArrow} alt="Back Arrow"></img>
          </div>

          {/* description */}
          <div className={`${c.description}`}>
            <h1 className={h1Animation ? c.hAnim : ''}>
              مهارتهای جدید <br></br>
            </h1>
            <h1 className={h1Animation ? c.hAnim : ''}>
              <span>یادگیری</span> آسان
            </h1>

            <p className={pAnimation ? c.pAnim : ''}>
              از پلت فرم آنلاین اسکیل آپ با استفاده از روش های اثبات شده ما یاد
              بگیرید<br></br> تا بهترین مهارت ها را برای شغل حال و آینده خودتان
              کسب کنید.
            </p>

            <div className={`${c.twoBtns} ${btnAnimation ? c.anim : ''}`}>
              <Button
                text="شروع یادگیری"
                bgColor=""
                border="2px solid #fff"
                bgOver="rgba(114, 9, 183)"
                margin="0 0 0 1rem"
              />
              <Button
                text="نمایش بیشتر"
                bgColor="rgba(114, 9, 183)"
                border="none"
                bgOver="rgb(114, 70, 183)"
                margin="0 0 0 1rem"
              />
            </div>
          </div>

          <ThreeDivs />
        </div>
      </React.Fragment>
    );
  }
}

export default FirstSlider;
