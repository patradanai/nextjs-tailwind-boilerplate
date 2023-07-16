const component = require('./components/config');

// Add here more generators
module.exports = function (plop) {
  plop.setGenerator('component', component);
};