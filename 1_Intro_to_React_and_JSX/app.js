var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

var headingElement = React.createElement('h1', {}, 'Hello From React');
var secondHeadingElement = React.createElement('h1', {}, 'Second header');
var headerElement = React.createElement('header', {}, headingElement, secondHeadingElement);
root.render(headerElement);