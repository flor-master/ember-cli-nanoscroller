/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-nanoscroll',
  options: {
    nodeAssets: {
      'jquery.nanoScroller': {
        vendor: [
          'vendor/nanoscroller/bin/javascripts/jquery.nanoscroller.js',
          'vendor/nanoscroller/bin/css/nanoscroller.css',
        ]
      }
    }
  },

   included() {
     this._super.included.apply(this, arguments);

     if (!process.env.EMBER_CLI_FASTBOOT) {
       this.import('vendor/nanoscroller/bin/javascripts/jquery.nanoscroller.js');
       this.import('vendor/nanoscroller/bin/css/nanoscroller.css');
     }
   }
};
