/*global referee, refereeSinon, sinon */
(function(window){
	'use strict';

	window.assert = referee.assert;
	window.refute = referee.refute;

	refereeSinon(referee, sinon);

})(window);
