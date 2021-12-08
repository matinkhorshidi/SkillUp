import React from 'react';
import { Grid } from '@mui/material';
import { useTheme, useMediaQuery } from '@material-ui/core';
import { useHistory } from 'react-router';

import CSS from '../../assets/css modules/header/Header.module.css';
import Logo from '../../assets/image/Skill-logo.png';
// import Logo from '../../assets/image/Skill-logo-black.png';

import NavMenu from './NavMenu';
import LogedInButton from './LogedInButton';
import DropDownMenu from './DropDownMenu';
import LoginButton from './LoginButton';

import { clearStorage, getItem } from '../../core/services/storage/storage';
import Image from './../common/Image';

const Header = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const logedin = getItem('token');
  const User = JSON.parse(getItem('user'));

  const history = useHistory();
  const onExitClicked = () => {
    history.push('/');
    clearStorage();
    window.location.reload();
  };

  return (
    <Grid
      className={CSS.maincontainer}
      container
      columns={{ md: 20, sm: 20, xs: 20 }}
    >
      <Grid
        item
        md={5}
        sm={10}
        xs={10}
        container
        textAlign={'center'}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid
          item
          md={20}
          sm={20}
          xs={20}
          container
          justifyContent={'flex-start'}
          textAlign={'center'}
          justifyItems={'center'}
          px={'3rem'}
        >
          {isMobile ? (
            <DropDownMenu
              text={User.fullName}
              userLogedIn={logedin}
              onExitClicked={onExitClicked}
              onOpenOverlayout={() => props.onOpenOverlayout()}
            />
          ) : logedin ? (
            <LogedInButton
              text={User.fullName}
              txtColor={'#FFFFFF'}
              bgColor={'#7209B7'}
              bgOver={'rgb(181, 23, 158)'}
              fontSize={'1rem'}
              borderR={'4px'}
              onExitClicked={onExitClicked}
            />
          ) : (
            <LoginButton
              text={'ورود / ثبت نام'}
              txtColor={'#FFFFFF'}
              bgColor={'#7209B7'}
              bgOver={'rgb(181, 23, 158)'}
              fontSize={'1rem'}
              borderR={'4px'}
              onOpenOverlayout={() => props.onOpenOverlayout()}
            />
          )}
        </Grid>
      </Grid>
      <Grid
        item
        container
        md={10}
        sm={2}
        xs={2}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid
          item
          container
          md={20}
          sm={20}
          xs={20}
          justifyContent={'center'}
          textAlign={'center'}
          justifyItems={'center'}
          pt={'1rem'}
        >
          {isMobile ? <div></div> : <NavMenu />}
        </Grid>
      </Grid>
      <Grid
        item
        container
        md={5}
        sm={8}
        xs={8}
        direction="row"
        justifyContent="center"
        alignItems="center"
        px={'3rem'}
      >
        <Grid
          item
          container
          md={20}
          sm={20}
          xs={20}
          justifyContent={'flex-end'}
          textAlign={'center'}
          justifyItems={'center'}
        >
          <Image
            className={CSS.course_image}
            mode={'contain'}
            src={Logo}
            height={'80px'}
            width={'100%'}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
