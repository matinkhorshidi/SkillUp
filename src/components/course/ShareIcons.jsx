import React from 'react';

import SvgIcon from '../common/SvgIcon';

// import { ReactComponent as FaceBook } from '../../assets/image/Icons/social/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/image/Icons/social/instagram.svg';
import { ReactComponent as telegram } from '../../assets/image/Icons/social/telegram.svg';
import { ReactComponent as Twitter } from '../../assets/image/Icons/social/twitter.svg';
import { ReactComponent as whatsapp } from '../../assets/image/Icons/social/whatsapp.svg';
class ShareIcons extends React.Component {
  render() {
    return (
      <div>
        <SvgIcon
          Icon={telegram}
          size={'30px'}
          // sizeOver={'42px'}
          bgColor={'#000'}
          bgOver={'#0088cc'}
          cursor={'pointer'}
        ></SvgIcon>
        <SvgIcon
          Icon={Instagram}
          size={'30px'}
          bgColor={'#000'}
          bgOver={'#833AB4'}
          cursor={'pointer'}
        ></SvgIcon>
        <SvgIcon
          Icon={whatsapp}
          size={'30px'}
          bgColor={'#000'}
          bgOver={'#2CB742'}
          cursor={'pointer'}
        ></SvgIcon>
        <SvgIcon
          Icon={Twitter}
          size={'30px'}
          bgColor={'#000'}
          bgOver={'#1DA1F2'}
          cursor={'pointer'}
        ></SvgIcon>
      </div>
    );
  }
}

export default ShareIcons;
