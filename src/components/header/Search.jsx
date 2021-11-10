import React from 'react';

import CSS from '../../assets/css modules/header/Search.module.css';

import SvgIcon from './../common/SvgIcon';

import { ReactComponent as SearchIcon } from '../../assets/image/Icons/search.svg';

class Search extends React.Component {
  state = {
    hover: false,
  };

  toggleHover = () => {
    console.log('1');
    this.setState({ hover: !this.state.hover });
    console.log(this.state.hover);
  };
  HandleClick = () => {
    alert('submit');
  };

  render() {
    var linkStyle = {};
    if (!this.state.hover) {
      linkStyle = {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'white',
        height: '0.2',
        width: '160px',
        top: '0',
        /* left: 45px;  */
        left: '2px',
        opacity: '0.9',
        border: '0.8px solid white',
        transition: '2s',
      };
    } else {
      linkStyle = {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'white',
        height: '0.2',
        width: '160px',
        top: '8px',
        left: '2px',
        opacity: '0.9',
        border: '0.8px solid white',
        transition: '1s',
      };
    }
    return (
      <React.Fragment>
        {/* <CssTextField id="standard-basic" variant="standard" /> */}
        <SvgIcon
          Icon={SearchIcon}
          size={'25px'}
          bgColor={'white'}
          bgOver={'black'}
          cursor={'pointer'}
          onClick={this.HandleClick}
        ></SvgIcon>
        <form
          className={CSS.form}
          onFocus={this.toggleHover}
          onBlur={this.toggleHover}
          // onMouseLeave={this.toggleHover}
        >
          <input className={CSS.input} type="text" name="name" />
          <hr style={linkStyle} />
        </form>
      </React.Fragment>
    );
  }
}

export default Search;
