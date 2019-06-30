import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import Router from 'next/router';
import { Button } from 'antd';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = props => (
  <Mutation mutation={SIGN_OUT_MUTATION}>
    {(signout, { client }) => {
      return (
        <Button type="primary" onClick={() => {
          signout().then(() => {
            sessionStorage.clear()
            client.clearStore();
            Router.push('/');
          });
        }}>Sign Out</Button>
      )
    }}
  </Mutation>
);
export default Signout;
