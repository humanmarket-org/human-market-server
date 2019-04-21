import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
import Logo from './Logo';

interface NavMenuProps {
  className: string;
  vertical?: boolean;
}

export default function NavMenu(props: NavMenuProps) {
  return (
    <Menu
      theme='dark'
      mode={props.vertical ? 'inline' : 'horizontal'}
      defaultSelectedKeys={['market:1']}
      className={props.className}>
      <SubMenu title='Mercado'>
        <Menu.Item key='market:1'><Link to='/mercado/almacen'>Almacén</Link></Menu.Item>
        <Menu.Item key='market:2'>Pastelería</Menu.Item>
        <Menu.Item key='market:3'>Delivery</Menu.Item>
        <Menu.Item key='market:5'>Viandas</Menu.Item>
        <Menu.Item key='market:6'>Cosméticos</Menu.Item>
        <Menu.Item key='market:7'>Ropa</Menu.Item>
        <Menu.Item key='market:8'>Servicios</Menu.Item>
        <Menu.Item key='market:9'>Stickers</Menu.Item>
      </SubMenu>
      <SubMenu title='Lugares'>
        <Menu.Item key='places:1'><Link to='/lugares/restaurantes'>Restaurantes</Link></Menu.Item>
        <Menu.Item key='places:2'><Link to='/lugares/dieteticas'>Dietéticas</Link></Menu.Item>
        <Menu.Item key='places:3'><Link to='/lugares/centros-comunitarios'>Centros Comunitarios</Link></Menu.Item>
      </SubMenu>
      <SubMenu title='Comunidad'>
        <Menu.Item key='community:1'><Link to='/comunidad/organizaciones'>Organizaciones</Link></Menu.Item>
        <Menu.Item key='community:2'><Link to='/comunidad/activismo'>Activismo</Link></Menu.Item>
        <Menu.Item key='community:3'><Link to='/comunidad/agorismo'>Agorismo</Link></Menu.Item>
        <Menu.Item key='community:4'><Link to='/comunidad/emprendedores'>Emprendedores</Link></Menu.Item>
        <Menu.Item key='community:5'><a target='_blank' href='https://matrix.to/#/+activismo-mar-del-plata:matrix.org'>Chat de la ciudad</a></Menu.Item>
        <Menu.Item key='community:6'><a target='_blank' href='https://github.com/webinstitutions-org/human-market-client'>Github</a></Menu.Item>
      </SubMenu>
    </Menu>
  );
}
