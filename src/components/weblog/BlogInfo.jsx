import React from 'react';

import { Container, Grid } from '@mui/material';

// import CSS from '../../assets/css modules/weblog/BlogInfo.module.css';

import Image from './../common/Image';
import CourseImage from '../../assets/image/Footer5.jpg';

class BlogInfo extends React.Component {
  render() {
    // const { image , name , details , teacher , time , price , oldPrice } = this.props;
    const { name, text, textColor } = this.props;

    return (
      <Container maxWidth="lg" style={{ color: textColor }} mb={2}>
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
            pb={2}
          >
            <h3> {name}</h3>
            <p>{text}</p>
            <Image
              mode={'fill'}
              src={CourseImage}
              height={'400px'}
              width={'100%'}
              borderR={'4px'}
            />
            <br />
            <h5> {name}</h5>
            <p>{text}</p>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default BlogInfo;
