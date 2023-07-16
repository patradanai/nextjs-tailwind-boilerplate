const component = require('./components/config');
const moduleComponent = require('./modules/config');

// Add here more generators
module.exports = function (plop) {
  plop.setGenerator('component', component);
  plop.setGenerator('module', moduleComponent);
};