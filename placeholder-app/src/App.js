import React from 'react';
import styled from 'styled-components'
import bgImage from './bg.jpg';

const AppBlock = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  align-content: center;
  height: 100vh;
  background: url(${bgImage}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #2f2f2f;
`;

const SubTitle = styled.div`
  font-size: 1rem;
  font-style: italic;
  color: #606060;
`;

function App() {
  return (
    <AppBlock>
      <Title>Habit Tracker App</Title>
      <SubTitle>Development in progress, stay tuned.</SubTitle>
    </AppBlock>
  );
}

export default App;
