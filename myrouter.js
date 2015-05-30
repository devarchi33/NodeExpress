/**
 * New node file
 */
var service = require('./services');

module.exports = function(app) {

	app.get('/', service.Index);
	app.post('/usrAdd', service.usrAdd);
};