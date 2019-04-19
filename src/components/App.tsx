import * as React from 'react';

import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const { SubMenu } = Menu;
const {
  Header, Content, Footer, Sider,
} = Layout;

import { Input } from 'antd';

const Search = Input.Search;

interface AppProps {

}

export default class App extends React.Component<AppProps, null> {
  render () {
    return (
      <Layout>
        <Header className='header'>
          <div className='logo'>
          </div>
          <div className='search'>
            <Search
                placeholder='Buscar en el mercado'
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
            <div className='filters'>
              Filter down your search
            </div>
            <div className='results'>
              Actual search results
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}

if (module.hot) {
  module.hot.accept();
}
