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

	var initBusterAssertions = function(files) {
		files.unshift(createPattern(__dirname + '/ba-adapter.js'));
		files.unshift(createPattern(__dirname + '/node_modules/referee/lib/expect.js'));
		files.unshift(createPattern(__dirname + '/node_modules/referee/lib/referee.js'));
		files.unshift(createPattern(__dirname + '/node_modules/referee/node_modules/bane/lib/bane.js'));
		files.unshift(createPattern(__dirname + '/node_modules/referee/node_modules/lodash/dist/lodash.js'));
		files.unshift(createPattern(__dirname + '/node_modules/referee/node_modules/samsam/lib/samsam.js'));
	};
	initBusterAssertions.$inject = ['config.files'];
	return {
		'framework:referee': ['factory', initBusterAssertions]
	};
}());

module.exports = exports;
