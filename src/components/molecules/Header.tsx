import React, { useState } from 'react';
import * as th from './header.sass';
import useWindowSize from '@rehooks/window-size';

import { Link } from 'react-router-dom';
import { Menu, Input, Button, Select, Icon, Drawer } from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;

import NavMenu from './NavMenu';

interface HeaderProps {
  onRequestAuth: () => void;
}

export default function Header(props: HeaderProps) {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const windowSize = useWindowSize().innerWidth;
  const smallMenu = windowSize < 1000;
  const hideLogo = windowSize < 800;


  return (
    <div className={th.header}>
      {/* <div className={th.banner}>
        <span className={th.titleFirst}>vegano</span>
        <img className={th.centerImage} src='/images/header-image.svg'/>
        <span className={th.titleLast}>mercado</span>
        <div className={th.community}>Mar del Plata</div>
      </div> */}
      <div className={th.menuBar}>
        {smallMenu ? <Button
          className={th.veganburger}
          size='large'
          ghost={true}
          onClick={() => setDrawerVisible(!drawerVisible)}>
          &#9776;
        </Button> : null}
        {smallMenu ? <Drawer
          className={th.drawer}
          title=''
          placement='left'
          closable={false}
          onClose={() => setDrawerVisible(false)}
          visible={drawerVisible}
        >
          <NavMenu className={th.vmenu} vertical={true}/>
        </Drawer> : null}
        {!hideLogo ? <Link to='/' className={th.title}>
          Vegano<span className={th.titleWorld}>🌎</span>Mercado
        </Link> : null}
        <InputGroup compact className={th.search}>
          <Select defaultValue='Mar del Plata'>
            <Option value='MarDelPlata'>Mar del Plata</Option>
            <Option value='BuenosAires'>Buenos Aires</Option>
            <Option value='Barcelona'>Barcelona</Option>
            <Option value='Berlin'>Berlin</Option>
          </Select>
          <Search
            placeholder='Buscar en la comunidad'
            onSearch={value => console.log(value)}/>
        </InputGroup>
        {!smallMenu ? <NavMenu className={th.menu}/> : <div className={th.expand}></div>}
        <Button
          className={th.auth}
          ghost={true}
          shape='round'
          onClick={props.onRequestAuth}>
          Registrarse / Ingresar
        </Button>
      </div>
    </div>
  );
}
