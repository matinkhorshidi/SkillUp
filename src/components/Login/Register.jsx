import React from 'react';

import Input from './Input';
import Button from '../common/ButtonLEO';
import SvgIcon from '../common/SvgIcon';

import { ReactComponent as Person } from '../../assets/images/Person.svg';
import { ReactComponent as idcart } from '../../assets/images/idcart.svg';
import { ReactComponent as Key } from '../../assets/images/Key.svg';
import { ReactComponent as GoogleColorfull } from '../../assets/images/GoogleColorfull.svg';
import { ReactComponent as Mail } from '../../assets/images/Mail.svg';
import { ReactComponent as RegisterIllustrator } from '../../assets/images/RegisterIllustrator.svg';

import c from '../../assets/css modules/Login/Login.module.css';
import { getItem } from '../../core/services/storage/storage';
import { RegisterUser } from '../../core/services/api/register-student.api';
import { LoginUser } from '../../core/services/api/login-student.api';

class Register extends React.Component {
  state = {
    user: {
      fullName: '',
      phoneNumber: '',
      email: '',
      birthDate: '',
      nationalId: '',
      password: '',
    },
  };
  handleUsernameChange = (e) => {
    const user = { ...this.state.user };
    user.fullName = e.currentTarget.value;
    this.setState({ user });
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
  handleNationalId = (e) => {
    const user = { ...this.state.user };
    user.nationalId = e.currentTarget.value;
    this.setState({ user });
  };

  render() {
    const onRegisterUser = async () => {
      const RegisteredUser = await RegisterUser(this.state.user);

      if (RegisteredUser) {
        this.props.handleToast('registered');
        const user = {
          email: this.state.user.email,
          password: this.state.user.password,
        };
        try {
          await LoginUser(user);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } catch (error) {
          alert('login failde');
        }

        this.props.handlePopup();
      } else this.props.handleToast('warningreg');
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
        <div className={c.title}>?????? ?????? ???? ?????????? ????</div>

        <div className={c.inputsAndIllus}>
          <div className={c.main}>
            <div className={c.right}>
              <Input
                label="?????? ?? ?????? ????????????????"
                placeHolder="?????????? ??????????????"
                type="text"
                Icon={Person}
                iconColor="#B5179E"
                cursor="default"
                value={this.state.user.username}
                inputChange={this.handleUsernameChange}
              />
              <Input
                label="??????????"
                placeHolder="example@Email.com"
                type="text"
                Icon={Mail}
                iconColor="#B5179E"
                cursor="default"
                value={this.state.user.email}
                inputChange={this.handleEmailChange}
              />
            </div>

            <div className={c.left}>
              <SvgIcon
                Icon={RegisterIllustrator}
                size="100%"
                bgColor="#B5179E"
                bgOver="black"
                cursor="default"
                mystyle={AniMatestyle}
              />
            </div>
          </div>
        </div>

        <div className={c.passAndForgetPass}>
          <div className={c.right}>
            <Input
              label="???? ??????"
              placeHolder="???? ??????"
              type="text"
              Icon={idcart}
              iconColor="#B5179E"
              cursor="default"
              value={this.state.user.nationalId}
              inputChange={this.handleNationalId}
            />
            <div className={c.rememberForget}>
              <div className={c.remember1}>
                <span /* className={c.span} */>?????????????? ???????????? ?????????? ????</span>
                <input type="checkbox"></input>
              </div>
            </div>
          </div>
          <div className={c.left}>
            <Input
              label=" ?????? ????????"
              placeHolder="???????????? ???? 8 ??????????????"
              type="password"
              Icon={Key}
              iconColor="#B5179E"
              cursor="default"
              value={this.state.user.password}
              inputChange={this.handlePasswordChange}
            />
          </div>
        </div>

        <div className={c.buttonsForRegister}>
          <div className={c.google}>
            <SvgIcon
              Icon={GoogleColorfull}
              size={'30px'}
              bgColor="default"
              bgOver="none"
              cursor="pointer"
            />
            <span>?????????? ???? ????????</span>
          </div>
          <div className={c.enter}>
            <Button
              onClick={onRegisterUser}
              text="??????????"
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

export default Register;
