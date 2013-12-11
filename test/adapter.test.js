
var assert = require("assert");

describe('karma adapter', function(){

  beforeEach(function(){
    global.window = {};
    global.sinon = {};
    global.referee = {'assert': {}, 'refute': {}};
    global.refereeSinon = function(){}
  });

  it('should provide the assert and refute objects', function(){
    require('../lib/referee-adapter.js');
    assert.equal(global.window.assert, global.referee.assert);
    assert.equal(global.window.refute, global.referee.refute);
  });

});
