import React from 'react';
import CSS from '../../assets/css modules/weblog/Tags.module.css';
class Tags extends React.Component {
  render() {
    const style = {
      backgroundColor: 'rgb(177, 108, 222,0.5)',
    };
    return (
      <div style={{ textAlign: 'center' }}>
        <p className={CSS.tag} style={style}>
          سایت{' '}
        </p>
        <p className={CSS.tag} style={style}>
          برمامه نویسی مقدماتی
        </p>
      </div>
    );
  }
}

export default Tags;
