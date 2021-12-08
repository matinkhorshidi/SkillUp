import React from 'react';

class BuyCourseButton extends React.Component {
  handleOver = (e) => {
    e.target.style.backgroundColor = this.props.bgOver;
    e.target.style.borderColor = this.props.bgOver;
    e.target.style.fontSize = this.props.fontOver;
  };
  handleLeave = (e) => {
    e.target.style.backgroundColor = this.props.bgColor;
    e.target.style.borderColor = this.props.bgColor;
    e.target.style.fontSize = this.props.fontSize;
  };

  render() {
    const { text, txtColor, bgColor, border, fontSize, onClick } = this.props;

    const style = {
      backgroundColor: bgColor,
      border: border,
      color: txtColor,
      textAlign: 'center',
      height: '3rem',
      width: '90%',
      lineHeight: '2.8rem',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: '0.5s',
      fontSize: fontSize,
      margin: '0 auto',
    };

    return (
      <div
        onMouseOver={this.handleOver}
        onMouseLeave={this.handleLeave}
        /* className={c.div} */
        style={style}
        onClick={onClick}
      >
        {text}
      </div>
    );
  }
}

export default BuyCourseButton;
