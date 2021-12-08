import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ReactComponent as menuIcon } from '../../assets/image/Icons/menu2.svg';
import SvgIcon from './../common/SvgIcon';
import CSS from '../../assets/css modules/header/DropDownMenu.module.css';
import LoginButton from './LoginButton';
import LogedInButton from './LogedInButton';

const DropDownMenu = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const onClick = () => {
    props.onOpenOverlayout();
    setOpenDrawer(false);
  };
  return (
    <>
      <Drawer
        className={CSS.Container}
        anchor={'top'}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List className={CSS.Menu}>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText className={CSS.Drawer}>
              <Link className={CSS.Drawer} to="/">
                خانه
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText className={CSS.Drawer}>
              <Link className={CSS.Drawer} to="/Courses">
                آموزش
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText className={CSS.Drawer}>
              <Link className={CSS.Drawer} to="/Blogs">
                وبلاگ
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText className={CSS.Drawer}>
              <Link className={CSS.Drawer} to="/AboutUs">
                درباره ما
              </Link>
            </ListItemText>
          </ListItem>
        </List>
        {props.userLogedIn ? (
          <LogedInButton
            text={props.text}
            txtColor={'#FFFFFF'}
            bgColor={'#7209B7'}
            bgOver={'rgb(181, 23, 158)'}
            fontSize={'1rem'}
            borderR={'4px'}
            onExitClicked={props.onExitClicked}
          />
        ) : (
          <LoginButton
            text={'ورود / ثبت نام'}
            txtColor={'#FFFFFF'}
            bgColor={'#7209B7'}
            bgOver={'rgb(181, 23, 158)'}
            fontSize={'1rem'}
            borderR={'0px'}
            onOpenOverlayout={onClick}
          />
        )}
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <SvgIcon
          bgColor={'#7209B7'}
          bgOver={'#7209B7'}
          Icon={menuIcon}
          size="50px"
        ></SvgIcon>
      </IconButton>
    </>
  );
};
export default DropDownMenu;
