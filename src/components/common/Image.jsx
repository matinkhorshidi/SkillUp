import React, { Component } from 'react';

export default class Image extends Component {
  render() {
    let {
      mode,
      src,
      height,
      width,
      style,
      imageTag,
      TagColor,
      borderR,
      ...props
    } = this.props;

    let modes = {
      fill: 'cover',
      fit: 'contain',
    };
    let size = modes[mode] || 'contain';

    let defaults = {
      height: height || 'none',
      width: width || 'none',

      // backgroundColor: 'gray',
    };

    let important = {
      backgroundImage: `url("${src}")`,
      backgroundSize: size,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      borderRadius: borderR,
    };

    return (
      <div {...props} style={{ ...defaults, ...style, ...important }}>
        <div style={{ float: 'right' }}>
          <p
            style={{
              // width: '200px',
              backgroundColor: TagColor,
              padding: '0.4rem 0.9rem',
              margin: '0.5rem',
              fontWeight: 'bold',
            }}
          >
            {imageTag}
          </p>
        </div>
      </div>
    );
  }
}
