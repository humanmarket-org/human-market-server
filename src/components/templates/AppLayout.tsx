import * as React from 'react';

import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content } = Layout;
import { Input } from 'antd';
const Search = Input.Search;

interface AppLayoutProps {
  children: any;
}

const routes = [{
  path: '',
  breadcrumbName: 'Inicio'
}, {
  path: 'mercado',
  breadcrumbName: 'Mercado'
}, {
  path: 'almacen',
  breadcrumbName: 'Almacén'
}];

function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
}

export default function AppLayout(props: AppLayoutProps) {
  return (
    <Layout>
      <Header className='header'>
        <Link to='/' className='logo'></Link>
        <div className='search'>
          <Search
              placeholder='Buscar en Mar del Plata'
              onSearch={value => console.log(value)}
              style={{ width: 300 }}
            />
        </div>

        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key='1'>
            <Link to='/mercado'>Mercado</Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/lugares'>Lugares</Link>
          </Menu.Item>
          <Menu.Item key='3'>
            <Link to='/comunidad'>Comunidad</Link>
          </Menu.Item>
          <Menu.Item key='4'>
            <Link to='/login'>Ingresar</Link>
          </Menu.Item>
        </Menu>

      </Header>
      <Content className='container'>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          itemRender={itemRender}
          routes={routes}/>
        <div className='content'>
          {props.children}
        </div>
      </Content>
    </Layout>
  );
}
