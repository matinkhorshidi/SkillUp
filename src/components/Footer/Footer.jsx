import React from 'react';

import { Container, Grid } from '@mui/material';

import CSS from '../../assets/css modules/Footer.module.css';

import FooterMenu from './FooterMenu';
import SocialIcons from './SocialIcons';
import EmailInput from './EmailInput';

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={CSS.footer}>
          <Container maxWidth="md">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              mt={'4rem'}
              textAlign={'center'}
            >
              <Grid item xs={12} sm={4} md={3}>
                <FooterMenu
                  header={'درباره ما'}
                  menu={[
                    'لورم ایبسوم متن ساختگی',
                    'چه ندانم های بسیار است',
                    'ما در این سایت آره',
                  ]}
                ></FooterMenu>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <FooterMenu
                  header={'پشتیبانی'}
                  menu={[
                    'لورم ایبسوم متن ساختگی',
                    'چه ندانم های بسیار است',
                    'ما در این سایت آره',
                  ]}
                ></FooterMenu>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <FooterMenu
                  header={'ارتباط با ما'}
                  menu={[
                    'لورم ایبسوم متن ساختگی',
                    'چه ندانم های بسیار است',
                    'ما در این سایت آره',
                  ]}
                ></FooterMenu>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <FooterMenu
                  header={'دسترسی سریع'}
                  menu={[
                    'لورم ایبسوم متن ساختگی',
                    'چه ندانم های بسیار است',
                    'ما در این سایت آره',
                  ]}
                ></FooterMenu>{' '}
              </Grid>
            </Grid>
          </Container>
          <Container>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              mt={'4rem'}
            >
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                p={2}
                justifyContent="center"
                alignItems="center"
                textAlign="center"
              >
                <p className={CSS.mnuHead}>
                  ما را در شبکه های اجتماعی دنبال کنید
                </p>
                <SocialIcons></SocialIcons>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                justifyContent="center"
                alignItems="center"
                px={'20px'}
              >
                <p className={CSS.mnuHead}>عضویت در خبرنامه </p>
                <EmailInput></EmailInput>
              </Grid>
            </Grid>
            <hr className={CSS.hr}></hr>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              mt={'2rem'}
            >
              <Grid item xs={12} sm={6} md={6} direction="column" container>
                <p className={CSS.footerfont}>تماس با ما &emsp; 011-33537308</p>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              mt={'1rem'}
            >
              <Grid item xs={12} sm={6} md={6}>
                <p className={CSS.footerfont}>
                  کلیه حقوق مادی و معنوی این سایت متعلق به تیم ریکت فکتوری
                  میباشد
                </p>
              </Grid>
            </Grid>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
