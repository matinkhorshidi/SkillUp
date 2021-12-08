import React, { Component } from 'react';

import CoursesLanding from '../components/Landing/CoursesLanding';
import BlogsLanding from '../components/Landing/BlogsLanding';
import FirstSlider from '../components/Landing/FirstSlider';
import MastersSlider from '../components/Landing/MastersSlider';
import CoursesSlider from './../components/courses/CoursesSlider';
import AboutUsHeader from './../components/aboutUs/AboutUsHeader';
import { Features } from './../components/aboutUs/Features';
import { Gallery } from './../components/aboutUs/Gallery';
import { Team } from './../components/aboutUs/Team';
import { About } from './../components/aboutUs/About';

const AboutUsScreen = () => {
  const AboutArray = {
    paragraph:
      'ما با برگزاری بیش از 100 ها کلاس حضوری و آموزش به هزاران دانشجو به صورت عمومی و برگزاری دوره های خصوصی با نهاد هایی نظیر : سایپا یدک , منطقه آزاد قشم , گروه پلیمر بوشهر , ایران خودرو ,   گسترش انفورماتیک ایرانیان ,   کشت و صنعت رژین تاک  تجربه فراوانی در حوزه آموزش داریم .',
    Why: [
      ' با گذراندن دوره های ویژه مدرک متعبر دریافت نمایید',
      ' رزومه تایید شده اساتید را مطالعه نمایید',
      ' از بیش از 100 ها ویدئو رایگان استفاده نمایید',
      'پرداخت آسان در سایت',
    ],
    Why2: [
      'پشتیبانی از مشکلات فنی',
      'پشتیبانی علمی توسط اساتید',
      'مشاهده سر فصل های آموزشی',
      'کیفیت فوق العاده صدا و تصویر',
    ],
  };
  const GalleryArray = [
    {
      title: ' تصویر زیبا لپتاپ اپل ',
      largeImage: 'img/portfolio/01-large.jpg',
      smallImage: 'img/portfolio/01-small.jpg',
    },
    {
      title: 'تصویر زیبا لپتاپ ',
      largeImage: 'img/portfolio/02-large.jpg',
      smallImage: 'img/portfolio/02-small.jpg',
    },
    {
      title: 'تصویر زیبا تبلت ',
      largeImage: 'img/portfolio/03-large.jpg',
      smallImage: 'img/portfolio/03-small.jpg',
    },
    {
      title: 'تصویر زیبا لپتاپ ',
      largeImage: 'img/portfolio/04-large.jpg',
      smallImage: 'img/portfolio/04-small.jpg',
    },
    {
      title: 'تصویر زیباتر لپتاپ ',
      largeImage: 'img/portfolio/05-large.jpg',
      smallImage: 'img/portfolio/05-small.jpg',
    },
    {
      title: 'تصویر متوسط گوشی ',
      largeImage: 'img/portfolio/06-large.jpg',
      smallImage: 'img/portfolio/06-small.jpg',
    },
    {
      title: 'تصویر زیبا لپتاپ ',
      largeImage: 'img/portfolio/07-large.jpg',
      smallImage: 'img/portfolio/07-small.jpg',
    },
    {
      title: 'تصویر زیبا لپتاپ ',
      largeImage: 'img/portfolio/08-large.jpg',
      smallImage: 'img/portfolio/08-small.jpg',
    },
    {
      title: 'تصویر زیبا لپتاپ ',
      largeImage: 'img/portfolio/09-large.jpg',
      smallImage: 'img/portfolio/09-small.jpg',
    },
  ];
  const TeamArray = [
    {
      img: 'img/team/01.jpg',
      name: 'امیر قاسمی',
      job: 'مجری',
    },
    {
      img: 'img/team/02.jpg',
      name: 'علیرضا حقیقی',
      job: 'گلر',
    },
    {
      img: 'img/team/03.jpg',
      name: 'حاج خانم',
      job: 'مدیر بخش',
    },
    {
      img: 'img/team/04.jpg',
      name: 'کارولینای شمالی',
      job: 'یسری کارا',
    },
  ];

  return (
    <div>
      <AboutUsHeader />
      <About data={AboutArray} />
      <Gallery data={GalleryArray} />
      <Team data={TeamArray} />
    </div>
  );
};

export default AboutUsScreen;
