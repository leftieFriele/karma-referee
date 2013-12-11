karma-referee
=======================

This project enables you to use [referee](https://github.com/busterjs/referee) (previously known as [buster-assertions](http://docs.busterjs.org/en/latest/modules/referees/#buster-assertions)) as part of your tests running on [Karma-runner](http://karma-runner.github.io/).

In addition to referee the plugin also expose the features in the [referee-sinon]() module which provides sinon features as part of your assertions.

## Instalation 

	$ npm install karma-referee --save-dev

Add ``referees` as a framework:

	frameworks: ['referee']


Then make sure you configure the ``karma-referee`` plugin.

	plugins: [
		'karma-referee'
	]

Viola, you can now enjoy the assertions awesomeness from Referee in the comfort of your very own Karma-runner!
	...
	assert.isTrue(true);
	refute.isTrue(object);
	...
	assert.calledOnce(stub);
