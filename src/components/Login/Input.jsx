import React from 'react';

import SvgIcon from '../common/SvgIcon';

import newId from '../../core/utils/newid';

class Input extends React.Component {
  componentWillMount() {
    this.id = newId();
  }
  render() {
    const {
      label,
      placeHolder,
      Icon,
      type,
      iconColor,
      iconOver,
      cursor,
      value,
      inputChange,
    } = this.props;

    const style0 = {
      marginBottom: '8%',
    };
    const style1 = {
      marginBottom: '4%',
    };
    const style2 = {
      width: '85%',
      padding: '4% 10% 4% 0',
      border: 'none',
      fontSize: '0.8rem',
      outline: 'none',
    };
    const style3 = {
      display: 'flex',
      backgroundColor: '#fff',
      boxShadow: '0px 0px 7px 1px rgba(69, 69, 69, 0.3)',
    };
    const style4 = {
      display: 'flex',
      width: '15%',
    };

    return (
      <div style={style0}>
        <label style={style1} htmlFor={this.id}>
          {label}
        </label>
        <div style={style3}>
          <input
            id={this.id}
            style={style2}
            placeholder={placeHolder}
            type={type}
            value={value}
            onChange={inputChange}
          ></input>
          <div style={style4}>
            <SvgIcon
              Icon={Icon}
              size={'22px'}
              bgColor={iconColor}
              bgOver={iconOver || iconColor}
              cursor={cursor}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Input;
