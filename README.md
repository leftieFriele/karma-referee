karma-referee
=======================
[![Build Status](https://api.travis-ci.org/leftieFriele/karma-referee.png?branch=master)](https://travis-ci.org/leftieFriele/karma-referee)
[![Dependency Status](https://david-dm.org/leftieFriele/karma-referee.png)](https://david-dm.org/leftieFriele/karma-referee)
[![devDependency Status](https://david-dm.org/leftieFriele/karma-referee/dev-status.png)](https://david-dm.org/leftieFriele/karma-referee#info=devDependencies)

[![NPM](https://nodei.co/npm/karma-referee.png?stars=true&downloads=true)](https://npmjs.org/package/karma-referee)


This project enables you to use [Referee](https://github.com/busterjs/referee) (previously known as [buster-assertions](http://docs.busterjs.org/en/latest/modules/referees/#buster-assertions)) as part of your tests running on [Karma-runner](http://karma-runner.github.io/).

## Installation 

	$ npm install karma-referee --save-dev

Add ``refere`` as a framework:

	frameworks: ['referee']

Then make sure you configure the ``karma-referee`` plugin.

	plugins: [
		'karma-referee'
	]

Viola, you can now enjoy referee's assertion awesomeness from the comfort of your very own Karma-runner!

## Overview 

In addition to referee, the plugin also exposes the features in the [referee-sinon]() module, which provides sinon-specific assertions such as `assert.calledOnce` and others. [Formatio](https://github.com/busterjs/formatio) is also used to pretty-print error messages from [Referee](https://github.com/busterjs/referee) and [Sinon](sinonjs.org).

The plugin expose the assert, refute and expect objects on window.

## Contributors

- [davidaurelio](//github.com/davidaurelio)
- [cjohansen](//github.com/cjohansen)
