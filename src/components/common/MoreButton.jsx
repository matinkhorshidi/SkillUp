import React from 'react';
import './MoreButton.scss';

const MoreButton = () => {
  return (
    <div id="container">
      <button class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">بیشتر</span>
      </button>
    </div>
  );
};

export default MoreButton;
