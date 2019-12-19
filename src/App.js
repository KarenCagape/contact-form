import React from 'react';
import RichText from './components/RichText';

function App() {
  return (
    <div className="App">
      <RichText bg="primary" color="white">
        <h1>React Basics - with Form and Accordion</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a erat at magna tristique consequat et sed lacus. Fusce eleifend semper velit, eget auctor diam luctus quis.</p>
      </RichText>
    </div>
  );
}

export default App;
