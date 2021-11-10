import React from 'react';

import SvgIcon from './SvgIcon';
class IconWithName extends React.Component {
  render() {
    const { IconTag, name, HSize, bgColor, iconSize } = this.props;
    const CustomTag = `h${HSize}`;

    return (
      <React.Fragment>
        <CustomTag style={{ marginTop: '10px' }}>{name}</CustomTag>

        <SvgIcon
          Icon={IconTag}
          size={iconSize || '20px'}
          bgColor={bgColor}
          bgOver="rgba(0, 0, 0, 0.6)"
          // bgColor="rgba(0, 0, 0, 0.6)"
          // bgOver="rgba(0, 0, 0, 0.6)"
        ></SvgIcon>
      </React.Fragment>
    );
  }
}

export default IconWithName;
