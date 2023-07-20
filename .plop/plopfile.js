const component = require('./components/config')
const moduleComponent = require('./modules/config')
const moduleStore = require('./stores/config')

// Add here more generators
module.exports = function (plop) {
    plop.setGenerator('component', component)
    plop.setGenerator('module', moduleComponent)
    plop.setGenerator('store', moduleStore)
}
