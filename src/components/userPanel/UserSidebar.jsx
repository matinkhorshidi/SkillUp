import React from 'react';
import { Link } from 'react-router-dom';
import { clearStorage, getItem } from '../../core/services/storage/storage';
import { useHistory } from 'react-router';

import { Grid } from '@mui/material';

import CSS from '../../assets/css modules/userpanel/userSidebar.module.css';

import Image from './../common/Image';

import BackGroundUser from '../../assets/image/BackGroundUser.jpg';
import UserImage from '../../assets/image/WriterImage.jpg';
import BuyCourseButton from './../course/BuyCourseButton';

const UserSidebar = (props) => {
  const history = useHistory();
  const onExitClicked = () => {
    history.push('/');
    clearStorage();
    window.location.reload();
  };

  return (
    <Grid className={CSS.Box} ml={1} pr={0}>
      <Grid width={'100%'}>
        <Image
          className={CSS.course_image}
          mode={'fill'}
          src={BackGroundUser}
          height={'180px'}
          width={'100'}
        />
        <Grid
          container
          width={'100%'}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          direction={'column'}
          mt={'-200px'}
          mb={2}
        >
          <Image
            className={CSS.userImage}
            mode={'fill'}
            src={UserImage}
            height={'200px'}
            width={'200px'}
            borderR={'50%'}
          />
        </Grid>
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
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          px={4}
        >
          <h5>متین خورشیدی</h5>
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
        pr={5}
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
          py={1}
        >
          <Link className={CSS.Link} to="/Dashboard/UserInfo">
            <h6> تغییر پروفایل</h6>
          </Link>
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
          py={1}
        >
          <Link className={CSS.Link} to="/Dashboard/Mycourses">
            <h6> دوره های من</h6>
          </Link>
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
          py={1}
        >
          <Link className={CSS.Link} to="/Dashboard/Myfavs">
            <h6> مطالب مورد علاقه شما</h6>
          </Link>
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
          py={1}
        >
          <Link className={CSS.Link} to="/Dashboard/BuyCards">
            <h6> سبد خرید</h6>
          </Link>
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
              text={'خروج'}
              txtColor={'#FFFFFF'}
              bgColor={'rgb(209, 26, 42 , 0.9)'}
              bgOver={'rgb(181, 23, 158)'}
              fontSize={'1rem'}
              onClick={onExitClicked}
            ></BuyCourseButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserSidebar;
