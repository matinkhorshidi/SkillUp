import React from 'react';

import { Container, Grid } from '@mui/material';

import CourseImage from '../../assets/image/CourseImage.jpg';

import CourseBox from '../common/CourseBox';
import DeviderWithName from '../common/DeviderWithName';
import { GetTerm } from '../../core/services/api/get-term.api';
import { getCourse } from '../../core/services/api/courses/get-course.api';
import { setCourse } from '../../core/services/api/courses/set-course.api';
import { deleteCourse } from '../../core/services/api/courses/delete-course.api';
import { getNews } from '../../core/services/api/news/get-news.api';
import { setNews } from '../../core/services/api/news/set-news.api';

import BlogImage from '../../assets/image/BlogImage.jpg';
import BlogImage2 from '../../assets/image/BlogImage2.jpg';
import BlogImage3 from '../../assets/image/BlogImage3.jpg';
import BlogImage4 from '../../assets/image/BlogImage4.jpg';
import BlogImage5 from '../../assets/image/BlogImage5.jpg';
import BlogImage6 from '../../assets/image/BlogImage6.webp';
import BlogImage7 from '../../assets/image/BlogImage7.jfif';
import BlogImage8 from '../../assets/image/BlogImage8.jpg';
import BlogImage9 from '../../assets/image/BlogImage9.jpg';
import MoreButton from './../common/MoreButton';

class CoursesLanding extends React.Component {
  async componentDidMount() {
    // setCourse(course2);
    // deleteCourse('61968c77ba48f80023712dd7');
    // is loading trrue
    // await getCourse().then
    // is loading false
  }
  render() {
    return (
      <Container id="courses" maxWidth="lg">
        <DeviderWithName name="کورس ها" />
        <Grid container columns={{ xs: 12, sm: 12, md: 12 }} pb={5}>
          <Grid item xs={12} sm={6} md={4} p={2}>
            <CourseBox
              name=" برنامه نویسی پایتون"
              details="در این آموزش قصد داریم پایتون را از پایه آموزش دهیم و سعی می کنیم تمام مطالب مقدماتی لازم برای برنامه نویسی با پایتون را پوشش دهیم. چرا که برای انجام هر کاری با پایتون، نیازمند آشنایی با دانش مقدماتی و نحوه برنامه نویسی با پایتون هستیم. مخاطبان این آموزش نیاز به دانش قبلی از پایتون ندارند و سعی می شود تمام مطالب لازم در همین آموزش بیان شود. در پایان این آموزش شما قادر خواهید بود به راحتی با پایتون برنامه نویسی کنید و مسیر مورد علاقه خود را برای ادامه کار با پایتون انتخاب کنید."
              master="پژمان اقبالی  "
              time="۷ ساعت و ۵۱ دقیقه"
              tag=""
              TagColor=""
              src={CourseImage}
              realprice="۷۰,۰۰۰"
              offprice="۱۰۰,۰۰۰"
              rate="2"
              tag={'برنامه نویسی'}
              TagColor={'#FF9C1D'}
              url={'/Courses/Programing'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} p={2}>
            <CourseBox
              name=" برنامه نویسی پایتون"
              details="در این آموزش قصد داریم پایتون را از پایه آموزش دهیم و سعی می کنیم تمام مطالب مقدماتی لازم برای برنامه نویسی با پایتون را پوشش دهیم. چرا که برای انجام هر کاری با پایتون، نیازمند آشنایی با دانش مقدماتی و نحوه برنامه نویسی با پایتون هستیم. مخاطبان این آموزش نیاز به دانش قبلی از پایتون ندارند و سعی می شود تمام مطالب لازم در همین آموزش بیان شود. در پایان این آموزش شما قادر خواهید بود به راحتی با پایتون برنامه نویسی کنید و مسیر مورد علاقه خود را برای ادامه کار با پایتون انتخاب کنید."
              master="دکتر جزایری"
              time="۷ ساعت و ۵۱ دقیقه"
              TagColor=""
              src={BlogImage}
              realprice="۷۰,۰۰۰"
              offprice="۱۰۰,۰۰۰"
              rate="2"
              tag={'طراحی و یو آی'}
              TagColor={'#DA3033'}
              url={'/Courses/UiUx'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} p={2}>
            <CourseBox
              name="آموزش کار با گوگل کنسول ابتدایی"
              details="در این آموزش قصد داریم پایتون را از پایه آموزش دهیم و سعی می کنیم تمام مطالب مقدماتی لازم برای برنامه نویسی با پایتون را پوشش دهیم. چرا که برای انجام هر کاری با پایتون، نیازمند آشنایی با دانش مقدماتی و نحوه برنامه نویسی با پایتون هستیم. مخاطبان این آموزش نیاز به دانش قبلی از پایتون ندارند و سعی می شود تمام مطالب لازم در همین آموزش بیان شود. در پایان این آموزش شما قادر خواهید بود به راحتی با پایتون برنامه نویسی کنید و مسیر مورد علاقه خود را برای ادامه کار با پایتون انتخاب کنید."
              master="دکتر جزایری"
              time="۷ ساعت و ۵۱ دقیقه"
              tag=""
              TagColor=""
              src={BlogImage7}
              realprice="۷۰,۰۰۰"
              offprice="۱۰۰,۰۰۰"
              rate="2"
              tag={'تولید محتوی و سئو'}
              TagColor={'#8FD01D'}
              url={'/Courses/CcSeo'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} p={2}>
            <CourseBox
              name="کورس VueJS"
              details="در این آموزش قصد داریم پایتون را از پایه آموزش دهیم و سعی می کنیم تمام مطالب مقدماتی لازم برای برنامه نویسی با پایتون را پوشش دهیم. چرا که برای انجام هر کاری با پایتون، نیازمند آشنایی با دانش مقدماتی و نحوه برنامه نویسی با پایتون هستیم. مخاطبان این آموزش نیاز به دانش قبلی از پایتون ندارند و سعی می شود تمام مطالب لازم در همین آموزش بیان شود. در پایان این آموزش شما قادر خواهید بود به راحتی با پایتون برنامه نویسی کنید و مسیر مورد علاقه خود را برای ادامه کار با پایتون انتخاب کنید."
              master="دکتر جزایری"
              time="۷ ساعت و ۵۱ دقیقه"
              tag=""
              TagColor=""
              src={BlogImage3}
              realprice="۷۰,۰۰۰"
              offprice="۱۰۰,۰۰۰"
              rate="2"
              tag={'فرانت دولوپرز'}
              TagColor={'#4895EF'}
              url={'/Courses/FrontDevs'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} p={2}>
            <CourseBox
              name=" برنامه نویسی پایتون"
              details="در این آموزش قصد داریم پایتون را از پایه آموزش دهیم و سعی می کنیم تمام مطالب مقدماتی لازم برای برنامه نویسی با پایتون را پوشش دهیم. چرا که برای انجام هر کاری با پایتون، نیازمند آشنایی با دانش مقدماتی و نحوه برنامه نویسی با پایتون هستیم. مخاطبان این آموزش نیاز به دانش قبلی از پایتون ندارند و سعی می شود تمام مطالب لازم در همین آموزش بیان شود. در پایان این آموزش شما قادر خواهید بود به راحتی با پایتون برنامه نویسی کنید و مسیر مورد علاقه خود را برای ادامه کار با پایتون انتخاب کنید."
              master="پژمان اقبالی شمس آبادی"
              time="۷ ساعت و ۵۱ دقیقه"
              tag=""
              TagColor=""
              src={BlogImage6}
              realprice="۷۰,۰۰۰"
              offprice="۱۰۰,۰۰۰"
              rate="2"
              tag={'برنامه نویسی'}
              TagColor={'#FF9C1D'}
              url={'/Courses/Programing'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} p={2}>
            <CourseBox
              name=" برنامه نویسی پایتون"
              details="در این آموزش قصد داریم پایتون را از پایه آموزش دهیم و سعی می کنیم تمام مطالب مقدماتی لازم برای برنامه نویسی با پایتون را پوشش دهیم. چرا که برای انجام هر کاری با پایتون، نیازمند آشنایی با دانش مقدماتی و نحوه برنامه نویسی با پایتون هستیم. مخاطبان این آموزش نیاز به دانش قبلی از پایتون ندارند و سعی می شود تمام مطالب لازم در همین آموزش بیان شود. در پایان این آموزش شما قادر خواهید بود به راحتی با پایتون برنامه نویسی کنید و مسیر مورد علاقه خود را برای ادامه کار با پایتون انتخاب کنید."
              master="دکتر جزایری"
              time="۷ ساعت و ۵۱ دقیقه"
              tag=""
              TagColor=""
              src={BlogImage5}
              realprice="۷۰,۰۰۰"
              offprice="۱۰۰,۰۰۰"
              rate="2"
              tag={'طراحی و یو آی'}
              TagColor={'#DA3033'}
              url={'/Courses/UiUx'}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default CoursesLanding;
