import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getItem } from '../../core/services/storage/storage';

import UserInfo from './UserInfo';
import Mycourses from './Mycourses';
import BuyCards from './BuyCards';
import ScrollToTop from '../../core/utils/ScrollToTop';
import Myfavs from './Myfavs';
import MyAcc from './MyAcc';

const DashboardRoute = () => {
  const User = JSON.parse(getItem('user'));
  console.log(User);
  return (
    <div style={{ backgroundColor: '#F8F8F8' }}>
      <ScrollToTop />

      <Route path="/Dashboard/BuyCards" children={<BuyCards />} />
      <Route path="/Dashboard/Myfavs" children={<Myfavs />} />
      <Route path="/Dashboard/Mycourses" children={<Mycourses user={User} />} />
      <Route path="/Dashboard/UserInfo" children={<UserInfo user={User} />} />
      <Route path="/Dashboard" exact children={<MyAcc user={User} />} />

      <ToastContainer />
    </div>
  );
};

export default withRouter(DashboardRoute);
