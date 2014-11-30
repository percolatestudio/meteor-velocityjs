Package.describe({
  summary: "Wrapper for velocity.js includes ui pack",
  version: "1.1.0",
  git: "https://github.com/percolatestudio/meteor-velocityjs.git",
  upstreamVersion: "1.1.0"
});

Package.onUse(function(api) {
  if (api.versionsFrom)
    api.versionsFrom('METEOR@0.9.1');

  api.addFiles(['velocity.js', 'velocity.ui.js'], 'client');
});
