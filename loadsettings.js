// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See loadsettings-tests.js for an example of importing.
// export const name = 'loadsettings';

import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import fs from 'fs';

__meteor_bootstrap__.startupHooks.unshift(function() {
  // load default settings unless specified
  const environment = process.env.NODE_ENV || "development";
  const assets_root = __meteor_bootstrap__.serverDir + '/assets/app';
  let settings = JSON.parse(process.env.METEOR_SETTINGS || fs.readFileSync(`${assets_root}/settings.json`, {encoding: 'utf8'}));
  let settingsTransform = {};
  try {
    settingsTransform = JSON.parse(fs.readFileSync(`${assets_root}/settings.${environment}.json`, {encoding: 'utf8'}));
  } catch (error) {}

  const deep = function(a, b) {
    return _.isObject(a) && _.isObject(b) ? _.extend(a, b, deep) : b;
  }

  settings = _.extend(settings, settingsTransform, deep);
  Meteor.settings = _.defaults(Meteor.settings, settings);
  if (settings["public"]) {
    Meteor.settings["public"] = _.defaults(Meteor.settings["public"] || {}, settings["public"]);
  }
  // If you have public settings that need to be exposed to the client,
  // you can set them like this
  if (Meteor.settings && Meteor.settings["public"]) {
    Meteor.settings["public"].environment = environment;
    __meteor_runtime_config__.PUBLIC_SETTINGS = Meteor.settings["public"];
  }
  console.log("settings applied for " + environment);
});
