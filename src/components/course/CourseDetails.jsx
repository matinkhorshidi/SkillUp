import React from 'react';

import { Grid } from '@mui/material';

import CSS from '../../assets/css modules/course/CourseDetails.module.css';

import Image from '../common/Image';
import IconWithName from '../common/IconWithName';
import BuyCourseButton from './BuyCourseButton';

import CourseImage from '../../assets/image/CourseImage.jpg';
import { ReactComponent as Clockicon } from '../../assets/image/Icons/clock2.svg';
import { ReactComponent as MasterIcon } from '../../assets/image/Icons/MasterIcon.svg';
import { ReactComponent as video } from '../../assets/image/Icons/video.svg';
import { ReactComponent as gear } from '../../assets/image/Icons/gear.svg';
import { ReactComponent as layer } from '../../assets/image/Icons/layer.svg';
import { ReactComponent as tag } from '../../assets/image/Icons/tag.svg';

class CourseDetails extends React.Component {
  render() {
    // const { image , name , details , teacher , time , price , oldPrice } = this.props;

    return (
      <Grid className={CSS.Box} ml={1} pr={0}>
        <Grid width={'100%'} height={'200px'}>
          <Image
            className={CSS.course_image}
            mode={'fill'}
            src={CourseImage}
            height={'180px'}
            width={'100'}
          />
        </Grid>
        <Grid
          container
          columns={{ xs: 6, sm: 6, md: 6 }}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid
            item
            md={12}
            xs={12}
            sm={12}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            textAlign="right"
            px={4}
          >
            <h5>دوره ی جامع ری اکت </h5>
          </Grid>
        </Grid>
        <Grid>
          <hr className={CSS.hr} />
        </Grid>

        <Grid
          container
          columns={{ xs: 6, sm: 6, md: 6 }}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid
            xs={12}
            sm={12}
            md={12}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            textAlign="right"
            pr={4}
          >
            <IconWithName
              name="مدرس دوره : دکتر جزایری جزایری"
              IconTag={MasterIcon}
              HSize={6}
              bgColor={'#3A0CA3'}
            ></IconWithName>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={12}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            textAlign="right"
            pr={4}
          >
            <IconWithName
              name="تعداد ویدیو ها : 68 عدد"
              IconTag={video}
              HSize={6}
              bgColor={'#3A0CA3'}
              svgstyle={{ stroke: 'none' }}
            ></IconWithName>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={12}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            pr={4}
          >
            <IconWithName
              name="مدت زمان دوره : دوازده ساعت"
              IconTag={Clockicon}
              HSize={6}
              bgColor={'#3A0CA3'}
            ></IconWithName>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={12}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            pr={4}
          >
            <IconWithName
              name="وضعیت دوره : در دست ساخت"
              IconTag={gear}
              HSize={6}
              bgColor={'#3A0CA3'}
            ></IconWithName>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={12}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            pr={4}
          >
            <IconWithName
              name="سطح دوره : مقدماتی مایل به بالا"
              IconTag={layer}
              HSize={6}
              bgColor={'#3A0CA3'}
            ></IconWithName>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={12}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            pr={4}
          >
            <IconWithName
              name=" قیمت دوره : 10000 تومان "
              IconTag={tag}
              HSize={5}
              iconSize={'27px'}
            ></IconWithName>
          </Grid>
        </Grid>

        <Grid>
          <Grid
            container
            columns={{ xs: 12, sm: 12, md: 12 }}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            py={1}
          >
            <Grid
              xs={12}
              sm={12}
              md={12}
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <BuyCourseButton
                text={'ثبت نام در دوره'}
                txtColor={'#FFFFFF'}
                bgColor={'#4BB543'}
                bgOver={'rgb(181, 23, 158)'}
                fontSize={'1rem'}
              ></BuyCourseButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default CourseDetails;
