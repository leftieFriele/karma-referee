karma-referee
=======================

[![NPM](https://nodei.co/npm/karma-referee.png?stars=true&downloads=true)](https://npmjs.org/package/karma-referee)


This project enables you to use [referee](https://github.com/busterjs/referee) (previously known as [buster-assertions](http://docs.busterjs.org/en/latest/modules/referees/#buster-assertions)) as part of your tests running on [Karma-runner](http://karma-runner.github.io/).

In addition to referee, the plugin also exposes the features in the [referee-sinon]() module, which provides sinon-specific assertions such as `assert.calledOnce` and others. [formatio](https://github.com/busterjs/formatio) is also used to pretty-print error messages from referee and sinon.

## Installation 

	$ npm install karma-referee --save-dev

Add ``refere`` as a framework:

	frameworks: ['referee']

Then make sure you configure the ``karma-referee`` plugin.

	plugins: [
		'karma-referee'
	]

Viola, you can now enjoy referee's assertion awesomeness from the comfort of your very own Karma-runner!

## Contributors

- [davidaurelio](//github.com/davidaurelio)
- [cjohansen](//github.com/cjohansen)
