import React, { Component } from 'react';

import LoginRegisterForget from '../Login/LoginRegisterForget';

import c from '../../assets/css modules/LandingOverlayout.module.css';

class LandingOverlayout extends Component {
  render() {
    const { onCloseOverlayout, showOverlayout, handlePopup } = this.props;
    return (
      <div className={`${c.overlayout} ${showOverlayout ? c.show : c.hide}`}>
        <LoginRegisterForget
          onCloseOverlayout={onCloseOverlayout}
          handlePopup={handlePopup}
        />
      </div>
    );
  }
}

export default LandingOverlayout;
