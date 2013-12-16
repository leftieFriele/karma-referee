/*global module, __dirname*/

var exports = (function() {
	'use strict';

	var createPattern = function(path) {
		return {
			pattern: path,
			included: true,
			served: true,
			watched: false
		};
	};
	
	var initRefereeRequiredFiles = function(files) {
		files.unshift(createPattern(__dirname + '/referee-adapter.js'));
		files.unshift(createPattern(__dirname + '/../node_modules/referee-sinon/lib/referee-sinon.js'));
		files.unshift(createPattern(__dirname + '/../node_modules/referee/lib/expect.js'));
		files.unshift(createPattern(__dirname + '/../node_modules/referee/lib/referee.js'));
		files.unshift(createPattern(__dirname + '/../node_modules/referee/node_modules/bane/lib/bane.js'));
		files.unshift(createPattern(__dirname + '/../node_modules/referee/node_modules/lodash/dist/lodash.js'));
		files.unshift(createPattern(__dirname + '/../node_modules/sinon/pkg/sinon-1.7.3.js'));
	    files.unshift(createPattern(__dirname + '/../node_modules/formatio/lib/formatio.js'));
		files.unshift(createPattern(__dirname + '/../node_modules/referee/node_modules/samsam/lib/samsam.js'));
	};
	initRefereeRequiredFiles.$inject = ['config.files'];
	return {
		'framework:referee': ['factory', initRefereeRequiredFiles]
	};
}());

module.exports = exports;
