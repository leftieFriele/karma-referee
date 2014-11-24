'use strict';
/*global module, __dirname*/
var path = require('path');
var resolve = require('resolve').sync;

function initRefereeRequiredFiles(files) {
	var additionalFiles = resolveModule(__dirname, [
		'./referee-adapter',
		['formatio', 'samsam'],
		'sinon/pkg/sinon',
		['referee', 'lodash', 'bane', 'referee/lib/expect'],
		'referee-sinon'
	]);
	files.unshift.apply(files, additionalFiles.map(createPattern));
}
initRefereeRequiredFiles.$inject = ['config.files'];

function flatten(arrays) {
	return Array.prototype.concat.apply(Array.prototype, arrays);
}

function createPattern(path) {
	return {
		pattern: path,
		included: true,
		served: true,
		watched: false
	};
}

function resolveModule(basedir, modules) {
	if (typeof modules === 'string') {
		return [resolve(modules, {basedir: basedir})];
	}

	var mainModule = modules.shift();
	var mainModuleFile = resolve(mainModule, {basedir: basedir});
	var mainModuleBasedir = path.dirname(mainModuleFile);
	var dependencyFiles = modules.map(resolveModule.bind(null, mainModuleBasedir));
	return flatten(dependencyFiles).concat(mainModuleFile);
}

module.exports = {
	'framework:referee': ['factory', initRefereeRequiredFiles]
};
