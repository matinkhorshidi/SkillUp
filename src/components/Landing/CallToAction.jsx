import React from 'react';
import CSS from '../../assets/css modules/ThreeDivs.module.css';
import SvgIcon from '../common/SvgIcon';

class CallToAction extends React.Component {
  render() {
    const { name, icon, onClick } = this.props;
    return (
      <div className={CSS.items} onClick={onClick}>
        <div className={CSS.container}>
          <div className={CSS.sectionBox}>
            <span className={CSS.span1}>{name}</span>
            <span className={CSS.span2}>
              بیشتر‍‍‍‍‍‍ <span>»</span>
            </span>
          </div>
          <div className={CSS.icon}>
            <SvgIcon
              Icon={icon}
              size={'85px'}
              bgColor="rgba(0, 0, 0)"
              bgOver="rgb(124, 11, 179)"
            ></SvgIcon>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction;
