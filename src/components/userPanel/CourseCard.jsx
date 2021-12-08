import React from 'react';

import { Grid, Container, Typography, Box } from '@mui/material';
import CourseButton from '../common/CourseButton';
import CSS from '../../assets/css modules/userpanel/MycourseBox.module.css';
import Image from '../common/Image';
import UserPanelScreen from './../../screens/UserPanelScreen';
import ButtonLEO from './../common/ButtonLEO';

class CourseCard extends React.Component {
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
            <Grid item pt={1.2} fontSize="0.85rem">
              <p
                style={{
                  margin: '0px',
                  fontSize: '12px',
                  color: '#FF2626',
                  textDecoration: 'line-through',
                  textDecorationColor: 'rgba(0, 0, 0, 0.6)',
                  textDecorationWidth: '3px',
                }}
              >
                98000 تومان
              </p>
              <p
                style={{
                  margin: '0px',
                  fontSize: '15px',
                  color: '#4BB543',
                  fontWeight: 'bold',
                }}
              >
                100000 تومان
              </p>
            </Grid>
          </Grid>

          <Grid container item lg={2} pb={2} direction={'column-reverse'}>
            <Grid container justifyContent="space-between">
              <CourseButton
                text="حذف"
                bgColor="rgba(209, 26, 42, 0.8)"
                bgOver="rgba(209, 26, 42)"
                txtColor="#fff"
                fontSize="12px"
                height="none"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default CourseCard;
