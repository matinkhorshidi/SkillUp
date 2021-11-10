import React from 'react';

import CSS from '../../assets/css modules/header/HeaderCall.module.css';

import SvgIcon from '../common/SvgIcon';

import { ReactComponent as PhoneIcon } from '../../assets/image/Icons/call2.svg';

class HeaderCall extends React.Component {
  render() {
    const { number } = this.props;
    return (
      <React.Fragment>
        <SvgIcon
          Icon={PhoneIcon}
          size={'20px'}
          bgColor={'white'}
          bgOver={'black'}
          cursor={'pointer'}
        ></SvgIcon>

        <p className={CSS.text}>{number} </p>
      </React.Fragment>
    );
  }
}

export default HeaderCall;
