import React from 'react';

import { ReactComponent as ReadMoreIcon } from '../../assets/image/Icons/ReadMoreIcon.svg';

/* import c from "../../assets/css modules/ButtonLEO.module.css"; */

class ReadMoreButton extends React.Component {
  state = {
    hover: false,
  };

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    const { text, txtColor, bgColor, bgOver, border, fontSize } = this.props;

    var MyStyle = {};
    if (!this.state.hover) {
      MyStyle = {
        backgroundColor: bgColor,
        border: border,
        color: txtColor,
        height: '5rem',
        width: '7rem',
        lineHeight: '2rem',
        cursor: 'pointer',
        transition: '0.5s',
        fontSize: fontSize,
        textAlign: 'center',
        justifyContent: 'center',
        margin: 'auto auto',
        borderRadius: '5px 5px 50px 50px',
      };
    } else {
      MyStyle = {
        backgroundColor: bgOver,
        border: border,
        color: txtColor,
        height: '5rem',
        width: '7rem',
        lineHeight: '2.4rem',
        cursor: 'pointer',
        transition: '0.5s',
        fontSize: fontSize,
        textAlign: 'center',
        justifyContent: 'center',
        margin: 'auto auto',
        borderRadius: '5px 5px 50px 50px',
      };
    }

    return (
      <div
        //    onClick={onClick}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        /* className={c.div} */
        style={MyStyle}
      >
        {text}
        <div>
          <ReadMoreIcon />
        </div>
      </div>
    );
  }
}

export default ReadMoreButton;
