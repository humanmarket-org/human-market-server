import * as React from 'react';

import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Content } = Layout;
import { Input } from 'antd';
const Search = Input.Search;

import Header from '../molecules/Header';

interface AppLayoutProps {
  children: any;
  onRequestAuth: () => void;
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
      <Header onRequestAuth={props.onRequestAuth}></Header>
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
