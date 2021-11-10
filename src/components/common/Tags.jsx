import React from 'react';
import CSS from '../../assets/css modules/weblog/Tags.module.css';
class Tags extends React.Component {
  render() {
    return (
      <div>
        <p className={CSS.tag}>سایت</p>
        <p className={CSS.tag}>ّبرمامه نویسی مقدماتی</p>
      </div>
    );
  }
}

export default Tags;
