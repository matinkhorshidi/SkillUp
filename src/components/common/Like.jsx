import React from 'react';

import { ReactComponent as LikeLine } from '../../assets/image/Icons/likeOutline.svg';
import { ReactComponent as Liked } from '../../assets/image/Icons/likeFill.svg';

class Like extends React.Component {
  state = {
    arrow: true,
  };

  handleClick = () => {
    this.setState({ arrow: !this.state.arrow });
  };
  render() {
    const style = {
      cursor: 'pointer',
      transition: '0.5s',
    };
    return (
      <div
        onMouseOver={this.handleOver}
        onMouseLeave={this.handleLeave}
        style={style}
      >
        {this.state.arrow ? (
          <LikeLine
            onClick={this.handleClick}
            style={{ fill: 'rgb(192, 57, 43,0.8)' }}
          />
        ) : (
          <Liked
            onClick={this.handleClick}
            style={{ fill: 'rgb(192, 57, 43,0.9)' }}
          />
        )}
      </div>
    );
  }
}

export default Like;
