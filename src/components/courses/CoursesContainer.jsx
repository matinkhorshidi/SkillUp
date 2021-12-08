import React from 'react';

import { Container, Grid } from '@mui/material';

import CSS from '../../assets/css modules/weblog/Categorys.module.css';

import CoursesSideBar from './CoursesSideBar';

import Courses from './Courses';
class CoursesContainer extends React.Component {
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
          py={2}
        >
          <Grid item xs={12} sm={12} md={3} lg={3}>
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
                <CoursesSideBar />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={9}
            lg={9}
            //   px={1}
            //   style={{ backgroundColor: '#4895EF' }}
          >
            {/* <CourseInfo
              name={'برنامه نویس پیرتر یا جوان تر؟'}
              text={
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
              }
              backgrColor={'#FFFFFF'}
              textColor={'#212529'}
            /> */}
            <Courses />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default CoursesContainer;
