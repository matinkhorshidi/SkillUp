import React from 'react';
import { Container, Grid } from '@mui/material';
import CSS from '../../assets/css modules/weblog/Categorys.module.css';

import BlogInfo from './BlogInfo';
import WriterDetails from './WriterDetails';
import Comment from '../common/Commenting/Comment';
import RelatedContentBox from '../common/RelatedContentBox';
import BlogImage from '../../assets/image/BlogImage.jpg';
import WriterImage from '../../assets/image/WriterImage.jpg';
import Tags from './../common/Tags';
import Comments from './../common/Commenting/Comments';

class BlogContainer extends React.Component {
  scrollToComment = () => {
    const BlogComment = document.getElementById('blog123Comment');
    const rect = BlogComment.getBoundingClientRect();
    const position = rect.top + window.scrollY;
    window.scrollTo(0, position - 100);
  };
  render() {
    return (
      <Container
        maxWidth="lg"
        className={CSS.container}
        style={{ padding: '0px' }}
      >
        <Grid
          container
          columns={{ xs: 12, sm: 12, md: 12 }}
          direction="row-reverse"
          justifyContent="center"
          justifySelf="center"
          alignItems="flex-start"
          py={3}
        >
          {/*!----------------------------------------- right Grid  */}
          <Grid item xs={12} sm={12} md={2.5} lg={2.5}>
            <Grid px={1}>
              <WriterDetails
                writerName={'علی حسینی'}
                writerDetails={'محقق و برنامه نویس'}
                WriterImage={WriterImage}
                scrollToComment={this.scrollToComment}
              />
            </Grid>
          </Grid>
          {/*!----------------------------------------- Left Grid  */}
          <Grid item xs={12} sm={12} md={9.5} lg={9.5}>
            <BlogInfo
              name={'برنامه نویس پیرتر یا جوان تر؟'}
              text={
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
              }
              textColor={'#212529'}
            />
            <BlogInfo
              name={'سخن آخر'}
              text={
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
              }
              textColor={'#212529'}
            />
            <Tags />
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
        <h4 style={{ color: '#000', textAlign: 'center' }}>
          نوشته های های مرتبط
        </h4>
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
            <RelatedContentBox
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
            <RelatedContentBox
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
            <RelatedContentBox
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
            <RelatedContentBox
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

export default BlogContainer;
