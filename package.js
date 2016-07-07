Package.describe({
  name: 'productiveme:loadsettings',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'This package will look for a settings.json in your private/ assets folder. If an environment variable NODE_ENV is found, it will attempt to deep-extend the settings.json with the contents of settings.<NODE_ENV>.json and apply the settings just before Meteor.startup. This package does not play well with other packages that require settings before Meteor.startup.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript','underscore']);
  api.addFiles('loadsettings.js','server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('productiveme:loadsettings');
  api.mainModule('loadsettings-tests.js');
});
