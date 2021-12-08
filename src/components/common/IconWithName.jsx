import React from 'react';

import SvgIcon from './SvgIcon';
class IconWithName extends React.Component {
  render() {
    const {
      IconTag,
      name,
      HSize,
      bgColor,
      iconSize,
      mystyle,
      svgstyle,
      txtcolor,
    } = this.props;
    const CustomTag = `h${HSize}`;

    return (
      <React.Fragment>
        <CustomTag style={{ marginTop: '10px', color: txtcolor }}>
          {name}
        </CustomTag>

        <SvgIcon
          Icon={IconTag}
          size={iconSize || '20px'}
          bgColor={bgColor}
          mystyle={mystyle}
          svgstyle={svgstyle}
          bgOver="rgba(0, 0, 0, 0.6)"
          // bgColor="rgba(0, 0, 0, 0.6)"
          // bgOver="rgba(0, 0, 0, 0.6)"
        ></SvgIcon>
      </React.Fragment>
    );
  }
}

export default IconWithName;
