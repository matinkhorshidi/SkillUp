import React from 'react';

import { Grid, Container, Typography, Box } from '@mui/material';
import CourseButton from '../common/CourseButton';
import CSS from '../../assets/css modules/userpanel/MycourseBox.module.css';
import Image from '../common/Image';
import UserPanelScreen from './../../screens/UserPanelScreen';

class MycourseBox extends React.Component {
  render() {
    const { name, details, image } = this.props;
    const trimmeText = () => {
      let yourString = details;
      let maxLength = 100;
      let trimmedDetails = yourString.substr(0, maxLength);
      trimmedDetails = trimmedDetails.substr(
        0,
        Math.min(trimmedDetails.length, trimmedDetails.lastIndexOf(' '))
      );
      return trimmedDetails;
    };
    return (
      <Grid item>
        <Grid container direction={'row-reverse'} className={CSS.courseSec}>
          <Grid item lg={3}>
            {/* <img className={CSS.image} src={image} /> */}
            <Image
              className={CSS.image}
              mode={'fill'}
              src={image}
              height={'100%'}
              width={'100'}
            />
          </Grid>
          <Grid item lg={7} py={2} pr={2}>
            <Typography variant="p" color="textPrimary" mr={1}>
              {name}
            </Typography>
            <Typography
              mr={1}
              mb={3}
              mt={2}
              variant="body2"
              gutterBottom
              color="#222"
            >
              {trimmeText() + ' ...'}
            </Typography>
          </Grid>
          <Grid item lg={2} py={5}>
            <Grid container justifyContent="space-between" pt={1}>
              <Grid item>
                <CourseButton
                  text="مشاهده"
                  bgColor="rgb(114, 9, 183,0.2)"
                  bgOver="rgb(114, 9, 183,0.5)"
                  bgover
                  txtColor="#000"
                  fontSize="12px"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default MycourseBox;
