// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by loadsettings.js.
import { name as packageName } from "meteor/productiveme:loadsettings";

// Write your tests here!
// Here is an example.
Tinytest.add('loadsettings - example', function (test) {
  test.equal(packageName, "loadsettings");
});
