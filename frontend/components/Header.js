import NProgress from 'nprogress';
import Router from 'next/router';
import Nav from './Nav';
import { Layout } from 'antd';
import styled from 'styled-components';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.div`
  float: left;
  color: white;
`;


const Header = () => (
  <Layout.Header>
    <Logo>Habit Tracker App</Logo>
    <Nav />
  </Layout.Header>
);

export default Header;
