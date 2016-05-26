var navElement =
  React.createElement('div', {},
    React.createElement('a', {href: 'index.html'}, 'Home'),
    React.createElement('span', {}, ' \u00b7 '),
    React.createElement('a', {href: 'product.html'}, 'Product'),
    React.createElement('span', {}, ' \u00b7 '),
    React.createElement('a', {href: 'thanks.html'}, 'Thanks')
  )
ReactDOM.render(navElement, document.getElementById('nav'))
