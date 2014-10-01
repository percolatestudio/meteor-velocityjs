Package.describe({
  summary: "Wrapper for velocity.js includes ui pack (upstream version: 1.0.0)",
  version: "1.0.0",
  git: "https://github.com/percolatestudio/meteor-velocityjs.git",
  upstreamVersion: "1.0.0"
});

Package.onUse(function(api) {
  if (api.versionsFrom)
    api.versionsFrom('METEOR@0.9.1');
    
  api.use('jquery', 'client');

  api.addFiles(['velocity.js', 'velocity.ui.js'], 'client');
});
