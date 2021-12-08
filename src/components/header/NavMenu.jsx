import React from 'react';

import { NavLink } from 'react-router-dom';

import CSS from '../../assets/css modules/header/NavMenu.module.css';

import '../../assets/css modules/header/NavMenu.css';

function NavMenu() {
  return (
    <React.Fragment>
      <ul className={CSS.mainNav}>
        <li>
          <NavLink className={CSS.Link} to="/AboutUs" activeClassName="active">
            درباره ما
          </NavLink>
        </li>
        <li>
          <NavLink className={CSS.Link} to="/Blogs" activeClassName="active">
            وبلاگ
          </NavLink>
        </li>
        <li>
          <NavLink className={CSS.Link} to="/Courses" activeClassName="active">
            آموزش
          </NavLink>
        </li>
        <li>
          <NavLink className={CSS.Link} exact to="/" activeClassName="active">
            خانه
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default NavMenu;
