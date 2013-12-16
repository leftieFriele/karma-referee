/*global referee, refereeSinon, sinon, formatio*/
(function(window){
	'use strict';

	window.assert = referee.assert;
	window.refute = referee.refute;

	refereeSinon(referee, sinon);

    var formatter = formatio.configure({ quoteStrings: false });
    referee.format = function () { return formatter.ascii.apply(formatter, arguments); };
    sinon.format = referee.format;
})(window);
