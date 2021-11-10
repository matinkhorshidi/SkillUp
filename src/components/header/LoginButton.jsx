import React from "react";

class LoginButton extends React.Component {
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
    const {
      text,
      txtColor,
      bgColor,
      border,
      borderR,
      fontSize,
      onOpenOverlayout,
    } = this.props;

    const style = {
      backgroundColor: bgColor,
      border: border,
      color: txtColor,
      padding: "0.65rem 1.5rem",
      borderRadius: borderR,
      cursor: "pointer",
      transition: "0.5s",
      fontSize: fontSize,
    };

    return (
      <div
        onMouseOver={this.handleOver}
        onMouseLeave={this.handleLeave}
        /* className={c.div} */
        style={style}
        onClick={onOpenOverlayout}
      >
        {text}
      </div>
    );
  }
}

export default LoginButton;
