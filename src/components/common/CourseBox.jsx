import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material';

import CSS from '../../assets/css modules/CourseBox.module.css';

import Image from './Image';
import StarRating from './StarRating';
import CourseButton from './CourseButton';
import IconWithName from './IconWithName';
import PriceTag from './PiceTag';

import CourseImage from '../../assets/image/CourseImage.jpg';
import { ReactComponent as Clockicon } from '../../assets/image/Icons/clock.svg';
import { ReactComponent as MasterIcon } from '../../assets/image/Icons/MasterIcon.svg';
import { ReactComponent as TagIcon } from '../../assets/image/Icons/PriceTag.svg';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontFamily: 'iran-yekan',
}));

class CourseBox extends React.Component {
  render() {
    // const { image , name , details , teacher , time , price , oldPrice } = this.props;

    return (
      <Item elevation={10} className={CSS.Box}>
        <Grid width={'100%'} height={'200px'}>
          <Image
            className={CSS.course_image}
            mode={'fill'}
            src={CourseImage}
            height={'200px'}
            width={'100'}
          />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          my={1}
        >
          <Grid
            item
            md={3.5}
            sm={3.5}
            xs={3.5}
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            pl={'20px'}
          >
            <StarRating value={5} />
          </Grid>
          <Grid
            item
            md={8.5}
            xs={8.5}
            sm={8.5}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            textAlign="right"
            pr={2}
          >
            <h5>دوره ی جامع ری اکت </h5>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          textAlign="right"
          px={4}
        >
          <p>
            مداد رنگی ها مشغول بودند به جز مداد به او کار نمیداد، به جز مداد
            سفید، هیچکس به او
          </p>
        </Grid>
        <Grid
          container
          columns={{ xs: 6, sm: 6, md: 6 }}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid
            item
            xs={5}
            sm={5}
            md={5}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            pl={1}
            pr={1}
          >
            <IconWithName
              name="دوازده ساعت"
              IconTag={Clockicon}
              HSize={6}
            ></IconWithName>
          </Grid>
          <Grid
            item
            xs={7}
            sm={7}
            md={7}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            textAlign="right"
            pr={1}
          >
            <IconWithName
              name="دکتر جزایری جزایری"
              IconTag={MasterIcon}
              HSize={6}
            ></IconWithName>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          textAlign="right"
          px={4}
        ></Grid>
        <Grid>
          <hr className={CSS.hr} />
        </Grid>
        <Grid>
          <Grid
            container
            columns={{ xs: 12, sm: 12, md: 12 }}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            pb={'25px'}
          >
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              pl={'10px'}
            >
              <CourseButton
                text={'مشاهده'}
                txtColor={'#FFFFFF'}
                bgColor={'#7209B7'}
                bgOver={'rgb(181, 23, 158)'}
                fontSize={'0.8rem'}
                // fontOver={'0.9rem'}
              ></CourseButton>
            </Grid>
            <Grid
              item
              xs={8}
              sm={8}
              md={8}
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              textAlign="right"
              pr={'0.5rem'}
            >
              <PriceTag
                APrice="250000 تومان"
                BPrice="180000 تومان"
                IconTag={TagIcon}
                HSize={6}
              ></PriceTag>
            </Grid>
          </Grid>
        </Grid>
      </Item>
    );
  }
}

export default CourseBox;
