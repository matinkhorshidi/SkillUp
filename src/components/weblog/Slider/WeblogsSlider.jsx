import React, { Component } from 'react';

import { Grid, Box } from '@mui/material';
import SvgIcon from '../../common/SvgIcon';

import { ReactComponent as RightArrow } from '../../../assets/images/CoursesSliderRightArrow.svg';
import CoursesSlider1 from '../../../assets/image/blogsslider1.png';
import CoursesSlider2 from '../../../assets/image/blogsslider2.png';
import CoursesSlider3 from '../../../assets/image/blogsslider3.png';

import CSS from '../../../assets/css modules/courses/CoursesSlider.module.css';
import SliderSection from './SliderSection';

class WeblogsSlider extends Component {
  state = {
    flag: 0,
    numberArray: [1, 2, 3],
    sliderdata: [
      {
        number: 1,
        name: 'مهارت های جدید و یاد گیری آسان',
        details:
          'مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کارنمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که  نمیداد، همه میگفتند :',
        image: CoursesSlider1,
      },
      {
        number: 2,
        name: 'چگونه درباره لوکیشن‌های مختلف گوگل مپس نظر دهیم؟',
        details:
          'مانند بسیاری از سایت‌های دیگر، گوگل نیز به شما امکان می‌دهد نظر خود را درباره‌ی مکانی خاص ارسال کنید و کاربران دیگر نیز می‌توانند مستقیم آن‌ها را در نقشه گوگل ببینند. تقریبا می‌توانید درباره‌ی هر مکانی، از کسب‌وکارهای محلی گرفته تا مسیر پیاده‌روی یا مکان دیدنی،‌ نظر بگذارید. تنها چیزی که برای انجام این کار نیاز دارید، اکانت گوگل است.',
        image: CoursesSlider2,
      },
      {
        number: 3,
        name: 'یادگیری HTML - قدم اول ورود به دنیای توسعه وب',
        details:
          'زمانیکه برای اولین بار فرایند یادگیری توسعه وب را آغاز کردم برای اولین بار نمی‌دانستم که وارد چه دنیایی خواهم شد. کتابی تحت عنوان آموزش HTML داشتم و سعی داشتم با خواندن آن HTML را یاد بگیرم. با گذر زمان متوجه شدم که جدای از HTML زبان‌های بسیار زیاد دیگری نیز وجود دارد که برای تبدیل شدن به یک برنامه‌نویس یا توسعه‌دهنده وب باید آن‌ها را نیز یاد بگیرم. اما در نهایت به این نتیجه رسیدم که سنگ بنای پیشرفت بنده برای تبدیل شدن به یک توسعه‌دهنده وب یادگیری HTML است. به همین دلیل بعد از مطالعه کتاب و یادگیری زبان‌های دیگر، یک بار دیگر سراغ یادگیری عمیق‌تر HTML رفته و این بار با ویژگی‌های بسیار جالب‌تر از HTML آشنا شدم.',
        image: CoursesSlider3,
      },
    ],
  };

  handleClick = (arrow) => {
    const { flag, numberArray, sliderdata } = this.state;
    const number = sliderdata.length - 1;
    if (arrow === 'right') {
      if (flag !== number) {
        const flag1 = flag + 1;
        this.setState({ flag: flag1 });
      } else {
        this.setState({ flag: 0 });
      }
    } else if (arrow === 'left') {
      if (flag !== 0) {
        const flag1 = flag - 1;
        this.setState({ flag: flag1 });
      } else {
        this.setState({ flag: 2 });
      }
    }
  };

  handleDot = (n) => {
    const { flag } = this.state;
    if (n - 1 === flag) {
      return;
    } else {
      this.setState({ flag: n - 1 });
    }
  };

  render() {
    const { numberArray, flag, sliderdata } = this.state;
    return (
      <Grid
        className={CSS.all}
        sx={{ position: 'relative', overflow: 'hidden' }}
        pb={2}
      >
        <Grid
          sx={{
            display: 'flex',
            width: '300%',
            height: '100%',
            position: 'relative',
            left: `-${this.state.flag * 100}%`,
            transition: '0.5s',
          }}
        >
          {sliderdata.map((data) => (
            <SliderSection
              name={data.name}
              details={data.details}
              image={data.image}
            />
          ))}
        </Grid>
        <Box
          className={CSS.leftArrow}
          onClick={() => this.handleClick('left')}
          style={{ zIndex: '100' }}
        >
          <SvgIcon
            Icon={RightArrow}
            size={'40px'}
            bgColor="default"
            bgOver="none"
            cursor="pointer"
          />
        </Box>
        <Box
          className={CSS.rightArrow}
          onClick={() => this.handleClick('right')}
          style={{ zIndex: '100' }}
        >
          <SvgIcon
            Icon={RightArrow}
            size={'40px'}
            bgColor="default"
            bgOver="none"
            cursor="pointer"
          />
        </Box>
        <Box className={CSS.dots}>
          {numberArray.map((n) => (
            <Box
              className={`${CSS.dot} ${n - 1 === flag ? CSS.dotSelected : ''}`}
              onClick={() => this.handleDot(n)}
            ></Box>
          ))}
        </Box>
      </Grid>
    );
  }
}

export default WeblogsSlider;
