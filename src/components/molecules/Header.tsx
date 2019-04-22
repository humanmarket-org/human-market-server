import React, { useState } from 'react';
import * as th from './header.sass';
import useWindowSize from '@rehooks/window-size';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';
import { Menu, Input, Button, Select, Icon, Drawer } from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;

import NavMenu from './NavMenu';
import Logo from './Logo';

interface HeaderProps {
  onRequestAuth: () => void;
}

export default function Header(props: HeaderProps) {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const smallScreen = useWindowSize().innerWidth < 1000;

  const { t, i18n } = useTranslation();

  return (
    <div className={th.header}>
      {/* <div className={th.banner}>
        <span className={th.titleFirst}>vegano</span>
        <img className={th.centerImage} src='/images/header-image.svg'/>
        <span className={th.titleLast}>mercado</span>
        <div className={th.community}>Mar del Plata</div>
      </div> */}
      <div className={th.menuBar}>
        {smallScreen ? <Button
          className={th.veganburger}
          size='large'
          ghost={true}
          onClick={() => setDrawerVisible(!drawerVisible)}>
          &#9776;
        </Button> : null}
        {smallScreen ? <Drawer
          className={th.drawer}
          title=''
          placement='left'
          closable={false}
          onClose={() => setDrawerVisible(false)}
          visible={drawerVisible}
        >
          <Logo className={th.title}/>
          <NavMenu className={th.vmenu} vertical={true}/>
        </Drawer> : null}
        {!smallScreen ? <Logo className={th.title}/> : null}
        <InputGroup compact className={th.search}>
          <Select defaultValue='Mar del Plata'>
            <Option value='MarDelPlata'>Mar del Plata</Option>
            <Option value='BuenosAires'>Buenos Aires</Option>
            <Option value='Barcelona'>Barcelona</Option>
            <Option value='Berlin'>Berlin</Option>
          </Select>
          <Search
            placeholder={t('searchPlaceholder')}
            onSearch={value => console.log(value)}/>
        </InputGroup>
        {!smallScreen ? <NavMenu className={th.menu}/> : <div className={th.expand}></div>}
        <Button
          className={th.auth}
          ghost={true}
          shape='round'
          onClick={props.onRequestAuth}>
          {t('registration')}
        </Button>
        <Select
          value={i18n.language}
          showArrow={false}
          className={th.lang}
          onChange={(lng) => i18n.changeLanguage(lng)}>
          <Option value='en'>EN</Option>
          <Option value='es'>ES</Option>
        </Select>
      </div>
    </div>
  );
}
