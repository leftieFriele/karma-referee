karma-buster-assertions-plugin
=======================

Really simple plugin for using [buster-assertions](http://docs.busterjs.org/en/latest/modules/buster-assertions/#buster-assertions) with [Karma](http://karma-runner.github.io/)

# Instalation 

	$ npm install karma-buster-assertion-plugin --save-dev

Add ``buster-assertions` as a framework:

	frameworks: ['buster-assertions']


Then make sure you configure the ``karma-buster-assertions`` plugin.

	plugins: [
		'karma-buster-assertions-plugin'
	]

Viola, you can now enjoy the assertions awesomeness from Buster in the comfort of your very own Karma-runner!


	...
	var assert = buster.assertions.assert;
	...
	assert.isTrue(true)
	...

# Dependencies
	
* buster-core
* buster-assertions
