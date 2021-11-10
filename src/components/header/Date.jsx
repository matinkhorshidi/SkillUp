import React from 'react';

import { ReactComponent as CalendarIcon } from '../../assets/image/Icons/calendar2.svg';

import SvgIcon from '../common/SvgIcon';

class Date extends React.Component {
  render() {
    const { date } = this.props;
    return (
      <React.Fragment>
        <p style={{ margin: '0' }}>{date}</p>
        <SvgIcon
          Icon={CalendarIcon}
          size="20px"
          bgColor="rgba(0, 0, 0, 0.6)"
          bgOver="rgba(0, 0, 0, 0.6)"
        ></SvgIcon>
      </React.Fragment>
    );
  }
}

export default Date;
