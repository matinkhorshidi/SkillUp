import React from 'react';
import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import { ReactComponent as Header } from '../../assets/image/Illustraitors/H.svg';
// import Header from '../../assets/image/Illustraitors/Header.svg';
import SvgIcon from './../common/SvgIcon';
import AboutUsButton from './AboutUsButton';

const AboutUsHeader = () => {
  return (
    <Grid container px={'4rem'}>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        justifyContent="center"
        alignItems="center"
        px={1}
      >
        <SvgIcon
          mystyle={{ marginTop: '-10px' }}
          Icon={Header}
          size="700px"
        ></SvgIcon>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          direction="column"
          py={'20%'}
        >
          <Grid item xs={12} sm={12} md={12} lg={12} px={8}>
            {' '}
            <h1
              style={{
                fontWeight: '600',
                fontSize: '3rem',
                color: 'rgb(66, 5, 106)',
                textShadow: '-2px 2px 10px rgb(177, 108, 222)',
              }}
            >
              اسکیلاتونو آپ کنید
            </h1>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} py={4} px={8}>
            <p>
              بسیاری از فارغ التحصیلان برای ورود به بازار پر رقابت کار در ایران
              نیاز به یادگیری مهارت های لازم دارند . یکی از بزرگترین چالش ها
              هزینه های آموزشی هست . تاپ لرن با قرار دادن بیش از 100 ها آموزش
              رایگان با اساتید حرفه ای , شیوه آموزشی نوین و قرار دادن دوره های
              مناسب برای ورود به بازار کسب و کار و البته ارائه گواهی معتبر جهت
              ارائه , را فراهم نموده است.
            </p>
            <Link to="/">
              <AboutUsButton />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutUsHeader;
