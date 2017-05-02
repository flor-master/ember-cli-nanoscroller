/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import({
    development: 'vendor/nanoscroller/bin/javascripts/jquery.nanoscroller.js',
    production: 'vendor/nanoscroller/bin/javascripts/jquery.nanoscroller.min.js',
  });

  app.import('bower_components/nanoscroller/bin/css/nanoscroller.css');

  return app.toTree();
};
