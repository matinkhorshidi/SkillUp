import React, { Component } from 'react';

/* import c from "../../assets/css modules/ButtonLEO.module.css"; */

class ButtonLEO extends Component {
  handleOver = (e) => {
    e.target.style.backgroundColor = this.props.bgOver;
    e.target.style.borderColor = this.props.bgOver;
  };
  handleLeave = (e) => {
    e.target.style.backgroundColor = this.props.bgColor;
    e.target.style.borderColor = this.props.bgColor;
  };

  render() {
    const {
      text,
      bgColor,
      border,
      margin,
      onClick,
      textColor,
      padd,
      lineHeight,
      fontSize,
      height,
    } = this.props;

    const style = {
      backgroundColor: bgColor,
      border: border,
      color: textColor,
      margin: margin || 'none',
      height: height || '3rem',
      padding: padd || '0rem 1.6rem',
      lineHeight: lineHeight || '2.7rem',
      borderRadius: '4px',
      fontSize: fontSize || '1rem',
      cursor: 'pointer',
      textAlign: 'center',

      transition: '0.5s',
    };

    return (
      <div
        onClick={onClick}
        onMouseOver={this.handleOver}
        onMouseLeave={this.handleLeave}
        style={style}
      >
        {text}
      </div>
    );
  }
}

export default ButtonLEO;
