import React from 'react';

import { styled } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material';

import CSS from '../../assets/css modules/course/RelatedCourse.module.css';

import Image from './Image';
import IconWithName from './IconWithName';

import { ReactComponent as Clockicon } from '../../assets/image/Icons/clock.svg';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontFamily: 'iran-yekan',
  borderRadius: '10px',
}));

class RelatedCourse extends React.Component {
  render() {
    // const { image , name , details , teacher , time , price , oldPrice } = this.props;
    const { name, readTime, tag, TagColor, src } = this.props;

    return (
      <Item elevation={10} className={CSS.Box}>
        <Grid width={'100%'} height={'150px'}>
          <Image
            className={CSS.course_image}
            mode={'fill'}
            src={src}
            height={'150px'}
            width={'100'}
            imageTag={tag}
            TagColor={TagColor}
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
            md={12}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            textAlign="right"
            px={2}
            pt={1}
          >
            <h6 className={CSS.h6tex}>{name}</h6>
          </Grid>
        </Grid>
        <Grid
          container
          columns={{ xs: 12, sm: 12, md: 12 }}
          direction="row-reverse"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid
            xs={7}
            sm={7}
            md={7}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            textAlign="right"
            pr={2}
          >
            <h6 style={{ wordSpacing: '-1px' }}>علی حسنی | یک ماه قبل</h6>
          </Grid>
          <Grid
            xs={5}
            sm={5}
            md={5}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            mb={1.5}
          >
            <IconWithName
              name={readTime}
              IconTag={Clockicon}
              HSize={6}
            ></IconWithName>
          </Grid>
        </Grid>
      </Item>
    );
  }
}

export default RelatedCourse;
