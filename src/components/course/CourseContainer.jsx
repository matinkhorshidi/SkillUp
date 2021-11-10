import React from 'react';

import { Container, Grid } from '@mui/material';

import CSS from '../../assets/css modules/weblog/Categorys.module.css';

import OfferBox from './../common/OfferBox';
import CourseInfo from './CourseInfo';
import CourseDetails from './CourseDetails';
import SocialBox from './ShareBox';
import Comment from '../common/Commenting/Comment';
import RelatedCourse from '../common/RelatedContentBox';
import BlogImage from '../../assets/image/BlogImage.jpg';
import Comments from '../common/Commenting/Comments';
class CourseContainer extends React.Component {
  render() {
    return (
      <Container
        maxWidth="lg"
        className={CSS.container}
        style={{ padding: '0px' }}
      >
        <Grid
          container
          maxWidth="lg"
          columns={{ xs: 12, sm: 12, md: 12 }}
          direction="row-reverse"
          justifyContent="center"
          justifySelf="center"
          alignItems="flex-start"
          pb={2}
        >
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                px={1}
                style={{
                  position: 'sticky !important',
                  top: '101px !important',
                }}
              >
                <CourseDetails />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} py={2} px={1}>
              <SocialBox />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
            //   px={1}
            //   style={{ backgroundColor: '#4895EF' }}
          >
            <OfferBox
              name={'تخفیف کورس موجود'}
              backgrColor={'#FFB703'}
              textColor={'#fff'}
            />
            <CourseInfo
              name={'برنامه نویس پیرتر یا جوان تر؟'}
              text={
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
              }
              backgrColor={'#FFFFFF'}
              textColor={'#212529'}
            />
            <Comment
              name={'دیدگاهتان را بنویسید'}
              backgrColor={'#D1D1D1'}
              textColor={'#212529'}
            />
            <Comments
              name={'دیدگاه های شما'}
              backgrColor={'#FFFFFF'}
              textColor={'#212529'}
            />
          </Grid>
        </Grid>
        <h4 style={{ color: '#000', textAlign: 'center' }}>کورس های مرتبط</h4>
        <Grid
          container
          maxWidth="lg"
          direction="row"
          justifyContent="center"
          justifySelf="center"
          alignItems="center"
          spacing={{ xs: 3, md: 4 }}
          pt={3}
          pb={10}
        >
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <RelatedCourse
              src={BlogImage}
              name={'پروژه محور ری اکت'}
              masterName={'دکتر جزایری'}
              readTime={'دو دقیقه'}
              date={'دو ماه پیش'}
              tag={'فرانت دولوپرز'}
              TagColor={'#4895EF'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <RelatedCourse
              src={BlogImage}
              name={'پروژه محور ری اکت'}
              masterName={'دکتر جزایری'}
              readTime={'دو دقیقه'}
              date={'دو ماه پیش'}
              tag={'فرانت دولوپرز'}
              TagColor={'#4895EF'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <RelatedCourse
              src={BlogImage}
              name={'پروژه محور ری اکت'}
              masterName={'دکتر جزایری'}
              readTime={'دو دقیقه'}
              date={'دو ماه پیش'}
              tag={'فرانت دولوپرز'}
              TagColor={'#4895EF'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <RelatedCourse
              src={BlogImage}
              name={'پروژه محور ری اکت'}
              masterName={'دکتر جزایری'}
              readTime={'دو دقیقه'}
              date={'دو ماه پیش'}
              tag={'فرانت دولوپرز'}
              TagColor={'#4895EF'}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default CourseContainer;
