import React from 'react';

import Input from './Input';
import Button from '../common/ButtonLEO';
import SvgIcon from '../common/SvgIcon';

import { ReactComponent as Person } from '../../assets/images/Person.svg';
import { ReactComponent as Key } from '../../assets/images/Key.svg';
import { ReactComponent as GoogleColorfull } from '../../assets/images/GoogleColorfull.svg';
import { ReactComponent as LoginIllustrator } from '../../assets/images/LoginIllustrator.svg';

import c from '../../assets/css modules/Login/Login.module.css';
import { getItem } from '../../core/services/storage/storage';
import { LoginUser } from '../../core/services/api/login-student.api';

class Login extends React.Component {
  state = {
    user: {
      email: '',
      password: '',
    },
    userLogedIn: false,
  };
  handleEmailChange = (e) => {
    const user = { ...this.state.user };
    user.email = e.currentTarget.value;
    this.setState({ user });
  };
  handlePasswordChange = (e) => {
    const user = { ...this.state.user };
    user.password = e.currentTarget.value;
    this.setState({ user });
  };

  render() {
    const logedin = getItem('token');

    const onLoginUser = async () => {
      const LogedInUser = await LoginUser(this.state.user);
      if (LogedInUser) {
        this.setState({ LogedInuser: LogedInUser });
        this.setState({ userLogedIn: true });
        this.setState({ showPopup: false });
        this.props.handlePopup();
      } else alert('Wrong information');
    };
    var AniMatestyle = {
      animation: 'shake 10s',
      animationIterationCount: 'infinite',
    };
    return (
      <div
        className={`${c.container} ${
          this.props.show ? c.opacity1 : c.opacity0
        }`}
      >
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
        <div className={c.title}>ورود به حساب کاربری </div>

        <div className={c.inputsAndIllus}>
          <div className={c.main}>
            <div className={c.right}>
              <Input
                label="نام کاربری"
                placeHolder="نام کاربری"
                type="text"
                Icon={Person}
                iconColor="#B5179E"
                cursor="default"
                value={this.state.user.email}
                inputChange={this.handleEmailChange}
              />
              <Input
                label="رمز عبور"
                placeHolder="رمز عبور"
                type="password"
                Icon={Key}
                iconColor="#B5179E"
                cursor="default"
                value={this.state.user.password}
                inputChange={this.handlePasswordChange}
              />
              <div className={c.rememberForget}>
                <div className={c.remember}>
                  <span>
                    <label htmlFor="rememberme"> مرا به خاطر بسپار</label>
                  </span>
                  <input
                    id="rememberme"
                    name="rememberme"
                    type="checkbox"
                  ></input>
                </div>
                <div
                  className={c.forgetPass}
                  onClick={() => this.props.onChange('forget')}
                >
                  فراموشی رمز عبور
                </div>
              </div>
            </div>

            <div className={c.left}>
              <div className={c.loginIllustrator}>
                <SvgIcon
                  Icon={LoginIllustrator}
                  size="100%"
                  bgColor="#000"
                  bgOver="#B5179E"
                  cursor="default"
                  mystyle={AniMatestyle}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={c.buttons}>
          <div className={c.google}>
            <SvgIcon
              Icon={GoogleColorfull}
              size={'30px'}
              bgColor="default"
              bgOver="none"
              cursor="pointer"
            />
            <span>ورود با گوگل</span>
          </div>
          <div className={c.enter}>
            <Button
              onClick={onLoginUser}
              text="ورود"
              bgColor="#7209B7"
              border="none"
              bgOver="rgb(181, 23, 158)"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
