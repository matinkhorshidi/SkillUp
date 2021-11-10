import React from 'react';

class EmailButton extends React.Component {
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
    const { text, txtColor, bgColor, border, fontSize } = this.props;

    const style = {
      backgroundColor: bgColor,
      border: border,
      color: txtColor,
      height: '100%',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // padding: '0rem 1.4rem',
      // lineHeight: '1rem',
      cursor: 'pointer',
      transition: '0.5s',
      fontSize: fontSize,
    };

    return (
      <div
        onMouseOver={this.handleOver}
        onMouseLeave={this.handleLeave}
        /* className={c.div} */
        style={style}
      >
        {text}
      </div>
    );
  }
}

export default EmailButton;
