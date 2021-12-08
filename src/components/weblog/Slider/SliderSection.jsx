import React from 'react';

import { Grid, Container, Typography, Box } from '@mui/material';
import CourseButton from '../../common/CourseButton';
import CSS from '../../../assets/css modules/courses/CoursesSlider.module.css';
import Image from './../../common/Image';

class SliderSection extends React.Component {
  render() {
    const { name, details, image } = this.props;
    const trimmeText = () => {
      let yourString = details;
      let maxLength = 200;
      let trimmedDetails = yourString.substr(0, maxLength);
      trimmedDetails = trimmedDetails.substr(
        0,
        Math.min(trimmedDetails.length, trimmedDetails.lastIndexOf(' '))
      );
      return trimmedDetails;
    };
    return (
      <Grid
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <Container
          direction="column"
          maxWidth="md"
          sx={{ position: 'relative', zIndex: '1' }}
        >
          <Grid className={CSS.mainData} item my={8}>
            <Grid container direction={'row-reverse'}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                {/* <img className={CSS.image} src={image} /> */}
                <Image
                  className={CSS.image}
                  mode={'fill'}
                  src={image}
                  height={'250px'}
                  width={'100'}
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12} py={5}>
                <Container maxWidth="lg">
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="textPrimary"
                    pt={1}
                    mr={1}
                  >
                    {name}
                  </Typography>
                  <Typography
                    fontSize="1rem"
                    mr={1}
                    mb={3}
                    mt={2}
                    variant="body2"
                    gutterBottom
                    color="#222"
                  >
                    {trimmeText() + ' ...'}
                  </Typography>
                  <Grid container justifyContent="space-between" pt={1}>
                    <Grid item>
                      <CourseButton
                        text="مشاهده"
                        bgColor="#7209B7"
                        txtColor="#fff"
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <div
          className={CSS.cover}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </Grid>
    );
  }
}

export default SliderSection;
