var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

// ? Standard Syntax
// const headingElement = React.createElement('h1', {}, 'Hello From React');
// const secondHeadingElement = React.createElement('h1', {}, 'Second header');
// const headerElement = React.createElement('header', {}, headingElement, secondHeadingElement);

// ? JSX Syntax
var headerElement = React.createElement(
  'header',
  null,
  React.createElement(
    'h1',
    null,
    'Hello from React!'
  ),
  React.createElement(
    'h2',
    null,
    'Second header'
  )
);

root.render(headerElement);