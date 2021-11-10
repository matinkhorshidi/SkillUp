import React, { Component } from 'react';

import Tabss from './Tabss';
import Login from './Login';
import Register from './Register';
import ForgetPass from './ForgetPass';

class LoginRegisterForget extends Component {
  state = {
    currentTab: 'login',
    height: '530px',
  };
  handleTabChange = (value) => {
    switch (value) {
      case 'login':
        this.setState({ currentTab: value, height: '530px' });
        break;
      case 'register':
        this.setState({ currentTab: value, height: '580px' });
        break;
      case 'forget':
        this.setState({ currentTab: value, height: '375px' });
        break;
      default:
        break;
    }
  };
  render() {
    const { handlePopup } = this.props;

    const style = {
      width: '800px',
      height: this.state.height,
      backgroundColor: '#f1f2f2',
      margin: '0 auto',
      marginBottom: '50px',
      direction: 'rtl',
      overflow: 'hidden',
      maxWidth: '100%',
      borderRadius: '4px',
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)',
    };
    const { currentTab } = this.state;
    return (
      <div style={style}>
        <Tabss
          onChange={(value) => this.handleTabChange(value)}
          value={currentTab}
          onCloseOverlayout={this.props.onCloseOverlayout}
        />
        <Login
          onChange={(value) => this.handleTabChange(value)}
          show={currentTab === 'login' ? true : false}
          handlePopup={handlePopup}
        />
        <Register
          show={currentTab === 'register' ? true : false}
          handlePopup={handlePopup}
        />
        <ForgetPass show={currentTab === 'forget' ? true : false} />
      </div>
    );
  }
}

export default LoginRegisterForget;
