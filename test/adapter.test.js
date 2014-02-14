
var assert = require("assert");
var formatio = require("formatio");

describe('karma adapter', function(){

  global.formatio = formatio;
  global.window = {};
  global.sinon = {};
  global.referee = {'assert': {}, 'refute': {}, 'expect': function() {}};
  global.refereeSinon = function(){}

  it('should provide the assert and refute objects', function(){
    require('../lib/referee-adapter.js');
    assert.equal(global.window.assert, global.referee.assert);
    assert.equal(global.window.refute, global.referee.refute);
  });

  it('should provide the expect function', function(){
    require('../lib/referee-adapter.js');
    assert.equal(global.window.expect, global.referee.expect);
  });

  it('configures pretty-printer for referee and sinon', function(){
    require('../lib/referee-adapter.js');
    assert.equal(global.referee.format({ a: 1 }), '{ a: 1 }');
    assert.equal(global.sinon.format({ b: 2 }), '{ b: 2 }');
  });

});
