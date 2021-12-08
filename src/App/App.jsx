import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

import UpperHeader from './../components/header/UpperHeader';
import Header from './../components/header/Header';
import BlogsScreen from '../screens/BlogsScreen';
import LandingScreen from '../screens/LandingScreen';
import CoursesScreen from '../screens/CoursesScreen';
import BlogScreen from './../screens/BlogScreen';
import Footer from '../components/Footer/Footer';
import NotFoundScreen from './../screens/NotFoundScreen';
import LandingOverlayout from './../components/Landing/LandingOverlayout';
import CourseScreen from './../screens/CourseScreen';
import ScrollToTop from './../core/utils/ScrollToTop';
import UserPanelScreen from './../screens/UserPanelScreen';
import CoursesCatScreen from './../screens/CoursesCatScreen';
import AboutUsScreen from './../screens/AboutUsScreen';

class App extends Component {
  state = {
    showPopup: false,
  };

  handlePopup = () => {
    // this.props.history.push('/Login');
    const showPopup = !this.state.showPopup;
    this.setState({ showPopup });
  };
  handleToast = (status) => {
    if (status == 'logedin') {
      toast.success('درست وارد شدیییی', {
        position: 'top-right',
      });
    } else if (status == 'warninglog') {
      toast.error('اطلاعات شما ثبت نشده جان', {
        position: 'top-right',
      });
    } else if (status == 'registered') {
      toast.success('آفرین ثبت نامت درسته', {
        position: 'top-right',
      });
    } else if (status == 'warningreg') {
      toast.error('یجاشو اشتبا زدی', {
        position: 'top-right',
      });
    }
  };

  render() {
    const { showPopup } = this.state;

    return (
      <div style={{ backgroundColor: '#F8F8F8' }}>
        {/* Header */}
        <UpperHeader />
        <Header onOpenOverlayout={this.handlePopup} />
        {/* Router */}
        <ScrollToTop />

        <Switch>
          <Route path="/Dashboard" children={<UserPanelScreen />} />
          <Route path="/AboutUs" children={<AboutUsScreen />} />
          <Route path="/Blog" children={<BlogScreen />} />
          <Route path="/Courses/:id" children={<CoursesCatScreen />} />
          <Route path="/Courses" exact children={<CoursesScreen />} />
          <Route path="/Course/:id" children={<CourseScreen />} />
          <Route path="/Blogs" exact children={<BlogsScreen />} />
          <Route path="/Blog/:id" children={<BlogScreen />} />
          <Route path="/" exact children={<LandingScreen />} />
          <Route path="*" children={<NotFoundScreen />} />
        </Switch>

        <LandingOverlayout
          onCloseOverlayout={this.handlePopup}
          showOverlayout={showPopup}
          handlePopup={this.handlePopup}
          handleToast={this.handleToast}
        />
        <Footer />
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(App);
