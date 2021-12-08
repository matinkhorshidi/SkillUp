import React, { Component } from "react";

import { Grid } from "@mui/material";

import c from "../../assets/css modules/Login/Login.module.css";

import Input from "./Input";
import Button from "../common/ButtonLEO";
import SvgIcon from "../common/SvgIcon";

import { ReactComponent as Person } from "../../assets/images/Person.svg";
import { ReactComponent as ForgetPassword } from "../../assets/images/ForgetPassword.svg";

class ForgetPass extends Component {
  render() {
    var AniMatestyle = {
      animation: "shake 10s",
      animationIterationCount: "infinite",
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
        <div className={c.title}>
          برای بازیابی رمز عبور ، ایمیل یا نام کاربری خود را وارد کنید.
        </div>

        <Grid
          className={c.forgetContainer}
          container
          direction="row-reverse"
          justifyContent="space-between"
        >
          <Grid
            className={c.forgetContainerItem}
            item
            lg={5.4}
            md={5.4}
            sm={5.4}
            xs={5.4}
          >
            <SvgIcon
              Icon={ForgetPassword}
              size="100%"
              bgColor="#B5179E"
              bgOver="#000"
              cursor="default"
              mystyle={AniMatestyle}
            />
          </Grid>
          <Grid
            className={c.forgetContainerItem}
            item
            lg={5.4}
            md={5.4}
            sm={5.4}
            xs={5.4}
          >
            <Grid container direction="column">
              <Grid item>
                <Input
                  label="ایمیل یا نام کاربری"
                  placeHolder="ایمیل / نام کاربری"
                  type="text"
                  Icon={Person}
                  iconColor="#B5179E"
                  cursor="default"
                />
              </Grid>
              <Grid item sx={{ mt: "18%", color: "#fff" }}>
                <Button
                  text="تایید"
                  bgColor="#4BB543"
                  border="none"
                  bgOver="rgb(181, 23, 158)"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ForgetPass;
