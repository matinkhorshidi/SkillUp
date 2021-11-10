import React, { Component } from 'react';

import c from '../../assets/css modules/MastersSlider.module.css';

import OstadBahrPic from '../../assets/images/OstadBahrPic.jpg';
import Mohsen from '../../assets/images/Mohsen.webp';
import Salar from '../../assets/images/Salar.webp';
import MehdiAshgari from '../../assets/images/MehdiAsghari.webp';

import { ReactComponent as RightArrow } from '../../assets/images/RightArrow.svg';
import { ReactComponent as Google } from '../../assets/images/Google.svg';
import { ReactComponent as Telegram } from '../../assets/images/Telegram.svg';
import { ReactComponent as Instagram } from '../../assets/images/Instagram.svg';
import { ReactComponent as Facebook } from '../../assets/images/Facebook.svg';

class MastersSlider extends Component {
  state = {
    currentMasterNumber: 0,
    dataMustHide: false,
    mainPicCoverAnimation1: false,
    mainPicCoverAnimation2: false,
    h1SpanCoverAnimation1: false,
    h1SpanCoverAnimation2: false,
    pCoverAnimation1: false,
    pCoverAnimation2: false,
    logosCoverAnimation1: false,
    logosCoverAnimation2: false,
    quoteAnimation1: false,
    quoteAnimation2: false,
    nextIconAnimation1: false,
    nextIconAnimation2: false,
    arrayNumberAnimation1: false,
    arrayNumberAnimation2: false,
  };
  masters = [
    {
      name: 'استاد بحر',
      profession: 'همه کاره',
      pic: OstadBahrPic,
      quote:
        'مطمئن هستیم بار اول نیست که با این سبک مطالب برخورد می‌کنید و مطمئن هستیم آخرین بار هم نخواهد بود، اما شک نداریم این مطلب را فراموش نخواهید کرد، چرا که در اینجا ما کلیشه‌ها و حرف‌های رویایی و داستانی را کنار زده‌ایم تا حقیقت بعضا تلخِ پولدار شدن را از میان آنها بیرون بکشیم.',
      descrip:
        'مطمئن هستیم بار اول نیست که با این سبک مطالب برخورد می‌کنید و مطمئن هستیم آخرین بار هم نخواهد بود، اما شک نداریم این مطلب را فراموش نخواهید کرد، چرا که در اینجا ما کلیشه‌ها و حرف‌های رویایی و داستانی را کنار زده‌ایم تا حقیقت بعضا تلخِ پولدار شدن را از میان آنها بیرون بکشیم.',
    },
    {
      name: 'مهدی اصغری',
      profession: 'توسعه دهنده ارشد',
      pic: MehdiAshgari,
      quote:
        'مطمئن هستیم بار اول نیست که با این سبک مطالب برخورد می‌کنید و مطمئن هستیم آخرین بار هم نخواهد بود، اما شک نداریم این مطلب را فراموش نخواهید کرد، چرا که در اینجا ما کلیشه‌ها و حرف‌های رویایی و داستانی را کنار زده‌ایم تا حقیقت بعضا تلخِ پولدار شدن را از میان آنها بیرون بکشیم.',
      descrip:
        'مطمئن هستیم بار اول نیست که با این سبک مطالب برخورد می‌کنید و مطمئن هستیم آخرین بار هم نخواهد بود، اما شک نداریم این مطلب را فراموش نخواهید کرد، چرا که در اینجا ما کلیشه‌ها و حرف‌های رویایی و داستانی را کنار زده‌ایم تا حقیقت بعضا تلخِ پولدار شدن را از میان آنها بیرون بکشیم.',
    },
    {
      name: 'محسن',
      profession: 'توسعه دهنده',
      pic: Mohsen,
      quote:
        'مطمئن هستیم بار اول نیست که با این سبک مطالب برخورد می‌کنید و مطمئن هستیم آخرین بار هم نخواهد بود، اما شک نداریم این مطلب را فراموش نخواهید کرد، چرا که در اینجا ما کلیشه‌ها و حرف‌های رویایی و داستانی را کنار زده‌ایم تا حقیقت بعضا تلخِ پولدار شدن را از میان آنها بیرون بکشیم.',
      descrip:
        'مطمئن هستیم بار اول نیست که با این سبک مطالب برخورد می‌کنید و مطمئن هستیم آخرین بار هم نخواهد بود، اما شک نداریم این مطلب را فراموش نخواهید کرد، چرا که در اینجا ما کلیشه‌ها و حرف‌های رویایی و داستانی را کنار زده‌ایم تا حقیقت بعضا تلخِ پولدار شدن را از میان آنها بیرون بکشیم.',
    },
    {
      name: 'سالار',
      profession: 'توسعه دهنده',
      pic: Salar,
      quote:
        'مطمئن هستیم بار اول نیست که با این سبک مطالب برخورد می‌کنید و مطمئن هستیم آخرین بار هم نخواهد بود، اما شک نداریم این مطلب را فراموش نخواهید کرد، چرا که در اینجا ما کلیشه‌ها و حرف‌های رویایی و داستانی را کنار زده‌ایم تا حقیقت بعضا تلخِ پولدار شدن را از میان آنها بیرون بکشیم.',
      descrip:
        'مطمئن هستیم بار اول نیست که با این سبک مطالب برخورد می‌کنید و مطمئن هستیم آخرین بار هم نخواهد بود، اما شک نداریم این مطلب را فراموش نخواهید کرد، چرا که در اینجا ما کلیشه‌ها و حرف‌های رویایی و داستانی را کنار زده‌ایم تا حقیقت بعضا تلخِ پولدار شدن را از میان آنها بیرون بکشیم.',
    },
  ];

  componentDidMount() {
    this.handleClickedPic(0);
  }

  animation = () => {
    setTimeout(() => {
      this.setState({ mainPicCoverAnimation1: true });
    }, 15);
    setTimeout(() => {
      this.setState({ h1SpanCoverAnimation1: true });
    }, 150);
    setTimeout(() => {
      this.setState({ pCoverAnimation1: true });
    }, 300);
    setTimeout(() => {
      this.setState({ logosCoverAnimation1: true });
    }, 450);
    setTimeout(() => {
      this.setState({ mainPicCoverAnimation2: true });
    }, 1010);
    setTimeout(() => {
      this.setState({ h1SpanCoverAnimation2: true });
    }, 1100);
    setTimeout(() => {
      this.setState({ pCoverAnimation2: true });
    }, 1200);
    setTimeout(() => {
      this.setState({ logosCoverAnimation2: true });
    }, 1300);
    setTimeout(() => {
      this.setState({ quoteAnimation2: true, quoteAnimation1: false });
    }, 1400);
    setTimeout(() => {
      this.setState({ nextIconAnimation2: true, nextIconAnimation1: false });
    }, 1700);
  };

  handleNext = () => {
    let currentMasterNumber = this.state.currentMasterNumber + 1;
    if (currentMasterNumber > this.masters.length - 1) currentMasterNumber = 0;
    //this.setState({ currentMasterNumber });
    this.handleClickedPic(currentMasterNumber);
  };
  handleShadow = (number) => {
    if (this.state.currentMasterNumber === number) return c['opacity0-5'];
  };
  handleClickedPic = (number) => {
    this.setState({
      dataMustHide: true,
      currentMasterNumber: number,
    });
    setTimeout(() => {
      this.setState({
        mainPicCoverAnimation1: false,
        mainPicCoverAnimation2: false,
        h1SpanCoverAnimation1: false,
        h1SpanCoverAnimation2: false,
        pCoverAnimation1: false,
        pCoverAnimation2: false,
        logosCoverAnimation1: false,
        logosCoverAnimation2: false,
        quoteAnimation1: true,
        quoteAnimation2: false,
        nextIconAnimation1: true,
        nextIconAnimation2: false,
        arrayNumberAnimation1: true,
        arrayNumberAnimation2: false,
      });
      this.animation();
    }, 1000);
    setTimeout(() => {
      this.setState({
        dataMustHide: false,
        arrayNumberAnimation2: true,
        arrayNumberAnimation1: false,
      });
    }, 2003);
  };
  /* this function is for selectiong class to determine animation. */
  selectClass = (key) => {
    switch (key) {
      case 'pic':
        if (this.state.mainPicCoverAnimation2) return c.rendered2;
        if (this.state.mainPicCoverAnimation1) return c.rendered1;
        return '';
      case 'h1Span':
        if (this.state.h1SpanCoverAnimation2) return c.rendered2;
        if (this.state.h1SpanCoverAnimation1) return c.rendered1;
        return '';
      case 'p':
        if (this.state.pCoverAnimation2) return c.rendered2;
        if (this.state.pCoverAnimation1) return c.rendered1;
        return '';
      case 'logos':
        if (this.state.logosCoverAnimation2) return c.rendered2;
        if (this.state.logosCoverAnimation1) return c.rendered1;
        return '';
      case 'quote':
        if (this.state.quoteAnimation2) return c.goUp;
        if (this.state.quoteAnimation1) return c.goDown;
        return '';
      case 'nextIcon':
        if (this.state.nextIconAnimation2) return c.goUp;
        if (this.state.nextIconAnimation1) return c.goDown;
        return '';
      case 'arrayNumber':
        if (this.state.arrayNumberAnimation2) return c.goUp;
        if (this.state.arrayNumberAnimation1) return c.goDown;
        return '';
      default:
        break;
    }
  };

  render() {
    const { masters } = this;
    const { currentMasterNumber: cMN, dataMustHide } = this.state;

    return (
      <div id="masters-slider" className={c['masters-slider']}>
        <div className={c.holder}>
          {/* korner pictures */}
          <div className={c.pictures}>
            <div className={c.asli}>
              <div
                className={c['masters-pic']}
                onClick={() => this.handleClickedPic(0)}
              >
                <img className={this.handleShadow(0)} src={OstadBahrPic} />
              </div>

              <div
                className={c['masters-pic']}
                onClick={() => this.handleClickedPic(1)}
              >
                <img className={this.handleShadow(1)} src={MehdiAshgari} />
              </div>

              <div
                className={c['masters-pic']}
                onClick={() => this.handleClickedPic(2)}
              >
                <img className={this.handleShadow(2)} src={Mohsen} />
              </div>

              <div
                className={`${c['masters-pic']} ${c.last}`}
                onClick={() => this.handleClickedPic(3)}
              >
                <img className={this.handleShadow(3)} src={Salar} />
              </div>
            </div>
          </div>

          {/* main div */}
          <div className={`${c.data}`}>
            {/* big pic */}
            <div className={c.pic}>
              <img
                className={dataMustHide ? c.hidden : ''}
                src={masters[cMN].pic}
              />
              <div className={`${c.cover} ${this.selectClass('pic')}`}></div>
            </div>

            {/* description */}
            <div className={c.description}>
              <div className={c['person-description']}>
                <div className={c.text}>
                  {/* h1 span */}
                  <div className={c.animHolder1}>
                    <h1 className={dataMustHide ? c.hidden : ''}>
                      {masters[cMN].name}
                    </h1>
                    <div
                      className={`${c.profession} ${
                        dataMustHide ? c.hidden : ''
                      }`}
                    >
                      {masters[cMN].profession}
                    </div>
                    <div
                      className={`${c.cover} ${this.selectClass('h1Span')}`}
                    ></div>
                  </div>

                  {/* p */}
                  <div className={c.animHolder2}>
                    <div
                      className={`${c.pHolder} ${dataMustHide ? c.hidden : ''}`}
                    >
                      <p>{masters[cMN].descrip}</p>
                    </div>
                    <div
                      className={`${c.cover} ${this.selectClass('p')}`}
                    ></div>
                  </div>

                  {/* logos */}
                  <div className={`${c.animHolder3} ${c.logos}`}>
                    <div
                      className={`${c.logos} ${dataMustHide ? c.hidden : ''}`}
                    >
                      <div>
                        <Google />
                      </div>
                      <div>
                        <Telegram />
                      </div>
                      <div>
                        <Instagram />
                      </div>
                      <div>
                        <Facebook />
                      </div>
                    </div>
                    <div
                      className={`${c.cover} ${this.selectClass('logos')}`}
                    ></div>
                  </div>
                </div>

                {/* right array number */}
                <div className={`${c.number} ${dataMustHide ? c.hidden : ''}`}>
                  <span className={this.selectClass('arrayNumber')}>{`0${
                    cMN + 1
                  }/0${masters.length}`}</span>
                </div>
              </div>

              {/* lower quote */}
              <div
                className={`${c.quote} ${
                  dataMustHide ? c.hidden : ''
                } ${this.selectClass('quote')}`}
              >
                <div className={c.mainQuote}>
                  <div>« {masters[cMN].quote} »</div>
                </div>
                <div
                  className={`${c.nextIcon} ${this.selectClass('nextIcon')}`}
                  onClick={this.handleNext}
                >
                  <RightArrow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MastersSlider;
