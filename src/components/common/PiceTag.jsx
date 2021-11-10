import React from 'react';

import SvgIcon from './SvgIcon';
class PriceTag extends React.Component {
  render() {
    const { IconTag, APrice, BPrice } = this.props;

    return (
      <React.Fragment>
        <div style={{ marginTop: '5px' }}>
          <p
            style={{
              margin: '0px',
              fontSize: '12px',
              color: '#FF2626',
              textDecoration: 'line-through',
              textDecorationColor: 'rgba(0, 0, 0, 0.6)',
              textDecorationWidth: '3px',
            }}
          >
            {APrice}
          </p>
          <p
            style={{
              margin: '0px',
              fontSize: '15px',
              color: '#4BB543',
              fontWeight: 'bold',
            }}
          >
            {BPrice}
          </p>
        </div>
        <SvgIcon Icon={IconTag} width="33px" height="33px"></SvgIcon>
      </React.Fragment>
    );
  }
}

export default PriceTag;
