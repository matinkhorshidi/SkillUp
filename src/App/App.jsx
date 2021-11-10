import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import UpperHeader from './../components/header/UpperHeader';
import Header from './../components/header/Header';
import BlogsScreen from '../screens/BlogsScreen';
import LandingScreen from '../screens/LandingScreen';
import CourseScreen from '../screens/CourseScreen';
import BlogScreen from './../screens/BlogScreen';
import Footer from '../components/Footer/Footer';
import NotFoundScreen from './../screens/NotFoundScreen';
import LandingOverlayout from './../components/Landing/LandingOverlayout';

class App extends Component {
  state = {
    showPopup: false,
  };

  handlePopup = () => {
    const showPopup = !this.state.showPopup;
    this.setState({ showPopup });
  };

  render() {
    const { showPopup } = this.state;

    return (
      <div style={{ backgroundColor: '#F8F8F8' }}>
        {/* Header */}
        <UpperHeader />
        <Header onOpenOverlayout={this.handlePopup} />
        {/* Router */}
        <Switch>
          {/* <ScrollToTop> */}
          <Route path="/Blog">
            <BlogScreen />
          </Route>
          <Route path="/Course">
            <CourseScreen />
          </Route>
          <Route path="/Blogs">
            <BlogsScreen />
          </Route>
          <Route exact path="/">
            <LandingScreen />
          </Route>
          {/* </ScrollToTop> */}

          <Route path="*">
            <NotFoundScreen />
          </Route>
        </Switch>
        <LandingOverlayout
          onCloseOverlayout={this.handlePopup}
          showOverlayout={showPopup}
          handlePopup={this.handlePopup}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
