import * as React from 'react';

import { useTranslation } from 'react-i18next';
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

const routes = (t) => [{
  path: '',
  breadcrumbName: t('home')
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
  const { t } = useTranslation();

  return (
    <Layout>
      <Header onRequestAuth={props.onRequestAuth}></Header>
      <Content className='container'>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          itemRender={itemRender}
          routes={routes(t)}/>
        <div className='content'>
          {props.children}
        </div>
      </Content>
    </Layout>
  );
}
