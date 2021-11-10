import React from 'react';

import SvgIcon from '../common/SvgIcon';

import { ReactComponent as FaceBook } from '../../assets/image/Icons/social/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/image/Icons/social/instagram.svg';
import { ReactComponent as LinkedIn } from '../../assets/image/Icons/social/LinkedIn.svg';
import { ReactComponent as Pintrest } from '../../assets/image/Icons/social/Pintrest.svg';
import { ReactComponent as Twitter } from '../../assets/image/Icons/social/twitter.svg';
import { ReactComponent as Youtube } from '../../assets/image/Icons/social/Youtube.svg';

class SocialIcons extends React.Component {
  render() {
    return (
      <div>
        <SvgIcon
          Icon={FaceBook}
          size={'40px'}
          // sizeOver={'42px'}
          bgColor={'white'}
          bgOver={'#4267B2'}
          cursor={'pointer'}
        ></SvgIcon>
        <SvgIcon
          Icon={Instagram}
          size={'40px'}
          bgColor={'white'}
          bgOver={'#833AB4'}
          cursor={'pointer'}
        ></SvgIcon>
        <SvgIcon
          Icon={LinkedIn}
          size={'40px'}
          bgColor={'white'}
          bgOver={'#0077b5'}
          cursor={'pointer'}
        ></SvgIcon>
        <SvgIcon
          Icon={Pintrest}
          size={'40px'}
          bgColor={'white'}
          bgOver={'#E60023'}
          cursor={'pointer'}
        ></SvgIcon>
        <SvgIcon
          Icon={Twitter}
          size={'40px'}
          bgColor={'white'}
          bgOver={'#1DA1F2'}
          cursor={'pointer'}
        ></SvgIcon>
        <SvgIcon
          Icon={Youtube}
          size={'40px'}
          bgColor={'white'}
          bgOver={'#FF0000'}
          cursor={'pointer'}
        ></SvgIcon>
      </div>
    );
  }
}

export default SocialIcons;
