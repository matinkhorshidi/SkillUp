import React from 'react';

import { styled } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material';

import CSS from '../../assets/css modules/BlogBox.module.css';

import Image from './Image';
import CourseButton from './CourseButton';
import IconWithName from './IconWithName';
import Like from './Like';

import { ReactComponent as Clockicon } from '../../assets/image/Icons/clock.svg';
import { ReactComponent as MasterIcon } from '../../assets/image/Icons/MasterIcon.svg';
import { ReactComponent as CalendarIcon } from '../../assets/image/Icons/calendar.svg';
import { ReactComponent as Idk } from '../../assets/image/Icons/idk.svg';
import { ReactComponent as ShareIcon } from '../../assets/image/Icons/share.svg';
import { useHistory } from 'react-router';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontFamily: 'iran-yekan',
}));

const BlogBox = (props) => {
  // const { image , name , details , teacher , time , price , oldPrice } = this.props;
  const { name, readTime, date, masterName, tag, TagColor, src } = props;

  const trimmeText = () => {
    let yourString = props.details;
    let maxLength = 200;
    let trimmedDetails = yourString.substr(0, maxLength);
    trimmedDetails = trimmedDetails.substr(
      0,
      Math.min(trimmedDetails.length, trimmedDetails.lastIndexOf(' '))
    );
    return trimmedDetails;
  };

  const history = useHistory();

  const onClick = () => {
    history.push(`/Blog/${name}`);
  };
  return (
    <Item elevation={10} className={CSS.Box}>
      <Grid width={'100%'} height={'200px'}>
        <Image
          className={CSS.course_image}
          mode={'fill'}
          src={src}
          height={'200px'}
          width={'100'}
          imageTag={tag}
          TagColor={TagColor}
        />
      </Grid>
      <Grid
        item
        md={12}
        px={2.5}
        pt={1.5}
        justifyContent="flex-end"
        alignItems="center"
        textAlign="right"
        my={1}
        mb={2}
      >
        <h6 className={CSS.h6tex}>{name}</h6>
      </Grid>
      <Grid px={2.5}>
        <p>{trimmeText()} </p>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          pl={1}
          pr={1}
        >
          <IconWithName
            name={readTime}
            IconTag={Clockicon}
            HSize={6}
          ></IconWithName>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          textAlign="right"
          pr={1}
        >
          <IconWithName
            name={date}
            IconTag={CalendarIcon}
            HSize={6}
          ></IconWithName>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          textAlign="right"
          pr={1}
        >
          <IconWithName
            name={masterName}
            IconTag={MasterIcon}
            HSize={6}
          ></IconWithName>
        </Grid>
      </Grid>
      <Grid>
        <hr className={CSS.hr} />
      </Grid>
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
          container
          xs={6}
          sm={6}
          md={6}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          pl={'10px'}
        >
          <CourseButton
            onClick={onClick}
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
          xs={6}
          sm={6}
          md={6}
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          textAlign="right"
          pr={'1.5rem'}
        >
          <Idk className={CSS.marginx}></Idk>
          <ShareIcon className={CSS.marginx}></ShareIcon>
          <Like />
        </Grid>
      </Grid>
    </Item>
  );
};

export default BlogBox;
