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
		files.unshift(createPattern(__dirname + '/node_modules/buster-assertions/lib/buster-assertions.js'));
		files.unshift(createPattern(__dirname + '/node_modules/buster-core/lib/buster-event-emitter.js'));
		files.unshift(createPattern(__dirname + '/node_modules/buster-core/lib/buster-core.js'));
	};

	initBusterAssertions.$inject = ['config.files'];
	return {
		'framework:buster-assertions': ['factory', initBusterAssertions]
	};
}());

module.exports = exports;
