import React from 'react';

import { Container, Grid } from '@mui/material';

import CSS from '../../assets/css modules/userpanel/UserInfo.module.css';
import CoursesSlider1 from '../../assets/image/blogsslider1.png';
import CoursesSlider2 from '../../assets/image/blogsslider2.png';
import CoursesSlider3 from '../../assets/image/blogsslider3.png';

import { ReactComponent as Person } from '../../assets/images/Person.svg';

// import Image from './../common/Image';

// import CourseImage from '../../assets/image/Footer5.jpg';
import Input from './../Login/Input';
import CourseCard from './CourseCard';
import ButtonLEO from './../common/ButtonLEO';

const BuyCards = (props) => {
  const data = [
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
  ];
  const { name, text, backgrColor, textColor, user } = props;

  return (
    <Container
      maxWidth="lg"
      className={CSS.Box}
      style={{ backgroundColor: backgrColor, color: textColor }}
      mb={2}
      style={{ backgroundColor: 'rgb(143, 208, 29,0.5)', padding: '5px' }}
    >
      <Grid
        container
        columns={{ xs: 12, sm: 12, md: 12 }}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          alignItems="end"
          textAlign="right"
          p={0}
          pt={4}
        >
          <h5 style={{ padding: '0px 20px 20px 20px' }}>سبد خرید شما</h5>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            style={{
              backgroundColor: '#fff',
              borderRadius: '5px',
              margin: '0px',
            }}
          >
            <Grid container direction={'row-reverse'} p={6} pt={4}>
              <CourseCard
                name={data[1].name}
                details={data[1].details}
                image={data[1].image}
              />
            </Grid>
            <Grid container direction={'row-reverse'} p={6} pt={0}>
              <CourseCard
                name={data[2].name}
                details={data[2].details}
                image={data[2].image}
              />
            </Grid>
            <Grid container direction={'row-reverse'} p={6} pt={0}>
              <CourseCard
                name={data[2].name}
                details={data[2].details}
                image={data[2].image}
              />
            </Grid>
            <Grid container direction={'row-reverse'} p={6} pt={0}>
              <Grid
                container
                item
                xs={8}
                sm={8}
                md={8}
                style={{ direction: 'rtl' }}
              >
                <span style={{ fontWeight: 'bold', paddingRight: '50px' }}>
                  مجموع پرداختی :{' '}
                </span>

                <span
                  style={{
                    color: '#FF2626',
                    paddingRight: '10px',
                    textDecoration: 'line-through',
                    textDecorationColor: 'rgba(0, 0, 0, 0.6)',
                    textDecorationWidth: '3px',
                  }}
                >
                  200000 تومان
                </span>
                <span style={{ color: '#4BB543', paddingRight: '10px' }}>
                  180000 تومان
                </span>
              </Grid>
              <Grid container item xs={4} sm={4} md={4}>
                <ButtonLEO
                  // onClick={onRegisterUser}
                  text="پرداخت"
                  textColor="#fff"
                  padd="0rem 2rem"
                  bgColor="rgb(75, 181, 67)"
                  border="none"
                  height="none"
                  bgOver="rgb(181, 23, 158)"
                  fontSize="15px"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BuyCards;
