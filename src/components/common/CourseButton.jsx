import React from 'react';

class CourseButton extends React.Component {
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
    const { text, txtColor, bgColor, border, fontSize, myStyle, onClick } =
      this.props;

    const style = {
      backgroundColor: bgColor,
      border: border,
      color: txtColor,
      marginLeft: '1rem',
      height: '2.5rem',
      padding: '0rem 1.4rem',
      lineHeight: '2.6rem',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: '0.5s',
      fontSize: fontSize,
    };

    return (
      <div
        onClick={onClick}
        onMouseOver={this.handleOver}
        onMouseLeave={this.handleLeave}
        /* className={c.div} */
        style={{ ...style, ...myStyle }}
      >
        {text}
      </div>
    );
  }
}

export default CourseButton;
