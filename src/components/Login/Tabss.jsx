import React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { ReactComponent as Close } from '../../assets/images/X.svg';

import c from '../../assets/css modules/Login/Tabss.module.css';

class Tabss extends React.Component {
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
    this.props.onChange(newValue);
  };
  render() {
    const { value, onCloseOverlayout } = this.props;
    return (
      <div className={c.holder}>
        <div onClick={onCloseOverlayout} className={c.close}>
          <Close className={c.fill} />
        </div>
        <div className={c.container}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            bgcolor="primary.contrastText"
          >
            <Tab className={c.tab} value="login" label="ورود" />
            <Tab className={c.tab} value="register" label="ثبت نام" />
            <Tab className={c.tab} value="forget" label="فراموشی رمز عبور" />
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Tabss;
