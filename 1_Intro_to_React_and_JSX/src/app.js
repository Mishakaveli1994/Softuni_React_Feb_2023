const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// ? Standard Syntax
// const headingElement = React.createElement('h1', {}, 'Hello From React');
// const secondHeadingElement = React.createElement('h1', {}, 'Second header');
// const headerElement = React.createElement('header', {}, headingElement, secondHeadingElement);

// ? JSX Syntax
const headerElement = (
  <header>
    <h1>Hello from React!</h1>
    <h2>Second header</h2>
  </header>
);

root.render(headerElement);
