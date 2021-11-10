import React from 'react';

import CSS from '../../assets/css modules/header/LogedInButton.module.css';

class LogedInButton extends React.Component {
  state = {
    hover: false,
  };

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };
  render() {
    const { text, txtColor, bgColor, bgOver, border, borderR, fontSize } =
      this.props;

    var style = {};
    var dropdown = {};

    var dropdownA = {};
    if (!this.state.hover) {
      style = {
        position: 'absolute',
        backgroundColor: bgColor,
        border: border,
        color: txtColor,
        padding: '0.65rem 4%',
        height: '3rem',
        borderRadius: borderR,
        cursor: 'pointer',
        top: '1rem',
        transition: '0.5s',
        fontSize: fontSize,
        boxShadow: '1px -1px 10px 3px rgba(69, 69, 69, 0.4)',
        textAlign: 'center',
        justifyContent: 'center',
      };
      dropdown = {
        visibility: 'hidden',
        position: 'absolute',
        minWidth: '160px',
        zIndex: '1',
        color: 'white',
        textAlign: 'center',
        left: '0',
        right: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
      };
      dropdownA = {
        visibility: 'hidden',
        opacity: '0',
        float: 'none',
        color: 'white',
        textDecoration: 'none',
        display: 'block',
        padding: '5px 0px',
        textAlign: 'center',
        fontSize: '1rem',
      };
    } else {
      style = {
        display: 'block',
        position: 'absolute',
        backgroundColor: bgOver,
        border: border,
        color: txtColor,
        padding: '0.65rem 4%',
        height: '10rem',
        top: '1rem',
        borderRadius: borderR,
        cursor: 'pointer',
        transition: '0.5s',
        fontSize: fontSize,
        boxShadow: '1px -1px 10px 3px rgba(69, 69, 69, 0.6)',
        textAlign: 'center',
        justifyContent: 'center',
      };
      dropdown = {
        visibility: 'visible',
        position: 'absolute',
        zIndex: '1',
        color: 'white',
        display: 'block',
        textAlign: 'center',
        left: '0',
        right: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
      };
      dropdownA = {
        visibility: 'visible',
        opacity: '1',
        float: 'none',
        color: 'white',
        textDecoration: 'none',
        display: 'block',
        transition: 'opacity 0.5s ease-in, visibility 0.5s ease-in',
        padding: '5px 0px',
        textAlign: 'center',
        fontSize: '1rem',
        transitionDelay: '0.2s',
      };
    }

    return (
      <div
        //onClick={onClick}
        style={style}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        {text}
        <div style={dropdown}>
          <hr style={{ margin: '0.5rem 0' }} />
          <a className={CSS.link} style={dropdownA} href="#">
            داشبورد
          </a>
          <a className={CSS.link} style={dropdownA} href="#">
            سبد خرید
          </a>
          <a
            onClick={this.props.onExitClicked}
            className={CSS.link}
            style={dropdownA}
            href="./"
          >
            خروج
          </a>
        </div>
      </div>
    );
  }
}

export default LogedInButton;
