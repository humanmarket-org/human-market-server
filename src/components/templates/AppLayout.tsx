import * as React from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content } = Layout;
import { Input } from 'antd';
const Search = Input.Search;

interface AppLayoutProps {
  children: any;
}

export default function AppLayout(props: AppLayoutProps) {
  return (
    <Layout>
      <Header className='header'>
        <a className='logo' href='/'>
        </a>
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
          <Menu.Item key='1'>Mercado</Menu.Item>
          <Menu.Item key='2'>Lugares</Menu.Item>
          <Menu.Item key='3'>Comunidad</Menu.Item>
          <Menu.Item key='4'>Ingresar</Menu.Item>
        </Menu>

      </Header>
      <Content className='container'>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item>Mercado</Breadcrumb.Item>
          <Breadcrumb.Item>Almacén</Breadcrumb.Item>
        </Breadcrumb>
        <div className='content'>
          {props.children}
        </div>
      </Content>
    </Layout>
  );
}
