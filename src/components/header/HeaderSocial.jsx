import React from 'react';

import CSS from '../../assets/css modules/header/HeaderSocial.module.css';

import SvgIcon from '../common/SvgIcon';

import { ReactComponent as FaceBook } from '../../assets/image/Icons/social/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/image/Icons/social/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/image/Icons/social/twitter.svg';

class HeaderSocial extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SvgIcon
          Icon={FaceBook}
          size={'20px'}
          bgColor={'white'}
          bgOver={'black'}
          cursor={'pointer'}
        ></SvgIcon>
        <SvgIcon
          Icon={Instagram}
          size={'20px'}
          bgColor={'white'}
          bgOver={'black'}
          cursor={'pointer'}
        ></SvgIcon>
        <SvgIcon
          Icon={Twitter}
          size={'20px'}
          bgColor={'white'}
          bgOver={'black'}
          cursor={'pointer'}
        ></SvgIcon>
        <p className={CSS.text}>ما را دنبال کنید : </p>
      </React.Fragment>
    );
  }
}

export default HeaderSocial;
