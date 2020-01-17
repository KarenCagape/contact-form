import React from 'react';
import RichText from './components/RichText';
import Submit from './components/Submit';
import TextBox from './components/TextBox';
import { Container } from './components/Grid';

function App() {
  return (
    <Container>
      <RichText bg="primary" color="white">
        <h1>React Basics - with Form and Accordion</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a erat at magna tristique consequat et sed lacus. Fusce eleifend semper velit, eget auctor diam luctus quis.</p>
      </RichText>
      <Submit>Request Demo</Submit>
      <TextBox placeholder="Sample field" />
    </Container>
  );
}

export default App;
