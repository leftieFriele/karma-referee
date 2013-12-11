
var assert = require("assert");

describe('karma plugin', function() {

  var pluginModule = require('../lib/index.js');

  it('should provide correct karma plugin configuration', function(){
    assert.notEqual(pluginModule, null);

    var framework = Object.keys(pluginModule)[0];
    assert.equal(framework, 'framework:referee');
  });

  it('should provide referee and all its dependencies in the plugin configuration', function(){
    
    var filesString = JSON.stringify(getPluginFiles(pluginModule));
    contains(filesString, 'referee-adapter');
    contains(filesString, 'referee-sinon');
    contains(filesString, 'expect');
    contains(filesString, 'referee');
    contains(filesString, 'sinon');
    contains(filesString, 'samsam');
    contains(filesString, 'lodash');
    contains(filesString, 'bane');
  });

  function getPluginFiles(module){
    var framework = Object.keys(module)[0];
    var factory = module[framework];
    var files = [];
    factory[1](files);
    return files
  }

  function contains(string, target){
    assert.notEqual(string.indexOf(target), -1);
  }

});
