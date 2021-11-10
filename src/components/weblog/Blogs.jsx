import React from 'react';

import { Container, Grid } from '@mui/material';

import BlogBox from '../common/BlogBox';
import ReadMoreButton from './../common/ReadMoreButton';

import BlogImage from '../../assets/image/BlogImage.jpg';
import BlogImage2 from '../../assets/image/BlogImage2.jpg';
import BlogImage3 from '../../assets/image/BlogImage3.jpg';
import BlogImage4 from '../../assets/image/BlogImage4.jpg';
import BlogImage5 from '../../assets/image/BlogImage5.jpg';
import BlogImage6 from '../../assets/image/BlogImage6.webp';
import BlogImage7 from '../../assets/image/BlogImage7.jfif';
import BlogImage8 from '../../assets/image/BlogImage8.jpg';
import BlogImage9 from '../../assets/image/BlogImage9.jpg';

class Blogs extends React.Component {
  render() {
    return (
      <Container maxWidth="lg" style={{ paddingBottom: '2rem' }}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* {Array.from(Array(BlogsNum)).map((_, index) => (
                      ))} */}

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <BlogBox
              src={BlogImage}
              name={' پر درآمد ترین زبان های برنامه نویسی در سال 2021'}
              details={
                'مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند :'
              }
              readTime={'دو دقیقه'}
              date={'دو ماه پیش'}
              masterName={'دکتر جزایری'}
              tag={'فرانت دولوپرز'}
              TagColor={'#4895EF'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <BlogBox
              src={BlogImage2}
              name={' طراحی سایت با ادوب xd سال 2021 '}
              details={
                'مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند :'
              }
              readTime={'دو دقیقه'}
              date={'دو ماه پیش'}
              masterName={'دکتر جزایری'}
              tag={'طراحی و یو آی'}
              TagColor={'#DA3033'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <BlogBox
              src={BlogImage3}
              name={' برنامه نویسی پایتن از صفر با من '}
              details={
                'مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند :'
              }
              readTime={'دو دقیقه'}
              date={'دو ماه پیش'}
              masterName={'دکتر جزایری'}
              tag={'برنامه نویسی'}
              TagColor={'#FF9C1D'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <BlogBox
              src={BlogImage4}
              name={'آموزش کار با گوگل کنسول ابتدایی'}
              details={
                'مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند :'
              }
              readTime={'دو دقیقه'}
              date={'دو ماه پیش'}
              masterName={'دکتر جزایری'}
              tag={'تولید محتوی و سئو'}
              TagColor={'#8FD01D'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <BlogBox
              src={BlogImage5}
              name={' پر درآمد ترین زبان های برنامه نویسی در سال 2021'}
              details={
                'مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند :'
              }
              readTime={'دو دقیقه'}
              date={'دو ماه پیش'}
              masterName={'دکتر جزایری'}
              tag={'فرانت دولوپرز'}
              TagColor={'#4895EF'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <BlogBox
              src={BlogImage6}
              name={' طراحی سایت با ادوب xd سال 2021 '}
              details={
                'مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند :'
              }
              readTime={'دو دقیقه'}
              date={'دو ماه پیش'}
              masterName={'دکتر جزایری'}
              tag={'طراحی و یو آی'}
              TagColor={'#DA3033'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <BlogBox
              src={BlogImage7}
              name={' برنامه نویسی پایتن از صفر با من '}
              details={
                'مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند :'
              }
              readTime={'دو دقیقه'}
              date={'دو ماه پیش'}
              masterName={'دکتر جزایری'}
              tag={'برنامه نویسی'}
              TagColor={'#FF9C1D'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <BlogBox
              src={BlogImage8}
              name={'آموزش کار با گوگل کنسول ابتدایی'}
              details={
                'مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند :'
              }
              readTime={'دو دقیقه'}
              date={'دو ماه پیش'}
              masterName={'دکتر جزایری'}
              tag={'تولید محتوی و سئو'}
              TagColor={'#8FD01D'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <BlogBox
              src={BlogImage9}
              name={'آموزش کار با گوگل کنسول ابتدایی'}
              details={
                'مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند :'
              }
              readTime={'دو دقیقه'}
              date={'دو ماه پیش'}
              masterName={'دکتر جزایری'}
              tag={'تولید محتوی و سئو'}
              TagColor={'#8FD01D'}
            />
          </Grid>
        </Grid>
        <div
          style={{
            margin: '2rem auto',
          }}
        >
          <ReadMoreButton
            text={'نمایش بیشتر'}
            bgColor={'rgb(211, 172, 237)'}
            txtColor={'#3A0CA3'}
            bgOver={'rgb(190, 150, 200)'}
            fontSize={'1rem'}
            // fontOver={'0.9rem'}
          />
        </div>
      </Container>
    );
  }
}

export default Blogs;
