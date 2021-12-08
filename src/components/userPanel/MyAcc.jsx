import React from 'react';

import { Container, Grid } from '@mui/material';

import CSS from '../../assets/css modules/userpanel/UserInfo.module.css';

import { ReactComponent as Person } from '../../assets/images/Person.svg';

// import Image from './../common/Image';

// import CourseImage from '../../assets/image/Footer5.jpg';
import Input from './../Login/Input';

const MyAcc = (props) => {
  // const { image , name , details , teacher , time , price , oldPrice } = this.props;
  const { name, text, backgrColor, textColor, user } = props;

  return (
    <Container
      maxWidth="lg"
      className={CSS.Box}
      style={{ backgroundColor: backgrColor, color: textColor }}
      mb={2}
      style={{ backgroundColor: 'rgb(181, 23, 158,0.5)', padding: '5px' }}
    >
      <Grid
        container
        columns={{ xs: 12, sm: 12, md: 12 }}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          alignItems="end"
          textAlign="right"
          p={0}
          pt={4}
        >
          <h5 style={{ padding: '0px 20px 20px 20px' }}>داشبرد شما</h5>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            style={{
              backgroundColor: '#fff',
              borderRadius: '5px',
              margin: '0px',
            }}
          >
            <Grid container direction={'row-reverse'} p={6} pt={4}>
              <Grid item xs={12} sm={12} md={6} textAlign="center">
                <p>نام : {user.fullName} </p>
              </Grid>
              <Grid item xs={12} sm={12} md={6} textAlign="center">
                <p>ایمیل : {user.email} </p>
              </Grid>
            </Grid>
            <Grid container direction={'row-reverse'} p={6} pt={0}>
              <Grid item xs={12} sm={12} md={6}>
                <p>کد ملی : {user.nationalId} </p>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <p>شماره موبایل: {user.phoneNumber} </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyAcc;
