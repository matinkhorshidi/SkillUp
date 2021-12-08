import React from 'react';
import '../../assets/css modules/AboutUsHeader.scss';

const AboutUsButton = (props) => {
  return (
    <div style={{ padding: '20px' }}>
      <button className="aboutusbutton maincolor" onClick={props.onClick}>
        شروع
      </button>
    </div>
  );
};

export default AboutUsButton;
