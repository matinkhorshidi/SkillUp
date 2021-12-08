import React from 'react';

import CSS from '../../assets/css modules/weblog/CategoryBox.module.css';

import SvgIcon from './../common/SvgIcon';

class CategoryBox extends React.Component {
  state = {
    hover: false,
  };
  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };
  render() {
    const {
      name,
      number,
      svg,
      backColor,
      height,
      svgPadding,
      namePadding,
      numPadding,
      marginTop,
    } = this.props;

    var style = {
      paddingTop: svgPadding || '2rem',
      marginTop: marginTop,
      animation: 'none',
      animationIterationCount: 'infinite',
    };
    if (this.state.hover) {
      //  alert('123');
      style = {
        paddingTop: svgPadding || '2rem',
        marginTop: marginTop,
        animation: 'shake 10s',
        animationIterationCount: 'infinite',
      };
    }

    return (
      <div>
        <style>{`
            @keyframes shake {
               0% { transform: translate(2px, 2px) rotate(0deg); }
               10% { transform: translate(-2px, -3px) rotate(-1deg); }
               20% { transform: translate(-3px, 0px) rotate(1deg); }
               30% { transform: translate(10px, 2px) rotate(0deg); }
               40% { transform: translate(1px, -1px) rotate(1deg); }
               50% { transform: translate(-1px, 2px) rotate(-1deg); }
               60% { transform: translate(-3px, 1px) rotate(0deg); }
               70% { transform: translate(3px, 1px) rotate(-1deg); }
               80% { transform: translate(-1px, -1px) rotate(1deg); }
               90% { transform: translate(1px, 2px) rotate(0deg); }
               100% { transform: translate(1px, -2px) rotate(-1deg); }
            }
        `}</style>
        <div
          className={CSS.box}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          style={{
            backgroundColor: backColor,
            height: height,
          }}
        >
          <h3 className={CSS.Name} style={{ padding: namePadding }}>
            {name}
          </h3>
          <p className={CSS.number} style={{ padding: numPadding }}>
            {' '}
            تعداد دوره ها : {number}
          </p>
          <SvgIcon mystyle={style} Icon={svg} size="80%"></SvgIcon>
        </div>
      </div>
    );
  }
}

export default CategoryBox;
