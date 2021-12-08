import React from 'react';

import { Container, Grid } from '@mui/material';

import CSS from '../../assets/css modules/userpanel/UserInfo.module.css';
import Button from '../common/ButtonLEO';

import { ReactComponent as Person } from '../../assets/images/Person.svg';
import { ReactComponent as idcart } from '../../assets/images/idcart.svg';
import { ReactComponent as Key } from '../../assets/images/Key.svg';
import { ReactComponent as GoogleColorfull } from '../../assets/images/GoogleColorfull.svg';
import { ReactComponent as Mail } from '../../assets/images/Mail.svg';
import { ReactComponent as RegisterIllustrator } from '../../assets/images/RegisterIllustrator.svg';
import { ReactComponent as call } from '../../assets/image/Icons/call3.svg';

// import Image from './../common/Image';

// import CourseImage from '../../assets/image/Footer5.jpg';
import Input from './../Login/Input';

class UserInfo extends React.Component {
  state = {
    user: {
      fullName: '',
      phoneNumber: '',
      email: '',
      birthDate: '',
      nationalId: '',
      password: '',
    },
  };
  handleUsernameChange = (e) => {
    const user = { ...this.state.user };
    user.fullName = e.currentTarget.value;
    this.setState({ user });
  };
  handleEmailChange = (e) => {
    const user = { ...this.state.user };
    user.email = e.currentTarget.value;
    this.setState({ user });
  };
  handlePasswordChange = (e) => {
    const user = { ...this.state.user };
    user.password = e.currentTarget.value;
    this.setState({ user });
  };
  handleNationalId = (e) => {
    const user = { ...this.state.user };
    user.nationalId = e.currentTarget.value;
    this.setState({ user });
  };
  handlePhonenum = (e) => {
    const user = { ...this.state.user };
    user.phoneNumber = e.currentTarget.value;
    this.setState({ user });
  };
  render() {
    // const { image , name , details , teacher , time , price , oldPrice } = this.props;
    const { user, backgrColor, textColor } = this.props;

    return (
      <Container
        maxWidth="lg"
        className={CSS.Box}
        style={{ backgroundColor: backgrColor, color: textColor }}
        mb={2}
        style={{ backgroundColor: 'rgb(255, 156, 29,0.8)', padding: '5px' }}
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
            <h5 style={{ padding: '0px 20px 20px 20px' }}>
              بروزرسانی اطلاعات شما
            </h5>
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
              <Grid container direction={'row-reverse'} p={6} pt={4} pb={2}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  style={{ direction: 'rtl' }}
                  pl={4}
                >
                  <Input
                    label="نام شما"
                    placeHolder={user.fullName}
                    type="text"
                    Icon={Person}
                    iconColor="#B5179E"
                    cursor="default"
                    value={this.state.user.username}
                    inputChange={this.handleUsernameChange}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  style={{ direction: 'rtl' }}
                  pr={4}
                >
                  <Input
                    label="ایمیل"
                    placeHolder={user.email}
                    type="text"
                    Icon={Mail}
                    iconColor="#B5179E"
                    cursor="default"
                    value={this.state.user.email}
                    inputChange={this.handleEmailChange}
                  />
                </Grid>
              </Grid>
              <Grid container direction={'row-reverse'} p={6} pt={0} pb={2}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  style={{ direction: 'rtl' }}
                  pl={4}
                >
                  <Input
                    label="کد ملی"
                    placeHolder={user.nationalId}
                    type="text"
                    Icon={idcart}
                    iconColor="#B5179E"
                    cursor="default"
                    value={this.state.user.nationalId}
                    inputChange={this.handleNationalId}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  style={{ direction: 'rtl' }}
                  pr={4}
                >
                  <Input
                    label="شماره موبایل"
                    placeHolder={user.phoneNumber}
                    type="text"
                    Icon={call}
                    iconColor="#B5179E"
                    cursor="default"
                    value={this.state.user.phoneNumber}
                    inputChange={this.handlePhonenum}
                  />
                </Grid>
              </Grid>
              <Grid container direction={'row-reverse'} p={6} pt={0} pb={0}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  style={{ direction: 'rtl' }}
                  pl={4}
                >
                  <Input
                    label="رمز عبور جدید"
                    placeHolder="بزرگتر از 8 کاراکتر"
                    type="password"
                    Icon={Key}
                    iconColor="#B5179E"
                    cursor="default"
                    value={this.state.user.password}
                    inputChange={this.handlePasswordChange}
                  />
                </Grid>
              </Grid>
              <Grid item mb={5} ml={6} mt={0}>
                <Button
                  // onClick={onRegisterUser}
                  text="ثبت تغیرات"
                  textColor="#fff"
                  padd="0rem 2rem"
                  bgColor="rgb(75, 181, 67)"
                  border="none"
                  bgOver="rgb(181, 23, 158)"
                  height="none"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default UserInfo;
