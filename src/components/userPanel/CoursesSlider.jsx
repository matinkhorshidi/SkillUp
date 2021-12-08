import React, { Component } from 'react';

import { Grid, Container, Typography, Box } from '@mui/material';
import CourseButton from '../../components/common/CourseButton';
import SvgIcon from '../../components/common/SvgIcon';

import CoursesSlider1 from '../../assets/images/CoursesSlider1.png';
import { ReactComponent as RightArrow } from '../../assets/images/CoursesSliderRightArrow.svg';

import c from '../../assets/css modules/courses/CoursesSlider.module.css';

class CoursesSlider extends Component {
  state = {
    flag: 0,
    numberArray: [1, 2, 3],
  };
  handleClick = (arrow) => {
    const { flag, numberArray } = this.state;
    const number = numberArray.length - 1;
    if (arrow === 'right') {
      if (flag !== number) {
        const flag1 = flag + 1;
        this.setState({ flag: flag1 });
      } else {
        this.setState({ flag: 0 });
      }
    } else if (arrow === 'left') {
      if (flag !== 0) {
        const flag1 = flag - 1;
        this.setState({ flag: flag1 });
      } else {
        this.setState({ flag: 2 });
      }
    }
  };

  handleDot = (n) => {
    const { flag, numberArray } = this.state;
    if (n - 1 === flag) {
      return;
    } else {
      this.setState({ flag: n - 1 });
    }
  };

  render() {
    const { numberArray, flag } = this.state;
    return (
      <Grid className={c.all} sx={{ position: 'relative', overflow: 'hidden' }}>
        <Grid
          sx={{
            display: 'flex',
            width: '300%',
            height: '100%',
            position: 'relative',
            left: `-${this.state.flag * 100}%`,
            transition: '0.5s',
          }}
        >
          {numberArray.map(() => (
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
                <Grid className={c.mainData} item my={8}>
                  <Grid container>
                    <Grid item lg={6}>
                      <Container maxWidth="lg">
                        <Typography
                          variant="h5"
                          gutterBottom
                          color="textPrimary"
                          pt={1}
                        >
                          مهارت های جدید و یاد گیری آسان
                        </Typography>

                        <Typography
                          fontSize="0.85rem"
                          mr={2}
                          mb={8}
                          mt={2}
                          variant="body2"
                          gutterBottom
                          color="#222"
                        >
                          مداد رنگی ها مشغول بودند به جز مداد سفید. هیچ کس به او
                          کار نمی‌داد. همه می‌گفتند تو به هیچ درد نمیخوری.
                        </Typography>
                        <hr></hr>
                        <Grid container justifyContent="space-between" pt={1}>
                          <Grid item>
                            <CourseButton
                              text="مشاهده"
                              bgColor="#7209B7"
                              txtColor="#fff"
                            />
                          </Grid>
                          <Grid item pt={1.2} fontSize="0.85rem">
                            <Typography
                              variant="body2"
                              display="inline"
                              color="green"
                            >
                              100,000 تومان
                            </Typography>
                            <Typography
                              variant="body2"
                              display="inline"
                              ml={3}
                              color="red"
                              sx={{ textDecoration: 'line-through' }}
                            >
                              110,000 تومان
                            </Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </Grid>
                    <Grid item lg={6}>
                      <img src={CoursesSlider1} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item></Grid>
              </Container>
              <div className={c.cover}></div>
            </Grid>
          ))}
        </Grid>
        <Box className={c.leftArrow} onClick={() => this.handleClick('left')}>
          <SvgIcon
            Icon={RightArrow}
            size={'40px'}
            bgColor="default"
            bgOver="none"
            cursor="pointer"
          />
        </Box>
        <Box className={c.rightArrow} onClick={() => this.handleClick('right')}>
          <SvgIcon
            Icon={RightArrow}
            size={'40px'}
            bgColor="default"
            bgOver="none"
            cursor="pointer"
          />
        </Box>
        <Box className={c.dots}>
          {numberArray.map((n) => (
            <Box
              className={`${c.dot} ${n - 1 === flag ? c.dotSelected : ''}`}
              onClick={() => this.handleDot(n)}
            ></Box>
          ))}
        </Box>
      </Grid>
    );
  }
}

export default CoursesSlider;
