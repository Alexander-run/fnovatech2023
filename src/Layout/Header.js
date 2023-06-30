import {
  Menu
} from 'antd'
import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router';
import './header.css'

const Header = () => {
  const [current, setCurrent] = useState('mail');
  const history = useHistory()

  const onClick = (e) => {
    setCurrent(e.key);
    history.push({
      pathname: e.key
    })
  };

  return (
    <Fragment>
      <h1 class="logo">FNOVATECH</h1>
      <Menu className='menu-container' onClick={onClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key='/home'>Home</Menu.Item>
        <Menu.Item key='/contact'>Contact Us</Menu.Item>
        <Menu.Item key='/residential'>Residential</Menu.Item>
        <Menu.Item key='/commercial'>Commercial</Menu.Item>
        <Menu.Item key='/about'>About Us</Menu.Item>
        <Menu.Item key='/installation'>Solar Installation</Menu.Item>
      </Menu>
    </Fragment>
  )
};
export default Header;