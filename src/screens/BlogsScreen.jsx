import React, { Component } from 'react';

import Blogs from '../components/weblog/Blogs';
import Categorys from '../components/weblog/Categorys';
import Banner from '../components/common/Banner';

class BlogsScreen extends Component {
  state = {};

  render() {
    return (
      <div>
        <Categorys />
        <Banner
          name={'همه ی مطالب'}
          menu={'وبلاگ'}
          number={20}
          filter={true}
          backgrColor={'#d3d3d3'}
          textColor={'#000'}
        />
        <Blogs BlogsNum={6} />
      </div>
    );
  }
}

export default BlogsScreen;
