karma-buster-assertions-plugin
=======================

Alert! 
This project is migrating towards using [referee](https://github.com/busterjs/referee), which is the new project which contains everything in [buster-assertions](http://docs.busterjs.org/en/latest/modules/buster-assertions/#buster-assertions), but as a separate module.
This plugin will probably be renamed to reflect this change.

Really simple plugin for using [Karma](http://karma-runner.github.io/)

## Instalation 

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
