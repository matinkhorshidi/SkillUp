import React, { Component } from 'react';
import Banner from './../components/common/Banner';
import BlogContainer from './../components/weblog/BlogContainer';
import BlogImage from './../components/weblog/BlogImage';

class BlogScreen extends Component {
  state = {};

  render() {
    return (
      <div>
        <Banner
          name={'برنامه نویس پیرتر یا جوان تر؟'}
          menu={'بلاگ  >  برنامه نویسی '}
          number={20}
          ReadTime={'بیست دقیقه'}
          backgrColor={'#4895EF'}
          textColor={'#fff'}
        />
        <BlogImage />
        <BlogContainer />
      </div>
    );
  }
}

export default BlogScreen;
