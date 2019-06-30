import 'antd/dist/antd.css';
import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { Layout } from 'antd';
import Header from './Header';
import Meta from './Meta';

const theme = {
  maxWidth: '1000px',
};

const Inner = styled(Layout.Content)`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  body {
    background: #f0f2f5 !important;
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default Page;
