import React from 'react';

class SvgIcon extends React.Component {
  state = {
    hover: false,
  };

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    const { Icon, size, bgColor, bgOver, cursor, onClick, mystyle, svgstyle } =
      this.props;

    var linkStyle = {};
    if (this.state.hover) {
      linkStyle = {
        height: size,
        width: size,
        display: ' inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0px 2px',
        transition: '0.2s',
        cursor: cursor,
        fill: bgOver,
        stroke: bgOver,
      };
    } else {
      linkStyle = {
        display: ' inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0px 2px',
        transition: '6s',
        cursor: cursor,
        fill: bgColor,
        height: size,
        width: size,
        stroke: bgColor,
        ...svgstyle,
      };
    }

    return (
      <div
        style={{
          height: 'auto',
          width: 'auto',
          display: ' inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0px 5px',
          transition: '1s',
          cursor: cursor,
          ...mystyle,
        }}
      >
        <Icon
          onClick={onClick}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          style={linkStyle}
        />
      </div>
    );
  }
}

export default SvgIcon;
