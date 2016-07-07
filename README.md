# Load settings

This package will look for a `settings.json` in your `private/` assets folder.
If an environment variable `NODE_ENV` is found, it will attempt to deep-extend the
`settings.json` with the contents of `settings.<NODE_ENV>.json` and apply the
settings just before `Meteor.startup`.

This package does not play well with other packages that require settings before
`Meteor.startup`.
