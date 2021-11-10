import React from 'react';
import { Container } from '@mui/material';

// import CSS from '../../assets/css modules/weblog/BlogImage.module.css';

import Image from './../common/Image';
import CourseImage from '../../assets/image/CourseImage.jpg';

class BlogImage extends React.Component {
  render() {
    // const { image , name , details , teacher , time , price , oldPrice } = this.props;

    return (
      <Container
        maxWidth="lg"
        style={{
          padding: '0px',
        }}
      >
        <Image
          mode={'fill'}
          src={CourseImage}
          height={'30rem'}
          width={'100%'}
          borderR={'5px'}
        />
      </Container>
    );
  }
}

export default BlogImage;
