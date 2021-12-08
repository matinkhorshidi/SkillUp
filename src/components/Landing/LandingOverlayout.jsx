import React, { Component } from 'react';

import LoginRegisterForget from '../Login/LoginRegisterForget';

import CSS from '../../assets/css modules/LandingOverlayout.module.css';

class LandingOverlayout extends Component {
  render() {
    const { onCloseOverlayout, showOverlayout, handlePopup, handleToast } =
      this.props;
    const show = {
      display: 'block',
      // position: 'relative',
      // animation: 'mymove 1s',
    };
    const hide = {
      display: 'none',
      overflow: 'hidden',
    };
    return (
      <div className={`${CSS.overlayout}`} style={showOverlayout ? show : hide}>
        <style>{`
            @keyframes mymove {
              from {top: -1000px;}
              to {top: 0px;}
            }
        `}</style>
        <LoginRegisterForget
          onCloseOverlayout={onCloseOverlayout}
          handlePopup={handlePopup}
          handleToast={handleToast}
        />
      </div>
    );
  }
}

export default LandingOverlayout;
